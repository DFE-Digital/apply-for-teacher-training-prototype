const querystring = require('querystring')
const utils = require('./../../utils')

/**
 * Application: Work history routes
 */
module.exports = router => {
  // Render missing work history page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/work-history/missing', (req, res) => {
    res.render(`application/work-history/missing`, {
      referrer: req.query.referrer
    })
  })

  // Generate new ID and redirect to that item
  router.get('/application/:applicationId/work-history/add/:thing(job|gap)', (req, res) => {
    const thing = req.params.thing
    const id = utils.generateRandomString()
    const queryString = querystring.stringify(req.query)

    res.redirect(`/application/${req.params.applicationId}/work-history/${thing}/${id}?${queryString}`)
  })

  // Render job/gap page
  router.get('/application/:applicationId/work-history/:type(job|gap)/:id', (req, res) => {
    const id = req.params.id
    const type = req.params.type
    const queryString = querystring.stringify(req.query)
    const referrer = req.query.referrer

    res.render(`application/work-history/${type}`, {
      referrer,
      formaction: `/application/${req.params.applicationId}/work-history/update/${type}/${id}?${queryString}`,
      id,
      start: `${req.query.start}`,
      end: `${req.query.end}`
    })
  })

  // Convert individual date components into ISO 8601 date strings
  router.post('/application/:applicationId/work-history/update/:type(job|gap)/:id', (req, res) => {
    const id = req.params.id
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]['work-history'][id]

    // Create ISO 8601 start date
    const startDay = req.body[`${id}-start-date-day`] || '01'
    const startMonth = req.body[`${id}-start-date-month`]
    const startYear = req.body[`${id}-start-date-year`]
    applicationData['start-date'] = false

    if (startMonth && startYear) {
      applicationData['start-date'] = `${startYear}-${startMonth}-${startDay}`
    }

    // Create ISO 8601 end date
    const endDay = req.body[`${id}-end-date-day`] || '01'
    const endMonth = req.body[`${id}-end-date-month`]
    const endYear = req.body[`${id}-end-date-year`]
    applicationData['end-date'] = false

    if (endMonth && endYear) {
      applicationData['end-date'] = `${endYear}-${endMonth}-${endDay}`
    }

    res.redirect(req.query.referrer || `/application/${applicationId}/work-history/review`)
  })

  // Work history length answer branching
  router.post('/application/:applicationId/work-history/answer', (req, res) => {
    const applicationId = req.params.applicationId
    const length = req.session.data.applications[applicationId]['work-history']['length']

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
