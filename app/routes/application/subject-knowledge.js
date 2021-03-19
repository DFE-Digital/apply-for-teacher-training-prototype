module.exports = router => {
  router.get('/application/:applicationId/subject-knowledge/:view', (req, res) => {
    const { applicationId, view } = req.params
    const { referrer } = req.query

    res.render(`application/subject-knowledge/${view}`, {
      formaction: referrer || `/application/${applicationId}`,
      referrer
    })
  })
}
