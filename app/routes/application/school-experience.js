const querystring = require('querystring')
const utils = require('./../../utils')

/**
 * Application: School experience routes
 */
module.exports = router => {
  // Generate ID to add new thing
  router.get('/application/:applicationId/school-experience/add/role', (req, res) => {
    const id = utils.generateRandomString()
    const queryString = querystring.stringify(req.query)

    res.redirect(`/application/${req.params.applicationId}/school-experience/role/${id}?${queryString}`)
  })

  // Render role page
  router.get('/application/:applicationId/school-experience/role/:id', (req, res) => {
    const id = req.params.id
    const type = req.params.type
    const queryString = querystring.stringify(req.query)
    const referrer = req.query.referrer

    res.render(`application/school-experience/${type}`, {
      referrer,
      formaction: `/application/${req.params.applicationId}/school-experience/update/role/${id}?${queryString}`,
      id,
      start: `${req.query.start}`,
      end: `${req.query.end}`
    })
  })

  // Convert individual date components into ISO 8601 date strings
  router.post('/application/:applicationId/school-experience/update/role/:id', (req, res) => {
    const id = req.params.id
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]['school-experience'][id]

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

    res.redirect(req.query.referrer || `/application/${applicationId}/school-experience/review`)
  })

  // Render other school experience pages
  router.get('/application/:applicationId/school-experience/:view', (req, res) => {
    res.render(`application/school-experience/${req.params.view}`)
  })
}
