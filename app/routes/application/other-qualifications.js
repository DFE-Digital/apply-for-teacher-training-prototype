const utils = require('./../../utils')

/**
 * Application: Other relevant qualifications routes
 */
module.exports = router => {
  // Generate new qualificationId and redirect to that qualification
  router.get('/application/:applicationId/other-qualifications/add', (req, res) => {
    const qualificationId = utils.generateRandomString()
    res.redirect(`/application/${req.params.applicationId}/other-qualifications/${qualificationId}?${utils.queryString(req)}`)
  })

  // Render review page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/other-qualifications/review', (req, res) => {
    res.render('application/other-qualifications/review')
  })

  // Render details page
  router.get('/application/:applicationId/other-qualifications/:qualificationId', (req, res) => {
    const qualificationId = req.params.qualificationId
    const referrer = req.query.referrer

    res.render('application/other-qualifications/index', {
      formaction: referrer || `/application/${req.params.applicationId}/other-qualifications/review`,
      qualificationId,
      referrer
    })
  })
}
