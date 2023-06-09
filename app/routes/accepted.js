const utils = require('./../utils')

module.exports = router => {
  router.get('/accepted', (req, res) => {
    let acceptedChoice
    if (req.session.data.choices) {
      acceptedChoice = Object.values(req.session.data.choices).find(choice => (choice.status === 'Conditions pending' || choice.status === 'Offer confirmed'))
    }

    if (acceptedChoice) {
      res.render('accepted/index', {
        acceptedChoice
      })
    } else {
      res.redirect('/application')
    }
  })

  // Generate new ID and redirect to start of referee flow
  router.get('/accepted/references/add', (req, res) => {
    const id = utils.generateRandomString()
    req.session.data.references[id] = { status: 'Not sent' }

    res.redirect(`/accepted/references/${id}/intro`)
  })

  // Render action page
  router.get('/accepted/references/:id/action/:action', (req, res) => {
    const { action, id } = req.params
    const referrer = req.query.referrer

    res.render('accepted/references/action', {
      action,
      id,
      referrer
    })
  })
  //
  //   // Handle action request
  //   router.post('/accepted/references/:id/:action', (req, res) => {
  //     const { action, id } = req.params
  //     const now = new Date()
  //
  //     req.session.data.references[id].status = status || req.session.data.references[id].status
  //
  //     if (action === 'request') {
  //       req.session.data.references[id].status =
  //       res.redirect(`/accepted/references/${id}/send-request`)
  //     } else {
  //       if (action === 'cancel') {
  //         application.references[id].log.push({
  //           note: 'Request cancelled',
  //           date: now.toISOString()
  //         })
  //       }
  //
  //       if (action === 'deactivate') {
  //         application.references[id].ready = false
  //       }
  //
  //       if (action === 'reactivate') {
  //         application.references[id].ready = true
  //       }
  //
  //       if (action === 'delete') {
  //         delete application.references[id]
  //       }
  //
  //       if (action === 'nudge') {
  //         application.references[id].nudges = 1
  //         application.references[id].log.push({
  //           note: 'Reminder sent',
  //           date: now.toISOString()
  //         })
  //       }
  //
  //       if (action === 'retry') {
  //         application.references[id].log.push({
  //           note: 'Request sent',
  //           date: now.toISOString()
  //         })
  //       }
  //
  //       res.redirect(`/accepted`)
  //     }
  //   })

  // Request reference
  router.post('/accepted/references/:id/request', (req, res) => {
    const now = new Date()
    const { id } = req.params

    const reference = req.session.data.references[id]

    reference.nudges = reference.nudges || 0
    reference.status = 'Requested'
    reference.pending = false

    const log = reference.log = reference.log || []

    log.push({
      note: 'Request sent',
      date: now.toISOString()
    })

    res.redirect('/accepted')
  })

  // Render referee page
  router.get('/accepted/references/:id', (req, res) => {
    const { id } = req.params

    res.render('accepted/references/view', {
      id
    })
  })

  // Render referee question page
  router.get('/accepted/references/:id/:view', (req, res) => {
    const { id, view } = req.params
    const { referrer, validate } = req.query

    res.render(`accepted/references/${view}`, {
      id,
      formaction: referrer || '/accepted/$references/review',
      referrer,
      validate
    })
  })
}
