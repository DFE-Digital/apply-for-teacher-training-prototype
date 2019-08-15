/**
 * Application: Interview routes
 */
module.exports = router => {
  router.get('/application/:applicationId/interview', (req, res) => {
    const referrer = req.query.referrer

    res.render('application/interview/index', {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer
    })
  })
}
