/**
 * Application: Vocation routes
 */
module.exports = router => {
  router.get('/application/:applicationId/vocation/:view', (req, res) => {
    const { applicationId, view } = req.params
    const { referrer } = req.query

    res.render(`application/vocation/${view}`, {
      formaction: referrer || `/application/${applicationId}`,
      referrer
    })
  })
}
