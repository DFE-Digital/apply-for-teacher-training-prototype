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

// UR: Hard-coded template values for use during research sesions
const urChoices = [{
  // Participant declines offer on first choice
  providerName: 'Gorse SCITT',
  courseName: 'Primary (2XT2)',
  courseDate: 'September 2020',
  conditionsList: '* Fitness to teach check\n* Disclosure and Barring Service check'
}, {
  // Participant is rejected on second choice
  providerName: 'Leeds Trinity University',
  courseName: 'Primary (3-7) (2VLT)',
  courseDate: 'September 2020',
  reasonsList: '* Candidate didn’t come to the interview or assessment'
}, {
  // Participant accepts offer on third choice
  providerName: 'Bradford College',
  courseName: 'Primary (X100)',
  courseDate: 'September 2020',
  conditionsList: '* Fitness to teach check\n* Disclosure and Barring Service check'
}]

/**
 * Email routes
 */
module.exports = router => {
  // Account: Welcome
  router.get('/account/account-created', (req, res) => {
    if (!req.session.data.welcomeEmailSent) {
      sendEmail(req, '8aa601b6-9985-471e-bd28-5fe0697820e5')
    }

    req.session.data.welcomeEmailSent = true
    res.redirect('/application/start')
  })

  // Account: Sign up
  router.post('/send-email/create-account', (req, res) => {
    sendEmail(req, 'd19c241f-73f9-45da-a9cc-6613f9b3d2da')
    res.redirect('/account/check-email/create-account')
  })

  // Account: Sign in
  router.post('/send-email/sign-in', (req, res) => {
    sendEmail(req, 'c3457068-675e-4ff9-963e-2e7444607bad')
    res.redirect('/account/check-email/sign-in')
  })

  // Confirmation: (Amended) application submitted
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

    let notifyTemplate
    if (application.status === 'amending') {
      // Application is about to be amended
      notifyTemplate = '92231b36-2050-4f4a-b73b-b13a82fe6373'
    } else {
      // Application is about to be submitted
      notifyTemplate = '99a20df5-564d-4612-810e-3788edf7285e'
    }

    sendEmail(req, notifyTemplate, {
      reference: applicationId,
      candidateName,
      choiceList: choices.join('\n'),
      amendDate: nowPlusDays(7, 'd MMMM yyyy')
    })
    res.redirect(`/application/${applicationId}/confirmation`)
  })

  // Decision: Rejected/Offer made
  router.post('/admin/send-email', (req, res) => {
    const name = req.session.data.name
    const email = req.session.data.email

    let notifyTemplate
    let providerName
    let courseName
    let courseDate
    let outstandingResponsesList
    let conditionsList
    let reasonsList
    switch (email) {
      case 'offer': {
        notifyTemplate = '2a3478f7-e1bb-45a5-ae3c-2acac1448087';
        ({ providerName, courseName, courseDate, conditionsList } = urChoices[0])
        outstandingResponsesList = `* ${urChoices[1].providerName} — ${urChoices[1].courseName}\n* ${urChoices[2].providerName} — ${urChoices[2].courseName}`
        break
      }
      case 'reject': {
        notifyTemplate = '621e621d-66b6-4894-9f9e-7b9483929db7';
        ({ providerName, courseName, courseDate, reasonsList } = urChoices[1])
        outstandingResponsesList = `* ${urChoices[2].providerName} — ${urChoices[2].courseName}`
        break
      }
      case 'final-offer': {
        notifyTemplate = 'd1cde367-8ad8-4cb4-8e4f-f369f6699ade';
        ({ providerName, courseName, courseDate, conditionsList } = urChoices[2])
        break
      }
    }

    sendEmail(req, notifyTemplate, {
      candidateName: name || 'candidate',
      dbdDate: nowPlusDays(12, 'd MMMM yyyy'),
      providerName,
      courseName,
      courseDate,
      outstandingResponsesList,
      conditionsList, // Offer emails only
      reasonsList // Reject emails only
    })
    res.redirect('/admin/send-email-success')
  })

  // Confirmation: Decision made
  router.post('/send-email/:applicationId/:choiceId/decision', (req, res) => {
    const applicationId = req.params.applicationId
    const application = req.session.data.applications[applicationId]
    const choiceId = req.params.choiceId
    const { decision } = req.session.data

    let phase
    let notifyTemplate
    const choice = application.choices[choiceId]
    switch (decision) {
      case 'withdraw': {
        notifyTemplate = '9ac2723b-11c3-4491-9ec5-88b472403ea2'
        choice.status = 'withdrawn'
        break
      }
      case 'accept': {
        notifyTemplate = '7446b2c8-1bf1-42a8-b325-509b8dabe747'
        choice.status = 'accepted'
        phase = 'decision'
        break
      }
      case 'decline': {
        notifyTemplate = '906399c1-8694-4430-bcbf-c12cc06fd5a7'
        choice.status = 'declined'
        phase = 'decision'
        break
      }
    }

    // UR: Decision is made on third course choice
    sendEmail(req, notifyTemplate, {
      reference: applicationId,
      candidateName: application['given-name'] || 'applicant',
      providerName: urChoices[2].providerName,
      courseName: urChoices[2].courseName,
      courseDate: urChoices[2].courseDate,
      conditionsList: urChoices[2].conditionsList
    })

    if (phase) {
      res.redirect(`/applications?phase=${phase}`)
    } else {
      res.redirect('/applications')
    }
  })
}
