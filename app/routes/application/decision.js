const providers = require('../../data/providers')

module.exports = router => {
  router.get('/application/:applicationId/:choiceId/:view(withdraw|accept|decline|view)', (req, res) => {
    const applicationId = req.params.applicationId
    const application = req.session.data.applications[applicationId]
    const choiceId = req.params.choiceId
    const referrer = req.query.referrer

    const choice = application.choices[choiceId]
    const provider = providers[choice.providerCode]
    const course = provider.courses[choice.courseCode]

    res.render(`application/decision/${req.params.view}`, {
      provider,
      course,
      choiceId,
      referrer
    })
  })
}
