const utils = require('../../utils')

module.exports = router => {
  // Render review page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/english-language/review', (req, res) => {
    res.render('application/english-language/review')
  })

  router.post('/application/:applicationId/english-language', (req, res) => {
    const application = utils.applicationData(req)
    const { applicationId } = req.params
    const { referrer } = req.query
    const { answer } = application.englishLanguage

    let path
    if (answer === 'Yes') {
      path = referrer || `/application/${applicationId}/english-language/type`
    } else {
      path = `/application/${applicationId}/english-language/review`
    }

    res.redirect(path)
  })

  // Render type and details pages
  router.get('/application/:applicationId/english-language/:view(details|type)', (req, res) => {
    const application = utils.applicationData(req)
    const { view } = req.params
    const { referrer } = req.query
    const { type } = application.englishLanguage

    res.render(`application/english-language/${view}`, {
      referrer,
      type
    })
  })
}
