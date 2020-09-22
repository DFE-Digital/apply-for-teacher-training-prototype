/**
 * Application: Suitability routes
 */
module.exports = router => {
  // First page
  router.get('/application/:applicationId/suitability', (req, res) => {
    const { applicationId } = req.params
    const { referrer } = req.query
    const option = req.query.option || 'a'

    res.render('application/suitability/index', {
      referrer,
      option,
      formaction: `/application/${applicationId}/suitability/review`
    })
  })

  // Render other reasonable adjustment pages
  router.get('/application/:applicationId/suitability/:view', (req, res) => {
    const { view } = req.params
    const { referrer } = req.query
    const { option } = req.session.data

    res.render(`application/suitability/${view}`, {
      referrer,
      option
    })
  })
}
