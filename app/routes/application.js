const utils = require('./../utils')

function createNewApplication(req) {
  var code = utils.generateRandomString()
  var data = req.session.data

  if (typeof data.applications === 'undefined') {
    data.applications = {}
  }

  data.applications[code] = { status: 'started' }
  return code;
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

  router.get('/application/start/course', (req, res) => {
    var code = createNewApplication(req)
    res.redirect(`/application/${code}/course/add`)
  })

  router.all('/application/started', (req, res) => {
    var applications = req.session.data.applications
    var applicationId = Object.entries(applications).filter(a => a[1].status == 'started')[0][0];
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

  require('./application/personal-details')(router)
  require('./application/contact-details')(router)
  require('./application/subject-knowledge')(router)
  require('./application/work-history')(router)
  require('./application/school-experience')(router)
  require('./application/vocation')(router)
  require('./application/degree')(router)
  require('./application/gcse')(router)
  require('./application/qualifications')(router)
  require('./application/other-qualifications')(router)
  require('./application/references')(router)
  require('./application/interview')(router)

  // Render provided view, or index template for that view if not found
  router.all('/application/:applicationId/:view', (req, res) => {
    res.render(
      `application/${req.params.view}`,
      {},
      (error, html) => {
        if (error && error.message.includes('template not found')) {
          res.render(`application/${req.params.view}/index`)
        } else {
          res.send(html)
        }
      }
    )
  })
}
