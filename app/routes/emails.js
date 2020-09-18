/**
 * Email routes
 */
module.exports = router => {
  router.get('/application/:applicationId/emails/:view', (req, res) => {
    const { applicationId, view } = req.params

    res.render(`emails/${view}`, {
      applicationId
    })
  })
}
