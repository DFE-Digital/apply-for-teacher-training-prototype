module.exports = router => {

  // Edit
  router.get('/application/:applicationId/personal-statement', (req, res) => {
    const { applicationId, view } = req.params
    const { referrer, gotAdviser } = req.query

    res.render(`application/personal-statement/index`, {
      formaction: referrer || `/application/${applicationId}`,
      referrer,
      gotAdviser
    })
  })

  // Review
  router.get('/application/:applicationId/personal-statement/review', (req, res) => {
    const { applicationId, view } = req.params
    const { referrer } = req.query

    res.render(`application/personal-statement/review`, {
      formaction: referrer || `/application/${applicationId}`,
      referrer
    })
  })
}
