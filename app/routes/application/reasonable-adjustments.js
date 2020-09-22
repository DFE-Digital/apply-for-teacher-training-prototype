/**
 * Application: Reasonable adjustment routes
 */
module.exports = router => {
  // First page
  router.get('/application/:applicationId/reasonable-adjustments', (req, res) => {
    const { applicationId } = req.params
    const { referrer } = req.query
    const option = req.query.option || 'a'

    res.render('application/reasonable-adjustments/index', {
      referrer,
      option,
      formaction: `/application/${applicationId}/reasonable-adjustments/review`
    })
  })

  // Render other reasonable adjustment pages
  router.get('/application/:applicationId/reasonable-adjustments/:view', (req, res) => {
    const { view } = req.params
    const { referrer } = req.query
    const { option } = req.session.data

    res.render(`application/reasonable-adjustments/${view}`, {
      referrer,
      option
    })
  })
}
