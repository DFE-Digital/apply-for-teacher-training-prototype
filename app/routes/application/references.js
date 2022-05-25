const utils = require('./../../utils')

module.exports = router => {
  // Mock events in reference request timeline
  router.get('/application/:applicationId/references/mock/:action', (req, res) => {
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

    res.redirect(`/application/${applicationId}/references/review`)
  })

  // Generate new ID and redirect to start of referee flow
  router.get('/application/:applicationId/references/add', (req, res) => {
    const { applicationId } = req.params
    const id = utils.generateRandomString()
    const queryString = utils.queryString(req) ? `?${utils.queryString(req)}` : ''
    res.redirect(`/application/${applicationId}/references/${id}/type${queryString}`)
  })

  // Render review pages, redirecting to referee start page if no referees added
  router.get('/application/:applicationId/references/review', (req, res) => {
    res.render('application/references/review')
  })

  // Render action page
  router.get('/application/:applicationId/references/:id/action/:action', (req, res) => {
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
  router.post('/application/:applicationId/references/:id/action/:action', (req, res) => {
    const { action, applicationId, id } = req.params
    const { referrer } = req.query
    const { status } = req.session.data
    const application = utils.applicationData(req)
    const now = new Date()

    application.references[id].status = status || application.references[id].status

    if (action === 'request') {
      // Need to check if candidate has given their name, first
      res.redirect(`/application/${applicationId}/references/${id}/send-request`)
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

      res.redirect(referrer)
    }
  })

  // Send now or later?
  router.post('/application/:applicationId/references/:id/request/decision', (req, res) => {
    const { applicationId, id } = req.params
    const { referrer } = req.query
    const { decision } = req.session.data
    const application = utils.applicationData(req)

    if (decision === 'later') {
      application.references[id].status = 'Not requested yet'
      application.references[id].pending = true
      res.redirect(referrer || `/application/${applicationId}/references/review`)
    } else {
      res.redirect(referrer || `/application/${applicationId}/references/${id}/send-request`)
    }
  })

  // Request reference
  router.get('/application/:applicationId/references/:id/send-request', (req, res) => {
    const { applicationId, id } = req.params
    const application = utils.applicationData(req)
    res.redirect(`/application/${applicationId}/references/review`)
  })

  // Render referee question page
  router.get('/application/:applicationId/references/:id/:view', (req, res) => {
    const { applicationId, id, view } = req.params
    const { referrer, validate } = req.query

    res.render(`application/references/${view}`, {
      id,
      formaction: referrer || `/application/${applicationId}/references/review`,
      referrer,
      validate
    })
  })
}
