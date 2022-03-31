const utils = require('../../utils')

module.exports = router => {
  // First page
  router.get('/application/:applicationId/personal-information', (req, res) => {
    const { referrer } = req.query

    res.render('application/personal-information/index', {
      referrer
    })
  })

  // Render other personal information pages
  router.get('/application/:applicationId/personal-information/:view', (req, res) => {
    const { view } = req.params
    const { referrer } = req.query

    res.render(`application/personal-information/${view}`, {
      referrer
    })
  })
}
