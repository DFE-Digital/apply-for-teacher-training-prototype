/**
 * Application: Reasonable adjustment routes
 */
module.exports = router => {
  // First page
  router.get('/application/:applicationId/reasonable-adjustments', (req, res) => {
    const referrer = req.query.referrer

    res.render('application/reasonable-adjustments/index', {
      referrer,
      formaction: `/application/${req.params.applicationId}/reasonable-adjustments/review`
    })
  })

  // Render other reasonable adjustment pages
  router.get('/application/:applicationId/reasonable-adjustments/:view', (req, res) => {
    const referrer = req.query.referrer

    res.render(`application/reasonable-adjustments/${req.params.view}`, {
      referrer
    })
  })
}
