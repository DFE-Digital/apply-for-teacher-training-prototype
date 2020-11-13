const utils = require('./../../utils')

/**
 * Application: Personal details routes
 */
module.exports = router => {
  // First page
  router.get('/application/:applicationId/personal-details', (req, res) => {
    const { referrer } = req.query

    res.render('application/personal-details/index', {
      referrer
    })
  })

  // Nationality answer branching
  router.post('/application/:applicationId/personal-details/nationality-answer', (req, res) => {
    const { referrer } = req.session.data
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]
    const { nationality } = application.candidate

    if (nationality === 'other' || nationality === 'multiple') {
      res.redirect(`/application/${applicationId}/personal-details/residency?${utils.queryString(req)}`)
    } else {
      // Delete residency status if previously entered
      delete application.candidate.residency

      res.redirect(referrer || `/application/${applicationId}/personal-details/review`)
    }
  })

  // Render other personal details pages
  router.get('/application/:applicationId/personal-details/:view', (req, res) => {
    const { view } = req.params
    const { referrer } = req.query

    res.render(`application/personal-details/${view}`, {
      referrer
    })
  })
}
