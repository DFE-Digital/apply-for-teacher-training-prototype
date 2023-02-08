const { DateTime } = require('luxon')
const utils = require('./../../utils')

module.exports = router => {
  router.get('/dashboard', (req, res) => {

    // TODO: refactor these counts
    const numberOfOffersReceived = Object.keys(req.session.data.choices).filter(function (choice) {
      return choice.status === 'Offer received'
    }).length

    const numberOfOffersDeclined = Object.keys(req.session.data.choices).filter(function (choice) {
      return choice.status === 'Offer declined'
    }).length

    const numberOfApplicationsWithdrawn = Object.keys(req.session.data.choices).filter(function (choice) {
      return choice.status === 'Application withdrawn'
    }).length

    const numberOfChoicesAwaitingDecision = Object.keys(req.session.data.choices).filter(function (choice) {
      return choice.status === 'Awaiting decision'
    }).length

    const acceptedChoice = Object.keys(req.session.data.choices).find(function (choice) {
      return (choice.status === 'Offer accepted') || (choice.status === 'Offer confirmed') || (choice.status === 'Offer deferred')
    })

    const courseOfferAccepted = acceptedChoice

    const canMakeDecision = (numberOfOffersReceived > 0 && numberOfChoicesAwaitingDecision === 0)

    const endedWithoutSuccess = (numberOfOffersReceived === 0 && numberOfChoicesAwaitingDecision === 0 && !courseOfferAccepted)

    const { makeMeAnOffer } = req.query

    if (makeMeAnOffer === 'yes') {
      for (const choiceId in req.session.data.choices) {
        req.session.data.choices[choiceId].status = 'Offer received'
        req.session.data.choices[choiceId].conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' }
        ]
      }
    }

    if (courseOfferAccepted) {
      res.render('accepted/index', {
        acceptedChoice,
        canMakeDecision,
        numberOfOffersReceived,
        numberOfOffersDeclined,
        endedWithoutSuccess,
        numberOfApplicationsWithdrawn,
        numberOfChoicesAwaitingDecision
      })
    } else {
      res.render('dashboard/index', {
        canMakeDecision,
        numberOfOffersReceived,
        numberOfOffersDeclined,
        endedWithoutSuccess,
        numberOfApplicationsWithdrawn,
        numberOfChoicesAwaitingDecision
      })
    }
  })

  router.get('/dashboard/withdraw/:id', (req, res) => {
    const { id } = req.params

    res.render('dashboard/withdraw', {
      id
    })
  })
}
