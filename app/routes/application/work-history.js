const querystring = require('querystring')
const utils = require('./../../utils')

/**
 * Application: Work history routes
 */
module.exports = router => {
  // Render missing work history page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/work-history/missing', (req, res) => {
    res.render('application/work-history/missing', {
      referrer: req.query.referrer
    })
  })

  // Generate new ID and redirect to that item
  router.get('/application/:applicationId/work-history/add/:type(job|gap)', (req, res) => {
    const applicationId = req.params.applicationId
    const type = req.params.type
    const id = utils.generateRandomString()
    const queryString = querystring.stringify(req.query)

    res.redirect(`/application/${applicationId}/work-history/${type}/${id}?${queryString}`)
  })

  // Render job/gap page
  router.get('/application/:applicationId/work-history/:type(job|gap)/:id', (req, res) => {
    const applicationId = req.params.applicationId
    const type = req.params.type
    const id = req.params.id
    const referrer = req.query.referrer

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
      start: `${req.query.start}`,
      end: `${req.query.end}`
    })
  })

  // Convert individual date components into single ISO 8601 date string before
  // proceeding to next page (reviewing all or adding another)
  router.post('/application/:applicationId/work-history/:next(review|add)/:type?', (req, res) => {
    const applicationId = req.params.applicationId
    const next = req.params.next
    const type = req.params.type

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
    const applicationId = req.params.applicationId
    const applicationData = utils.applicationData(req)
    const workHistory = applicationData['work-history']

    let length
    if (workHistory) {
      length = applicationData['work-history'].length
    }

    if (length === 'none') {
      res.redirect(`/application/${applicationId}/work-history/missing`)
    } else {
      res.redirect(`/application/${applicationId}/work-history/add/job`)
    }
  })

  // Render other work history pages
  router.get('/application/:applicationId/work-history/:view', (req, res) => {
    res.render(`application/work-history/${req.params.view}`)
  })
}
