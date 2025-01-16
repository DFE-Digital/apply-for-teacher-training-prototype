const utils = require('./../utils')

module.exports = router => {
  router.get('/accepted', (req, res) => {
    let acceptedApplication

    if (req.session.data.applications) {
      acceptedApplication = Object.values(req.session.data.applications)
        .find(application => (application.status === 'Conditions pending' || application.status === 'Offer confirmed'))
    }

    if (acceptedApplication) {
      res.render('accepted/index', {
        acceptedApplication
      })
    } else {
      res.redirect('/applications')
    }
  })

  // Generate new ID and redirect to start of referee flow
  router.get('/accepted/references/add', (req, res) => {
    const id = utils.generateRandomString()
    req.session.data.references[id] = { status: 'Draft' }

    res.redirect(`/accepted/references/${id}/intro`)
  })

  // Render action page
  router.get('/accepted/references/:id/action/:action', (req, res) => {
    const { action, id } = req.params
    const referrer = req.query.referrer
    const reference = req.session.data.references[id]

    res.render('accepted/references/action', {
      action,
      id,
      referrer,
      reference
    })
  })

  // Handle action request
  router.post('/accepted/references/:id/:action(cancel|nudge|retry)', (req, res) => {
    const { id, action } = req.params
    const now = new Date()

    const reference = req.session.data.references[id]

    if (action === 'request') {
      res.redirect(`/accepted/references/${id}/send-request`)
    } else {
      if (action === 'cancel') {
        reference.status = 'Cancelled'
        reference.log.push({
          note: 'Request cancelled',
          date: now.toISOString()
        })
      }

      if (action === 'nudge') {
        reference.log.push({
          note: 'Reminder sent',
          date: now.toISOString()
        })
      }

      if (action === 'retry') {
        reference.log.push({
          note: 'Request sent',
          date: now.toISOString()
        })
      }

      res.redirect(`/accepted`)
    }
  })

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
