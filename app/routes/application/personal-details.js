/**
 * Application: Personal details routes
 */
module.exports = router => {
  // First page
  router.get('/application/:applicationId/personal-details', (req, res) => {
    const referrer = req.query.referrer

    res.render('application/personal-details/index', {
      formaction: referrer || `/application/${req.params.applicationId}/personal-details/answer`,
      referrer
    })
  })

  // Residency status answer branching
  router.post('/application/:applicationId/personal-details/answer', (req, res) => {
    const applicationId = req.params.applicationId
    const nationality = req.session.data.applications[applicationId]['candidate']['nationality']

    const eea = ['Austrian', 'Belgian', 'Bulgarian', 'Croatian', 'Cypriot', 'Czech', 'Danish', 'Dutch', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Icelandic', 'Irish', 'Italian', 'Latvian', 'Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Maltese', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Slovak', 'Slovenian', 'Spanish', 'Swedish', 'Swiss', 'British']

    if (eea.includes(nationality)) {
      res.redirect(`/application/${applicationId}`)
    } else {
      res.redirect(`/application/${applicationId}/personal-details/residency-status`)
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
}
