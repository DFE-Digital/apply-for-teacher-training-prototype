/**
 * Email routes
 */
module.exports = router => {
  router.get('/application/:applicationId/emails/:template', (req, res) => {
    const { applicationId, template } = req.params

    res.render(`emails/${template}`, {
      applicationId
    })
  })
}
