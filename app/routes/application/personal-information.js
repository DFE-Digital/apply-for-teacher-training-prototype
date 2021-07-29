const utils = require('../../utils')

module.exports = router => {
  // First page
  router.get('/application/:applicationId/personal-information', (req, res) => {
    const { referrer } = req.query

    res.render('application/personal-information/index', {
      referrer
    })
  })

  // Nationality answer branching
  router.post('/application/:applicationId/personal-information/nationality-answer', (req, res) => {
    const { referrer } = req.session.data
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]
    const { nationality } = application.candidate
    const hasOtherNationality = nationality === 'Other' || nationality[0] === 'Other'

    if (hasOtherNationality) {
      res.redirect(`/application/${applicationId}/personal-information/residency?${utils.queryString(req)}`)
    } else {
      // Delete residency status if previously entered
      delete application.candidate.residency

      res.redirect(referrer || `/application/${applicationId}/personal-information/review`)
    }
  })

  // Residency question answer branching
  router.post('/application/:applicationId/personal-information/residency', (req, res) => {
    const { applicationId } = req.params
    const application = req.session.data.applications[applicationId]
    const answer = application.candidate.residencyDisclose

    if (answer === 'yes') {
      res.redirect(`/application/${applicationId}/personal-information/review`)
    } else {
      res.redirect(`/application/${applicationId}/personal-information/residency-sponsorship`)
    }
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
