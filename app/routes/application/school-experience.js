const querystring = require('querystring')
const utils = require('./../../utils')

/**
 * Application: School experience routes
 */
module.exports = router => {
  // Render missing school experience page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/school-experience/missing', (req, res) => {
    res.render('application/school-experience/missing', {
      referrer: req.query.referrer
    })
  })

  // Generate ID to add new thing
  router.get('/application/:applicationId/school-experience/add/role', (req, res) => {
    const id = utils.generateRandomString()
    const queryString = querystring.stringify(req.query)

    res.redirect(`/application/${req.params.applicationId}/school-experience/role/${id}?${queryString}`)
  })

  // Render role page
  router.get('/application/:applicationId/school-experience/role/:id', (req, res) => {
    const { applicationId, id } = req.params
    const { referrer } = req.query

    let formaction
    if (referrer) {
      formaction = `${referrer}?update=${id}`
    } else {
      formaction = `/application/${applicationId}/school-experience/review?update=${id}`
    }

    res.render('application/school-experience/role', {
      referrer,
      formaction,
      id
    })
  })

  // Convert individual date components into single ISO 8601 date string before
  // proceeding to next page (reviewing all or adding another)
  router.post('/application/:applicationId/school-experience/:next(review|add)', (req, res) => {
    const { applicationId, next } = req.params
    const id = req.query.update
    const application = utils.applicationData(req)
    const schoolExperience = application['school-experience']
    utils.saveIsoDate(req, schoolExperience, id)

    if (next === 'review') {
      res.redirect(`/application/${applicationId}/school-experience/review`)
    } else {
      res.redirect(`/application/${applicationId}/school-experience/add/role`)
    }
  })

  // School-experience completed answer branching
  router.post('/application/:applicationId/school-experience/answer', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)
    const schoolExperienceDecision = application['school-experience-decision']

    if (schoolExperienceDecision === 'No') {
      res.redirect(`/application/${applicationId}/school-experience/review`)
    } else {
      res.redirect(`/application/${applicationId}/school-experience/add/role`)
    }
  })

  // Render other school experience pages
  router.get('/application/:applicationId/school-experience/:view', (req, res) => {
    res.render(`application/school-experience/${req.params.view}`)
  })
}
