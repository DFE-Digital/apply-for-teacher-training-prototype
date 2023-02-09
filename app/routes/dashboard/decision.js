const providers = require('../../data/providers')
const utils = require('./../../utils')

module.exports = router => {
//   // Render decision pages
//   router.get('/application/:applicationId/:choiceId/:view(withdraw|accept|decline|view)', (req, res) => {
//     const { choiceId } = req.params
//     const { referrer } = req.query
//     const application = utils.applicationData(req)
//
//     const choice = application.choices[choiceId]
//     const provider = providers[choice.providerCode]
//     const course = provider.courses[choice.courseCode]
//
//     const numberOfOffersReceived = utils.toArray(application.choices).filter(function (choice) {
//       return choice.status === 'Offer received'
//     }).length
//
//     res.render(`application/decision/${req.params.view}`, {
//       provider,
//       course,
//       choice,
//       choiceId,
//       referrer,
//       numberOfOffersReceived
//     })
//   })
//
//   // Render withdraw confirmation page
//   router.get('/application/:applicationId/:choiceId/withdraw/confirmation', (req, res) => {
//     const { choiceId } = req.params
//     const { referrer } = req.query
//     const application = utils.applicationData(req)
//
//     const choice = application.choices[choiceId]
//     const provider = providers[choice.providerCode]
//     const course = provider.courses[choice.courseCode]
//
//     res.render('application/decision/withdraw-confirmation', {
//       provider,
//       course,
//       choice,
//       choiceId,
//       referrer
//     })
//   })
//

  // Submit decision
  router.post('/dashboard/decision/:id', (req, res) => {
    const { id } = req.params
    const { decision } = req.body
    const choice = req.session.data.choices[id]

    if (decision == 'accept') {
      choice.status = 'Pending conditions'
      res.redirect('/accepted')
    } else if (decision == 'decline') {
      choice.status = 'Declined'
      res.redirect('/dashboard')
    } else {
      res.redirect(`/dashboard/respond/${id}`)
    }
  })
}
