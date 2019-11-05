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

/**
 * Email routes
 */
module.exports = router => {
  // Account created
  router.get('/account/account-created', (req, res) => {
    if (!req.session.data.welcomeEmailSent) {
      sendEmail(req, '8aa601b6-9985-471e-bd28-5fe0697820e5')
    }

    req.session.data.welcomeEmailSent = true
    res.redirect('/application/start')
  })

  router.post('/send-email/create-account', (req, res) => {
    sendEmail(req, 'd19c241f-73f9-45da-a9cc-6613f9b3d2da')
    res.redirect('/account/check-email/create-account')
  })

  router.post('/send-email/sign-in', (req, res) => {
    sendEmail(req, 'c3457068-675e-4ff9-963e-2e7444607bad')
    res.redirect('/account/check-email/sign-in')
  })

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
}
