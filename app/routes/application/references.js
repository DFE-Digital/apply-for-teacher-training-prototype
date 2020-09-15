const utils = require('./../../utils')

/**
 * Application: References routes
 */
module.exports = router => {
  // Mock events in reference request timeline
  router.get('/application/:applicationId/references/mock/:action', (req, res) => {
    const { action, applicationId } = req.params
    const applicationData = utils.applicationData(req)
    const references = Object.values(applicationData.references)
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

  // Generate new id and redirect to start of referee flow
  router.get('/application/:applicationId/references/add', (req, res) => {
    const { applicationId } = req.params
    const id = utils.generateRandomString()
    const queryString = utils.queryString(req) ? `?${utils.queryString(req)}` : ''
    res.redirect(`/application/${applicationId}/references/${id}/start${queryString}`)
  })

  // Render review pages, redirecting to referee start page if no referees added
  router.get('/application/:applicationId/references/:view?', (req, res) => {
    const { applicationId } = req.params
    const applicationData = utils.applicationData(req)
    const references = Object.entries(applicationData.references)

    if (references.length) {
      res.render('application/references/review', {
        messages: req.flash('success')
      })
    } else {
      res.redirect(`/application/${applicationId}/references/add`)
    }
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
    const { action, id } = req.params
    const { referrer } = req.query
    const { status } = req.session.data
    const applicationData = utils.applicationData(req)
    const now = new Date()

    applicationData.references[id].status = status || applicationData.references[id].status

    if (action === 'request') {
      applicationData.references[id].nudges = applicationData.references[id].nudges || 0
      applicationData.references[id].status = 'Awaiting response'
      applicationData.references[id].pending = false
      const log = applicationData.references[id].log = applicationData.references[id].log || []

      log.push({
        note: 'Request sent',
        date: now.toISOString()
      })

      req.flash('success', `Reference request sent to ${applicationData.references[id].name}`)
    }

    if (action === 'cancel') {
      applicationData.references[id].log.push({
        note: 'Request cancelled',
        date: now.toISOString()
      })

      req.flash('success', `Reference request cancelled for ${applicationData.references[id].name}`)
    }

    if (action === 'deactivate') {
      applicationData.references[id].ready = false
    }

    if (action === 'reactivate') {
      applicationData.references[id].ready = true
    }

    if (action === 'delete') {
      delete applicationData.references[id]
    }

    if (action === 'nudge') {
      applicationData.references[id].nudges = 1
      applicationData.references[id].log.push({
        note: 'Reminder sent',
        date: now.toISOString()
      })

      req.flash('success', `Reminder sent to ${applicationData.references[id].name}`)
    }

    res.redirect(referrer)
  })

  // Handle immediate reference request
  router.post('/application/:applicationId/references/:id/request/decision', (req, res) => {
    const { applicationId, id } = req.params
    const { referrer } = req.query
    const { decision } = req.session.data
    const applicationData = utils.applicationData(req)
    const now = new Date()

    if (decision === 'now') {
      applicationData.references[id].status = 'Awaiting response'
      applicationData.references[id].nudges = 0
      const log = applicationData.references[id].log = []

      log.push({
        note: 'Request sent',
        date: now.toISOString()
      })

      req.flash('success', `Reference request sent to ${applicationData.references[id].name}`)
    }

    if (decision === 'later') {
      applicationData.references[id].status = 'Not requested yet'
      applicationData.references[id].pending = true
    }

    res.redirect(referrer || `/application/${applicationId}/references/review`)
  })

  // Render referee question page
  router.get('/application/:applicationId/references/:id/:template', (req, res) => {
    const { applicationId, id, template } = req.params
    const referrer = req.query.referrer

    res.render(`application/references/${template}`, {
      id,
      formaction: referrer || `/application/${applicationId}/references/review`,
      referrer
    })
  })
}
