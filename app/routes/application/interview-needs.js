/**
 * Application: Interview needs routes
 */
module.exports = router => {
  router.get('/application/:applicationId/interview-needs/:view', (req, res) => {
    const { applicationId, view } = req.params
    const { referrer } = req.query

    res.render(`application/interview-needs/${view}`, {
      formaction: referrer || `/application/${applicationId}`,
      referrer
    })
  })
}
