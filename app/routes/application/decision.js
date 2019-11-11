const providers = require('../../data/providers')

module.exports = router => {
  // Render decision pages
  router.get('/application/:applicationId/:choiceId/:view(withdraw|accept|decline|view)', (req, res) => {
    const { applicationId, choiceId } = req.params
    const { phase, referrer } = req.query
    const application = req.session.data.applications[applicationId]

    const choice = application.choices[choiceId]
    const provider = providers[choice.providerCode]
    const course = provider.courses[choice.courseCode]

    res.render(`application/decision/${req.params.view}`, {
      provider,
      course,
      choice,
      choiceId,
      referrer,
      phase
    })
  })

  // Submit decision
  router.post('/application/:applicationId/:choiceId/view', (req, res) => {
    const { applicationId, choiceId } = req.params
    const { decision, phase } = req.session.data

    if (phase) {
      res.redirect(`/application/${applicationId}/${choiceId}/${decision}?phase=${phase}`)
    } else {
      res.redirect(`/application/${applicationId}/${choiceId}/${decision}`)
    }
  })
}
