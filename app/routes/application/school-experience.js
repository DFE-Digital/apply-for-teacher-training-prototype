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
    const queryString = querystring.stringify(req.query)
    const referrer = req.query.referrer

    res.render(`application/school-experience/role`, {
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

    utils.saveIsoDate(req, applicationData, id)

    res.redirect(req.query.referrer || `/application/${applicationId}/school-experience/review`)
  })

  // Render other school experience pages
  router.get('/application/:applicationId/school-experience/:view', (req, res) => {
    res.render(`application/school-experience/${req.params.view}`)
  })
}
