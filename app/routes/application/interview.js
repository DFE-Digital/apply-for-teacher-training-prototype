/**
 * Application: Personal statement routes
 */
module.exports = router => {
  router.get('/application/:applicationId/interview/:view', (req, res) => {
    const referrer = req.query.referrer
    const view = req.params.view

    res.render(`application/interview/${view}`, {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer
    })
  })
}
