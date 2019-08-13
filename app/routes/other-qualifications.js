const querystring = require('querystring')
const utils = require('./../utils')

module.exports = router => {
  /**
    * Application: Generate ID to add new qualification
    */
  router.get('/application/:applicationId/other-qualifications/add', (req, res) => {
    const qualificationId = utils.generateRandomString()
    const queryString = querystring.stringify(req.query)

    res.redirect(`/application/${req.params.applicationId}/other-qualifications/${qualificationId}/add?${queryString}`)
  })

  /**
    * Application: Other qualification(s) - Add/edit
    * @param {String} action add || edit
    * @param {String} qualificationId Qualification ID
    */
  router.get('/application/:applicationId/other-qualifications/:qualificationId/:action(add|edit)', (req, res) => {
    const action = req.params.action
    const applicationId = req.params.applicationId
    const qualificationId = req.params.qualificationId
    const referrer = req.query.referrer

    res.render('application/other-qualifications/index', {
      applicationId,
      action,
      formaction: referrer || `/application/${applicationId}/other-qualifications/review`,
      qualificationId,
      referrer
    })
  })

  /**
    * Application: Other qualifications(s) - Review
    */
  router.get('/application/:applicationId/other-qualifications/review', (req, res) => {
    res.render('application/other-qualifications/review')
  })

  /**
    * Application: Review
    */
  router.get('/application/:applicationId/review', (req, res) => {
    res.render('application/review')
  })
}
