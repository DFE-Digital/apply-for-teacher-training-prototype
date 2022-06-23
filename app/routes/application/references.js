const utils = require('./../../utils')

module.exports = router => {
  // Mock events in reference request timeline
  router.get('/dashboard/:applicationId/references/mock/:action', (req, res) => {
    const { action, applicationId } = req.params
    const application = utils.applicationData(req)
    const references = Object.values(application.references)
    const firstReference = references[0]
    const now = new Date()

    if (action === 'bounced') {
      firstReference.status = 'Request failed'
      firstReference.log.push({
        note: `The request did not reach ${firstReference.email}`,
        date: now.toISOString()
      })
    }

    if (action === 'declined') {
      firstReference.status = 'Reference declined'
      firstReference.log.push({
        note: 'Reference was declined',
        date: now.toISOString()
      })
    }

    // Mark requests as overdue
    if (action === 'overdue') {
      firstReference.status = 'Reference overdue'
    }

    // Mark references as given
    if (action === 'given') {
      firstReference.status = 'Reference given'
      firstReference.ready = true
      firstReference.log.push({
        note: 'Reference given',
        date: now.toISOString()
      })
    }

    res.redirect(`/dashboard/${applicationId}/references/review`)
  })

  // Generate new ID and redirect to start of referee flow
  router.get('/dashboard/:applicationId/references/add', (req, res) => {
    const { applicationId } = req.params
    const id = utils.generateRandomString()
    const queryString = utils.queryString(req) ? `?${utils.queryString(req)}` : ''
    const application = utils.applicationData(req)

    application.references[id] = {"status": "Not requested yet"}

    res.redirect(`/dashboard/${applicationId}/references/${id}/intro${queryString}`)
  })

  // Render action page
  router.get('/dashboard/:applicationId/references/:id/action/:action', (req, res) => {
    const { action, applicationId, id } = req.params
    const referrer = req.query.referrer

    res.render('application/references/action', {
      action,
      applicationId,
      id,
      referrer
    })
  })

  // Handle action request
  router.post('/dashboard/:applicationId/references/:id/action/:action', (req, res) => {
    const { action, applicationId, id } = req.params
    const { referrer } = req.query
    const { status } = req.session.data
    const application = utils.applicationData(req)
    const now = new Date()

    application.references[id].status = status || application.references[id].status

    if (action === 'request') {
      res.redirect(`/dashboard/${applicationId}/references/${id}/send-request`)
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
          note: `Request sent to ${application.references[id].email}`,
          date: now.toISOString()
        })
      }

      res.redirect(`/dashboard/${applicationId}`)
    }
  })

  // Send now or later?
  router.post('/dashboard/:applicationId/references/:id/request/decision', (req, res) => {
    const { applicationId, id } = req.params
    const { referrer } = req.query
    const { decision } = req.session.data
    const application = utils.applicationData(req)

    if (decision === 'later') {
      application.references[id].status = 'Not requested yet'
      application.references[id].pending = true
      res.redirect(referrer || `/dashboard/${applicationId}/references/review`)
    } else {
      res.redirect(referrer || `/dashboard/${applicationId}/references/${id}/send-request`)
    }
  })

  // Request reference
  router.get('/dashboard/:applicationId/references/:id/send-request', (req, res) => {
    const { applicationId, id } = req.params
    const application = utils.applicationData(req)
    const now = new Date()

    application.references[id].nudges = application.references[id].nudges || 0
    application.references[id].status = 'Request sent'
    application.references[id].pending = false

    const log = application.references[id].log = application.references[id].log || []

    log.push({
      note: 'Request sent',
      date: now.toISOString()
    })

    res.redirect(`/dashboard/${applicationId}/`)
  })

  // Render referee page
  router.get('/dashboard/:applicationId/references/:id', (req, res) => {
    const { applicationId, id, view } = req.params
    const { referrer, validate } = req.query
    const application = utils.applicationData(req)

    res.render('application/references/view', {
      id,
      applicationId,
      application
    })
  })

  // Render referee question page
  router.get('/dashboard/:applicationId/references/:id/:view', (req, res) => {
    const { applicationId, id, view } = req.params
    const { referrer, validate } = req.query

    res.render(`application/references/${view}`, {
      id,
      formaction: referrer || `/dashboard/${applicationId}/references/review`,
      referrer,
      validate,
      applicationId
    })
  })
}
