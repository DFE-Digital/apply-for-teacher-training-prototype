const utils = require('./../utils')

module.exports = router => {
  /**
    * Application: Other qualifications(s) - Review
    */
  router.get('/application/:applicationId/other-qualifications/review', (req, res) => {
    res.render('application/other-qualifications/review')
  })

  /**
    * Application: Generate ID to add new qualification
    */
  router.get('/application/:applicationId/other-qualifications/add', (req, res) => {
    const qualificationId = utils.generateRandomString()
    res.redirect(`/application/${req.params.applicationId}/other-qualifications/${qualificationId}?${utils.queryString(req)}`)
  })

  /**
    * Application: Other qualification(s) - Add/edit
    * @param {String} qualificationId Qualification ID
    */
  router.get('/application/:applicationId/other-qualifications/:qualificationId', (req, res) => {
    const applicationId = req.params.applicationId
    const qualificationId = req.params.qualificationId
    const referrer = req.query.referrer

    res.render('application/other-qualifications/index', {
      applicationId,
      formaction: referrer || `/application/${applicationId}/other-qualifications/review`,
      qualificationId,
      referrer
    })
  })
}
