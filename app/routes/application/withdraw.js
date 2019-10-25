const providers = require('../../data/providers')

module.exports = router => {
  router.get('/application/:applicationId/:choiceId/withdraw', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const choiceId = req.params.choiceId

    const choice = applicationData.choices[choiceId]
    const provider = providers[choice.providerCode]
    const course = provider.courses[choice.courseCode]

    res.render('application/withdraw', {
      provider,
      course
    })
  })

  router.post('/application/:applicationId/:choiceId/withdraw', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const choiceId = req.params.choiceId

    const choice = applicationData.choices[choiceId]
    choice.status = 'withdrawn'

    res.redirect('/applications')
  })
}
