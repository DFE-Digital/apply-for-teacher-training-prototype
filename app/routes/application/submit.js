module.exports = router => {
  router.all('/application/:applicationId/confirmation', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const status = applicationData.status

    if (status === 'started') {
      applicationData.status = 'submitted'
    }

    if (status === 'amending') {
      applicationData.status = 'amended'
    }

    res.render('application/confirmation')
  })
}
