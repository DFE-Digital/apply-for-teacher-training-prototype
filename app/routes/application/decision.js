const providers = require('../../data/providers')
const utils = require('../../utils')

module.exports = router => {
  // Update choice status and phase from link in decision notification
  router.get('/decision', (req, res) => {
    const { status, phase } = req.query

    // Get most recent application
    const applications = utils.toArray(req.session.data.applications)
    const application = applications[0]

    // Get statuses
    const statuses = status.split(',')

    // Get choices still pending a decision
    const choices = utils.toArray(application.choices)
    application.choices = choices.map((choice, i) => {
      choice.status = statuses[i]
      return choice
    })

    // Set phase if included in query string
    if (phase) {
      res.redirect(`/applications?phase=${phase}`)
    } else {
      res.redirect('/applications')
    }
  })

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
