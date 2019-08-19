const utils = require('./../../utils')

/**
 * Application: Personal details routes
 */
module.exports = router => {
  // First page
  router.get('/application/:applicationId/personal-details', (req, res) => {
    res.render('application/personal-details/index', {
      formaction: `/application/${req.params.applicationId}/personal-details/answer?${utils.queryString(req)}`
    })
  })

  // Residency status answer branching
  router.post('/application/:applicationId/personal-details/answer', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const nationality = applicationData['candidate']['nationality']

    const eea = ['Austrian', 'Belgian', 'Bulgarian', 'Croatian', 'Cypriot', 'Czech', 'Danish', 'Dutch', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Icelandic', 'Irish', 'Italian', 'Latvian', 'Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Maltese', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Slovak', 'Slovenian', 'Spanish', 'Swedish', 'Swiss', 'British']

    if (eea.includes(nationality)) {
      // Delete residency status if previously entered
      delete applicationData['candidate']['residency-status']
      res.redirect(`/application/${applicationId}/personal-details/review`)
    } else {
      res.redirect(`/application/${applicationId}/personal-details/residency-status?${utils.queryString(req)}`)
    }
  })

  // Residency status
  router.get('/application/:applicationId/personal-details/residency-status', (req, res) => {
    const referrer = req.query.referrer

    res.render('application/personal-details/residency-status', {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer
    })
  })

  // Render other personal details pages
  router.get('/application/:applicationId/personal-details/:view', (req, res) => {
    const referrer = req.query.referrer

    res.render(`application/personal-details/${req.params.view}`, {
      referrer
    })
  })
}
