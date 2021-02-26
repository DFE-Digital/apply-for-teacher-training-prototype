const utils = require('./../utils')

function createNewApplication (req) {
  const code = utils.generateRandomString()
  const data = req.session.data

  if (typeof data.applications === 'undefined') {
    data.applications = {}
  }

  if (typeof data.applications[code] === 'undefined') {
    data.applications[code] = {
      status: 'started',
      apply2: false,
      choices: {},
      references: {},
      candidate: {},
      'contact-details': {},
      'reasonable-adjustments': {},
      suitability: {},
      degree: {},
      'other-qualifications': {},
      gcse: {
        maths: {},
        english: {},
        science: {}
      },
      'subject-knowledge': null,
      'interview-choice': null,
      interview: null,
      'personal-statement': null,
      'work-history': {},
      'school-experience': {}
    }
  }

  return code
}

/**
 * Application routes
 */
module.exports = router => {
  router.all('/application', (req, res) => {
    if (utils.hasStartedApplications(req)) {
      res.redirect('/application/started')
    } else {
      res.redirect('/application/start')
    }
  })

  // Generate new applicationID and redirect to that application
  router.get('/application/start', (req, res) => {
    const code = createNewApplication(req)
    req.session.data.applications[code].welcomeFlow = true

    if (req.session.data.course_from_find) {
      // If coming from Find, go straight to course selection
      res.redirect(`/application/${code}/choices/add`)
    } else {
      // Otherwise, give some context about the Apply pilot
      res.redirect(`/application/${code}/before-you-start`)
    }
  })

  router.get('/application/start/choice', (req, res) => {
    const code = createNewApplication(req)
    res.redirect(`/application/${code}/choices/add`)
  })

  router.all('/application/started', (req, res) => {
    const { applications } = req.session.data
    const applicationId = Object.entries(applications).filter(a => a[1].status === 'started')[0][0]
    if (applicationId) {
      res.redirect('/application/' + applicationId)
    }
  })

  // Render application page
  router.all('/application/:applicationId', (req, res) => {
    const showCopiedBanner = req.query.copied
    const thisApplication = utils.applicationData(req)
    const prevApplication = req.session.data.applications['12345']
    let { choices } = prevApplication

    // Choices from previous application
    // Only shown when applying again
    if (thisApplication.apply2) {
      choices = utils.toArray(choices)
      choices[0].hasFeedback = true
      choices[0].status = 'Unsuccessful'
      choices[1].hasFeedback = true
      choices[1].status = 'Unsuccessful'
      choices[2].status = 'Offer declined'
    }

    req.session.data.applications[req.params.applicationId].welcomeFlow = false
    res.render('application/index', {
      showCopiedBanner,
      choices,
      closed: req.query.closed
    })
  })

  // Render before you start page
  router.all('/application/:applicationId/before-you-start', (req, res) => {
    res.render('application/before-you-start', { showCopiedBanner: req.query.copied })
  })

  // Generate apply2 application from an existing one
  router.get('/application/:applicationId/apply2', (req, res) => {
    const code = 12346
    const { applications } = req.session.data
    const existingApplicationId = req.params.applicationId
    const existingApplication = applications[existingApplicationId]
    const apply2Application = JSON.parse(JSON.stringify(existingApplication))

    apply2Application.welcomeFlow = false
    apply2Application.apply2 = true
    apply2Application.choices = {}
    apply2Application.completed.choices = false
    apply2Application.previousApplications = [existingApplicationId]

    if (apply2Application.references && apply2Application.references[0]) {
      apply2Application.references[0].status = 'Received'
    }

    if (apply2Application.references && apply2Application.references[1]) {
      apply2Application.references[1].status = 'Received'
    }

    applications[code] = apply2Application

    res.redirect(`/application/${code}/before-you-start?copied=true`)
  })

  // Render submitted page
  router.all('/application/:applicationId/submitted', (req, res) => {
    const { referrer } = req.query

    res.render('application/submitted', {
      referrer
    })
  })

  require('./application/choices')(router)
  require('./application/personal-details')(router)
  require('./application/contact-details')(router)
  require('./application/english-language')(router)
  require('./application/work-history')(router)
  require('./application/school-experience')(router)
  require('./application/reasonable-adjustments')(router)
  require('./application/suitability')(router)
  require('./application/vocation')(router)
  require('./application/degree')(router)
  require('./application/gcse')(router)
  require('./application/other-qualifications')(router)
  require('./application/personal-statement')(router)
  require('./application/subject-knowledge')(router)
  require('./application/interview')(router)
  require('./application/references')(router)
  require('./application/review')(router)
  require('./application/equality-monitoring')(router)
  require('./application/confirmation')(router)
  require('./application/dashboard')(router)
  require('./application/decision')(router)

  // Render provided view, or index template for that view if not found
  router.all('/application/:applicationId/:view', (req, res) => {
    const { referrer } = req.query

    res.render(
      `application/${req.params.view}`,
      {},
      (error, html) => {
        if (error && error.message.includes('template not found')) {
          res.render(`application/${req.params.view}/index`, {
            referrer
          })
        } else {
          res.send(html)
        }
      }
    )
  })
}
