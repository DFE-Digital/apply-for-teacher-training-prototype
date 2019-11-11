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
