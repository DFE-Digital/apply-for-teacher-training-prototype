module.exports = router => {
  router.post('/application/:applicationId/submit', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const status = applicationData.status

    if (status === 'started') {
      applicationData.status = 'submitted'
    }

    if (status === 'amending') {
      applicationData.status = 'amended'
    }

    res.redirect(`/application/${applicationId}/confirmation`)
  })
}
