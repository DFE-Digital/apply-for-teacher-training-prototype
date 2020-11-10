const utils = require('./../../utils')

/**
 * Application: Work history routes
 */
module.exports = router => {
  // Render missing work history page
  router.get('/application/:applicationId/work-history/missing', (req, res) => {
    res.render('application/work-history/missing')
  })

  // Generate new ID and redirect to that item
  router.get('/application/:applicationId/work-history/add/:type(job|break)', (req, res) => {
    const { applicationId, type } = req.params
    const id = utils.generateRandomString()
    const queryString = utils.queryString(req) ? `?${utils.queryString(req)}` : ''
    res.redirect(`/application/${applicationId}/work-history/${type}/${id}?${queryString}`)
  })

  // Render review page, redirecting to start page if no work history added
  router.get('/application/:applicationId/work-history/:view?', (req, res) => {
    const applicationData = utils.applicationData(req)
    const workHistory = Object.entries(applicationData['work-history'])

    if (workHistory.length) {
      res.render('application/work-history/review')
    } else {
      res.render('application/work-history/index')
    }
  })

  // Render job/break page
  router.get('/application/:applicationId/work-history/:type(job|break)/:id', (req, res) => {
    const { applicationId, id, type } = req.params
    const { referrer, start, end } = req.query

    let formaction
    if (referrer) {
      formaction = `${referrer}?update=${id}`
    } else {
      formaction = `/application/${applicationId}/work-history/review?update=${id}`
    }

    res.render(`application/work-history/${type}`, {
      referrer,
      formaction,
      id,
      start,
      end
    })
  })

  // Convert individual date components into single ISO 8601 date string before
  // proceeding to next page (reviewing all or adding another)
  router.post('/application/:applicationId/work-history/:next(review|add)/:type?', (req, res) => {
    const { applicationId, next, type } = req.params
    const id = req.query.update
    const applicationData = utils.applicationData(req)
    const workHistory = applicationData['work-history']
    utils.saveIsoDate(req, workHistory, id)

    if (next === 'review') {
      res.redirect(`/application/${applicationId}/work-history/review`)
    } else {
      res.redirect(`/application/${applicationId}/work-history/add/${type}`)
    }
  })

  // Work history length answer branching
  router.post('/application/:applicationId/work-history/answer', (req, res) => {
    const { applicationId } = req.params
    const { decision } = req.session.data

    if (decision === 'yes') {
      res.redirect(`/application/${applicationId}/work-history/add/job`)
    } else {
      res.redirect(`/application/${applicationId}/work-history/missing`)
    }
  })
}
