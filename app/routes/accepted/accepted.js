const utils = require('./../../utils')

module.exports = router => {

  router.get('/accepted', (req, res) => {

    const acceptedChoice = Object.values(req.session.data.choices).find(choice => (choice.status == "Pending conditions" || choice.status == "Offer confirmed"))

    res.render('accepted/index', {
      acceptedChoice
    })
  })


  // Generate new ID and redirect to start of referee flow
  router.get('/accepted/references/add', (req, res) => {
    const id = utils.generateRandomString()
    const queryString = utils.queryString(req) ? `?${utils.queryString(req)}` : ''
    const application = utils.applicationData(req)

    application.references[id] = { status: 'Not sent' }

    res.redirect(`/accepted/references/${id}/intro${queryString}`)
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

  // Handle action request
  router.post('/accepted/references/:id/action/:action', (req, res) => {
    const { action, id } = req.params
    const { status } = req.session.data
    const now = new Date()

    req.session.data.references[id].status = status || req.session.data.references[id].status

    if (action === 'request') {
      res.redirect(`/accepted/references/${id}/send-request`)
    } else {
      if (action === 'cancel') {
        application.references[id].log.push({
          note: 'Request cancelled',
          date: now.toISOString()
        })
      }

      if (action === 'deactivate') {
        application.references[id].ready = false
      }

      if (action === 'reactivate') {
        application.references[id].ready = true
      }

      if (action === 'delete') {
        delete application.references[id]
      }

      if (action === 'nudge') {
        application.references[id].nudges = 1
        application.references[id].log.push({
          note: 'Reminder sent',
          date: now.toISOString()
        })
      }

      if (action === 'retry') {
        application.references[id].log.push({
          note: 'Request sent',
          date: now.toISOString()
        })
      }

      res.redirect(`/accepted`)
    }
  })

  // Send now or later?
  router.post('/accepted/references/:id/request/decision', (req, res) => {
    const { id } = req.params
    const { referrer } = req.query
    const { decision } = req.session.data
    const application = utils.applicationData(req)

    if (decision === 'later') {
      application.references[id].status = 'Not sent'
      application.references[id].pending = true
      res.redirect(referrer || `/accepted/references/review`)
    } else {
      res.redirect(referrer || `/accepted/references/${id}/send-request`)
    }
  })

  // Request reference
  router.get('/accepted/references/:id/send-request', (req, res) => {
    const { id } = req.params
    const now = new Date()

    const reference = req.session.data.references[id]

    reference.nudges = application.references[id].nudges || 0
    reference.status = 'Requested'
    reference.pending = false

    const log = reference.log = reference.log || []

    log.push({
      note: 'Request sent',
      date: now.toISOString()
    })

    res.redirect(`/accepted`)
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
      formaction: referrer || `/accepted/$references/review`,
      referrer,
      validate
    })
  })
}
