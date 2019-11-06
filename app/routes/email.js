const { DateTime } = require('luxon')
const NotifyClient = require('notifications-node-client').NotifyClient
const notify = new NotifyClient(process.env.NOTIFYAPIKEY)

const providers = require('./../data/providers')

// Emails will only send if the email address has been whitelisted
const sendEmail = (req, template, personalisation) => {
  const email = req.session.data.account && req.session.data.account.email
  personalisation = personalisation || {}
  personalisation.url = req.get('origin') || `${req.protocol}://${req.get('host')}`

  if (email) {
    notify.sendEmail(
      template,
      email,
      { personalisation }
    )
  }
}

const getProvider = (providerCode) => {
  return providers[providerCode]
}

const getCourse = (providerCode, courseCode) => {
  return providers[providerCode].courses[courseCode]
}

const nowPlusDays = (days, format = 'yyyy-LL-dd') => {
  const date = DateTime.local().plus({ days: days })

  return DateTime.fromISO(date, {
    locale: 'en-GB'
  }).toFormat(format)
}

/**
 * Email routes
 */
module.exports = router => {
  // Send welcome email when account created
  router.get('/account/account-created', (req, res) => {
    if (!req.session.data.welcomeEmailSent) {
      sendEmail(req, '8aa601b6-9985-471e-bd28-5fe0697820e5')
    }

    req.session.data.welcomeEmailSent = true
    res.redirect('/application/start')
  })

  // Send magic link to verify email address when creating an account
  router.post('/send-email/create-account', (req, res) => {
    sendEmail(req, 'd19c241f-73f9-45da-a9cc-6613f9b3d2da')
    res.redirect('/account/check-email/create-account')
  })

  // Send magic link to verify email address when signing in
  router.post('/send-email/sign-in', (req, res) => {
    sendEmail(req, 'c3457068-675e-4ff9-963e-2e7444607bad')
    res.redirect('/account/check-email/sign-in')
  })

  // Send confirmation email when application submitted
  router.post('/send-email/:applicationId/application-submitted', (req, res) => {
    const applicationId = req.params.applicationId
    const application = req.session.data.applications[applicationId]
    const candidateName = application['given-name'] || 'applicant'

    const choices = []
    for (const choice in application.choices) {
      const { courseCode, providerCode } = application.choices[choice]
      const provider = getProvider(providerCode)
      const course = getCourse(providerCode, courseCode)
      const result = `* ${provider.name} - ${course.name_and_code}\nStarting 5 September 2020`
      choices.push(result)
    }

    sendEmail(req, '99a20df5-564d-4612-810e-3788edf7285e', {
      reference: applicationId,
      candidateName,
      choiceList: choices.join('\n')
    })
    res.redirect(`/application/${applicationId}/confirmation`)
  })

  // Send rejected application email
  router.post('/admin/send-email', (req, res) => {
    const name = req.session.data.name
    const notifyTemplate = req.session.data['notify-template']

    let outstandingResponsesList
    if (notifyTemplate === '2a3478f7-e1bb-45a5-ae3c-2acac1448087') {
      // Offer template
      outstandingResponsesList = '* (Name of training provider) - (Name of course)\n* (Name of training provider) - (Name of course)'
    } else {
      outstandingResponsesList = '* (Name of training provider) - (Name of course)'
    }

    sendEmail(req, notifyTemplate, {
      candidateName: name || 'candidate',
      providerName: '(Name of training provider)',
      courseName: '(Name of course)',
      dbdDate: nowPlusDays(12, 'd MMMM yyyy'),
      outstandingResponsesList,

      // Offer email
      courseDate: '5 September 2020',
      conditionsList: '* Fitness to teach check\n* Disclosure and Barring Service check',

      // Rejected email
      reasonsList: '* Candidate didn’t come to the interview or assessment'
    })
    res.redirect('/admin/send-email-success')
  })
}
