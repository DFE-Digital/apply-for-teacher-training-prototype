const utils = require('./../../utils')

module.exports = router => {

  router.get('/details', (req, res) => {

    const applications = (req.session.data.applications ? Object.values(req.session.data.applications) : [] )
    const numberOfApplicationsSubmitted = applications.filter(application => application.submittedAt).length
    const applicationsAwaitingDecisionOrReceivedOffer = applications.filter(a => (['Awaiting decision', "Offer received"].includes(a.status)))
    const numberOfApplicationsLeft = 4 - (applicationsAwaitingDecisionOrReceivedOffer.length)

    res.render('details/index', {
      numberOfApplicationsSubmitted,
      numberOfApplicationsLeft
    })
  })

}
