/**
 * Application: References routes
 */
module.exports = router => {
  // Render first page
  router.get('/application/:applicationId/references/:view', (req, res) => {
    res.render(`application/references/${req.params.view}`)
  })

  // Render referee type page
  router.get('/application/:applicationId/references/type/:refereeId', (req, res) => {
    const refereeId = req.params.refereeId

    res.render('application/references/type', {
      refereeId,
      formaction: `/application/${req.params.applicationId}/references/details/${refereeId}`
    })
  })

  // Render referee details page
  router.get('/application/:applicationId/references/details/:refereeId', (req, res) => {
    const refereeId = req.params.refereeId
    const referrer = req.query.referrer

    res.render('application/references/details', {
      refereeId,
      formaction: referrer || `/application/${req.params.applicationId}/references/review`
    })
  })
}
