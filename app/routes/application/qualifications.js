/**
 * Application: Additional qualification information routes
 */
module.exports = router => {
  router.get('/application/:applicationId/qualifications', (req, res) => {
    const referrer = req.query.referrer

    res.render('application/qualifications/index', {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer
    })
  })
}
