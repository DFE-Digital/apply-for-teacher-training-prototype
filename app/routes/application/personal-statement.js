/**
 * Application: Personal statement routes
 */
module.exports = router => {
  router.get('/application/:applicationId/personal-statement/:view', (req, res) => {
    const { applicationId, view } = req.params
    const { referrer } = req.query

    res.render(`application/personal-statement/${view}`, {
      formaction: referrer || `/application/${applicationId}`,
      referrer
    })
  })
}
