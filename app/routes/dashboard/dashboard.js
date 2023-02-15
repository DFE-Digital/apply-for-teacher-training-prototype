const utils = require('./../../utils')

module.exports = router => {
  router.get('/dashboard', (req, res) => {

    // TODO: refactor these counts
    const numberOfOffersReceived = Object.values(req.session.data.choices).filter(function (choice) {
      return choice.status === 'Offer received'
    }).length

    const numberOfOffersDeclined = Object.values(req.session.data.choices).filter(function (choice) {
      return choice.status === 'Offer declined'
    }).length

    const numberOfApplicationsWithdrawn = Object.values(req.session.data.choices).filter(function (choice) {
      return choice.status === 'Application withdrawn'
    }).length

    const numberOfChoicesAwaitingDecision = Object.values(req.session.data.choices).filter(function (choice) {
      return choice.status === 'Awaiting decision'
    }).length

    const acceptedChoice = Object.values(req.session.data.choices).find(function (choice) {
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

// Submit decision
  router.post('/dashboard/decision/:id', (req, res) => {
    const { id } = req.params
    const { decision } = req.body
    const choice = req.session.data.choices[id]

    if (decision == 'accept') {
      res.redirect(`/dashboard/accept/${id}`)
    } else if (decision == 'decline') {
      choice.status = 'Declined'
      res.redirect(`/dashboard/decline/${id}`)
    } else {
      res.redirect(`/dashboard/respond/${id}`)
    }
  })


  // Final offer accept point
  router.post('/dashboard/accept/:id', (req, res) => {
    const { id } = req.params
    const choice = req.session.data.choices[id]
    const now = new Date()

    choice.status = "Pending conditions"

    // Request all the references
    for (reference of Object.values(req.session.data.references)) {
      reference.status = "Requested"

      const log = reference.log = reference.log || []
      log.push({
        note: 'Request sent',
        date: now.toISOString()
      })
    }

    res.redirect("/accepted")
  })

  // Confirmation page for declining an offer
  router.get('/dashboard/decline/:id', (req, res) => {
    const { id } = req.params
    res.render('dashboard/decline', {
      id
    })
  })

  // Declining an offer
  router.post('/dashboard/decline/:id', (req, res) => {
    const { id } = req.params
    const choice = req.session.data.choices[id]
    choice.status = "Offer declined"

    res.redirect('/dashboard')
  })

  // Withdraw an application page
  router.get('/dashboard/withdraw/:id', (req, res) => {
    const { id } = req.params

    res.render('dashboard/withdraw', {
      id
    })
  })

  // Actually withdraw the application
  router.post('/dashboard/withdraw/:id', (req, res) => {
    const { id } = req.params

    req.session.data.choices[id].status = 'Application withdrawn'
    res.redirect(`/dashboard/withdrawn/${id}`)
  })

  // Withdrawn confirmation (and survey) page
  router.get('/dashboard/withdrawn/:id', (req, res) => {
    const { id } = req.params

    res.render('dashboard/withdrawn', {
      id
    })
  })

  // Respond to offer page
  router.get('/dashboard/respond/:id', (req, res) => {
    const { id } = req.params

    res.render('dashboard/respond', {
      id
    })
  })

  // Accept offer page (includes references)
  router.get('/dashboard/accept/:id', (req, res) => {
    const { id } = req.params

    res.render('dashboard/accept', {
      id
    })
  })
}
