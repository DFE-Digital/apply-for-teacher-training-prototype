/**
 * Application: References routes
 */
module.exports = router => {
  // Render first page
  router.get('/application/:applicationId/references/:view', (req, res) => {
    res.render(`application/references/${req.params.view}`)
  })

  // Render referee type page
  router.get('/application/:applicationId/references/type/:id', (req, res) => {
    const id = req.params.id
    const referrer = req.query.referrer

    res.render('application/references/type', {
      id,
      formaction: `/application/${req.params.applicationId}/references/details/${id}`,
      referrer
    })
  })

  // Render referee details page
  router.get('/application/:applicationId/references/details/:id', (req, res) => {
    const id = req.params.id
    const referrer = req.query.referrer

    res.render('application/references/details', {
      id,
      formaction: referrer || `/application/${req.params.applicationId}/references/review`,
      referrer
    })
  })
}
