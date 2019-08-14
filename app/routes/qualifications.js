module.exports = router => {
  /**
    * Application: Vocation - Vocation statement
    */
  router.get('/application/:applicationId/qualifications', (req, res) => {
    const referrer = req.query.referrer

    res.render('application/qualifications/index', {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer
    })
  })
}
