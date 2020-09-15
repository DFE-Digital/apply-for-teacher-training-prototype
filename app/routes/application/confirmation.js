module.exports = router => {
  router.all('/application/:applicationId/confirmation', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]

    applicationData.status = 'Submitted'

    res.render('application/confirmation')
  })
}
