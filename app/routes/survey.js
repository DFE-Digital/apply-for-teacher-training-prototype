module.exports = router => {
  router.post('/survey', (req, res) => {
    const { applicationId } = req.body

    res.redirect(`/dashboard/${applicationId}?confirmation=true`)
  })
}
