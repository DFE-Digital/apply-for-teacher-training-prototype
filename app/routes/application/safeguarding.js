module.exports = router => {
  router.get('/application/:applicationId/safeguarding', (req, res) => {
    const { applicationId } = req.params
    const { referrer } = req.query

    res.render('application/safeguarding/index', {
      referrer,
      formaction: `/application/${applicationId}/safeguarding/review`
    })
  })

  router.get('/application/:applicationId/safeguarding/:view', (req, res) => {
    const { view } = req.params
    const { referrer } = req.query

    res.render(`application/safeguarding/${view}`, {
      referrer
    })
  })
}
