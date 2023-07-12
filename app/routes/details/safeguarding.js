const utils = require('./../../utils')

module.exports = router => {
  // Review page
  router.get('/details/safeguarding/review', (req, res) => {

    req.session.data.references ||= {}
    const applications = (req.session.data.applications ? Object.values(req.session.data.applications) : [] )
    const applicationsAwaitingDecisionOrReceivedOffer = applications.filter(a => (['Awaiting decision', "Offer received"].includes(a.status)))
    const numberOfApplicationsLeft = 4 - (applicationsAwaitingDecisionOrReceivedOffer.length)

    res.render(`details/safeguarding/review`, {
      id: req.params.id,
      numberOfApplicationsLeft
    })
  })

}