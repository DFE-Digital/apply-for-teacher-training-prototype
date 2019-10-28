const providers = require('../../data/providers')

module.exports = router => {
  router.get('/application/:applicationId/:choiceId/:view(withdraw|accept|decline)', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const choiceId = req.params.choiceId

    const choice = applicationData.choices[choiceId]
    const provider = providers[choice.providerCode]
    const course = provider.courses[choice.courseCode]

    res.render(`application/${req.params.view}`, {
      provider,
      course
    })
  })

  router.post('/application/:applicationId/:choiceId/:view(withdraw|accept|decline)', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const choiceId = req.params.choiceId

    const choice = applicationData.choices[choiceId]
    switch (req.params.view) {
      case 'withdraw': {
        choice.status = 'withdrawn'
        break
      }
      case 'accept': {
        choice.status = 'accepted'
        break
      }
      case 'decline': {
        choice.status = 'declined'
        break
      }
    }

    res.redirect('/applications')
  })
}
