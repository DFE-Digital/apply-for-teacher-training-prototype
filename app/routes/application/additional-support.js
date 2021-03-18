/**
 * Application: Additional support routes
 */
module.exports = router => {
  router.get('/application/:applicationId/additional-support', (req, res) => {
    const { applicationId } = req.params
    const { referrer } = req.query

    res.render('application/additional-support/index', {
      referrer,
      formaction: `/application/${applicationId}/additional-support/review`
    })
  })

  router.get('/application/:applicationId/additional-support/:view', (req, res) => {
    const { view } = req.params
    const { referrer } = req.query

    res.render(`application/additional-support/${view}`, {
      referrer
    })
  })
}
