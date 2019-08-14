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
}
