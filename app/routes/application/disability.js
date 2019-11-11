/**
 * Application: Disability routes
 */
module.exports = router => {
  // First page
  router.get('/application/:applicationId/disability', (req, res) => {
    const referrer = req.query.referrer

    res.render('application/disability/index', {
      referrer,
      formaction: `/application/${req.params.applicationId}/disability/review`
    })
  })

  // Render other disability pages
  router.get('/application/:applicationId/disability/:view', (req, res) => {
    const referrer = req.query.referrer

    res.render(`application/disability/${req.params.view}`, {
      referrer
    })
  })
}
