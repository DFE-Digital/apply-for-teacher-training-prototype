/**
 * Application: Subject knowledge routes
 */
module.exports = router => {
  router.get('/application/:applicationId/subject-knowledge', (req, res) => {
    const referrer = req.query.referrer

    res.render('application/subject-knowledge/index', {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer
    })
  })
}
