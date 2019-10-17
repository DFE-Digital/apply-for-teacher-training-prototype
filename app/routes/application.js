const utils = require('./../utils')

function createNewApplication (req) {
  var code = req.app.locals.urStudy || utils.generateRandomString()
  var data = req.session.data

  if (typeof data.applications === 'undefined') {
    data.applications = {}
  }

  if (typeof data.applications[code] === 'undefined') {
    data.applications[code] = { status: 'started' }
  }

  return code
}

/**
 * Application routes
 */
module.exports = router => {
  router.all('/applications', (req, res) => {
    if (utils.hasSubmittedApplications(req)) {
      res.render('applications/index')
    } else if (utils.hasStartedApplications(req)) {
      res.redirect('/application/started')
    } else {
      res.redirect('/application/start')
    }
  })

  // Generate new applicationID and redirect to that application
  router.get('/application/start', (req, res) => {
    var code = createNewApplication(req)
    res.redirect(`/application/${code}`)
  })

  router.get('/application/start/choice', (req, res) => {
    var code = createNewApplication(req)
    res.redirect(`/application/${code}/choices/add`)
  })

  router.all('/application/started', (req, res) => {
    var applications = req.session.data.applications
    var applicationId = Object.entries(applications).filter(a => a[1].status === 'started')[0][0]
    if (applicationId) {
      res.redirect('/application/' + applicationId)
    }
  })

  // Render application page
  router.all('/application/:applicationId', (req, res) => {
    res.render('application/index')
  })

  // Render review page
  router.get('/application/:applicationId/review', (req, res) => {
    res.render('application/review')
  })

  router.post('/application/:applicationId/review', (req, res) => {
    // If updating jobs or roles, ensure dates are saved using ISO 8601 format
    const id = req.query.update
    const applicationData = utils.applicationData(req)
    const workHistory = applicationData['work-history']
    const schoolExperience = applicationData['school-experience']
    const referer = req.get('referer')

    if (id && referer.includes('work-history')) {
      utils.saveIsoDate(req, workHistory, id)
    }

    if (id && referer.includes('school-experience')) {
      utils.saveIsoDate(req, schoolExperience, id)
    }

    res.render('application/review')
  })

  // Export data
  router.get('/application/:applicationId/export', (req, res) => {
    const applicationId = req.params.applicationId
    res.json(req.session.data.applications[applicationId])
  })

  require('./application/choices')(router)
  require('./application/personal-details')(router)
  require('./application/contact-details')(router)
  require('./application/work-history')(router)
  require('./application/school-experience')(router)
  require('./application/disability')(router)
  require('./application/vocation')(router)
  require('./application/degree')(router)
  require('./application/gcse')(router)
  require('./application/other-qualifications')(router)
  require('./application/personal-statement')(router)
  require('./application/references')(router)
  require('./application/equality-monitoring')(router)

  // Change status of an application to submitted
  router.all('/application/:applicationId/confirmation', (req, res) => {
    req.session.data.applications[req.params.applicationId].status = 'submitted'
    res.render('application/confirmation')
  })

  router.all('/application/:applicationId/email/submitted', (req, res) => {
    res.render('email/application-submitted')
  })

  // Render provided view, or index template for that view if not found
  router.all('/application/:applicationId/:view', (req, res) => {
    const referrer = req.query.referrer

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
