/**
 * Application: Vocation routes
 */
module.exports = router => {
  router.get('/application/:applicationId/vocation/:view', (req, res) => {
    const referrer = req.query.referrer
    const view = req.params.view

    res.render(`application/vocation/${view}`, {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer
    })
  })
}
