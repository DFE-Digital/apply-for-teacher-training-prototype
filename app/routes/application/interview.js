/**
 * Application: Personal statement routes
 */
module.exports = router => {
  router.get('/application/:applicationId/interview/:view', (req, res) => {
    const { applicationId, view } = req.params
    const { referrer } = req.query

    res.render(`application/interview/${view}`, {
      formaction: referrer || `/application/${applicationId}`,
      referrer
    })
  })
}
