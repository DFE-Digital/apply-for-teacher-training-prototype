/**
 * Application: Vocation routes
 */
module.exports = router => {
  router.get('/application/:applicationId/vocation', (req, res) => {
    const referrer = req.query.referrer

    res.render('application/vocation/index', {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer
    })
  })
}
