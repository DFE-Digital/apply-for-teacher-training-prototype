const utils = require('./../../utils')

/**
 * Application: Personal details routes
 */
module.exports = router => {
  // First page
  router.get('/application/:applicationId/personal-details', (req, res) => {
    const {referrer} = req.query

    res.render('application/personal-details/index', {
      referrer
    })
  })

  // Nationality answer branching
  router.post('/application/:applicationId/personal-details/nationality-answer', (req, res) => {
    const {referrer} = req.session.data
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const {nationality} = applicationData.candidate

    if (nationality === 'other' || nationality === 'multiple') {
      res.redirect(referrer || `/application/${applicationId}/personal-details/residency?${utils.queryString(req)}`)
    } else {
      // Delete residency status if previously entered
      delete applicationData.candidate['residency']

      res.redirect(referrer || `/application/${applicationId}/personal-details/review`)
    }
  })

  // Render other personal details pages
  router.get('/application/:applicationId/personal-details/:template', (req, res) => {
    const referrer = req.query.referrer

    res.render(`application/personal-details/${req.params.template}`, {
      referrer
    })
  })
}
