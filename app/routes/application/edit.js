module.exports = router => {
  router.get('/application/:applicationId/edit', (req, res) => {
    res.render('application/edit/index.njk')
  })

  router.post('/application/:applicationId/edit', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]

    applicationData.status = 'amending'

    res.redirect(`/application/${applicationId}`)
  })
}
