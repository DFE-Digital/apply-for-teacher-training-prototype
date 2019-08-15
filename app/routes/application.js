const utils = require('./../utils')

/**
 * Application routes
 */
module.exports = router => {
  // Generate new applicationID and redirect to that application
  router.get('/application/start', function (req, res) {
    var code = utils.generateRandomString()
    var data = req.session.data

    if (typeof data.applications === 'undefined') {
      data.applications = {}
    }

    data.applications[code] = { started: true }
    res.redirect(`/application/${code}`)
  })

  // Render application page
  router.all('/application/:applicationId', function (req, res) {
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
  router.all('/application/:applicationId/:view', function (req, res) {
    res.render(
      `application/${req.params.view}`,
      {},
      function (error, html) {
        if (error && error.message.includes('template not found')) {
          res.render(`application/${req.params.view}/index`)
        } else {
          res.send(html)
        }
      }
    )
  })
}
