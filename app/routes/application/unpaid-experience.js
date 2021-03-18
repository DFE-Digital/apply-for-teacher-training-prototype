const querystring = require('querystring')
const utils = require('../../utils')

/**
 * Application: Unpaid experience routes
 */
module.exports = router => {
  // Render missing unpaid experience page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/unpaid-experience/missing', (req, res) => {
    res.render('application/unpaid-experience/missing', {
      referrer: req.query.referrer
    })
  })

  // Generate ID to add new thing
  router.get('/application/:applicationId/unpaid-experience/add/role', (req, res) => {
    const id = utils.generateRandomString()
    const queryString = querystring.stringify(req.query)

    res.redirect(`/application/${req.params.applicationId}/unpaid-experience/role/${id}?${queryString}`)
  })

  // Render role page
  router.get('/application/:applicationId/unpaid-experience/role/:id', (req, res) => {
    const { applicationId, id } = req.params
    const { referrer } = req.query

    let formaction
    if (referrer) {
      formaction = `${referrer}?update=${id}`
    } else {
      formaction = `/application/${applicationId}/unpaid-experience/review?update=${id}`
    }

    res.render('application/unpaid-experience/role', {
      referrer,
      formaction,
      id
    })
  })

  // Convert individual date components into single ISO 8601 date string before
  // proceeding to next page (reviewing all or adding another)
  router.post('/application/:applicationId/unpaid-experience/:next(review|add)', (req, res) => {
    const { applicationId, next } = req.params
    const id = req.query.update
    const application = utils.applicationData(req)
    const unpaidExperience = application['unpaid-experience']
    utils.saveIsoDate(req, unpaidExperience, id)

    if (next === 'review') {
      res.redirect(`/application/${applicationId}/unpaid-experience/review`)
    } else {
      res.redirect(`/application/${applicationId}/unpaid-experience/add/role`)
    }
  })

  // Unpaid experience completed answer branching
  router.post('/application/:applicationId/unpaid-experience/answer', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)
    const unpaidExperienceDecision = application['unpaid-experience-disclose']

    if (unpaidExperienceDecision === 'No') {
      res.redirect(`/application/${applicationId}/unpaid-experience/review`)
    } else {
      res.redirect(`/application/${applicationId}/unpaid-experience/add/role`)
    }
  })

  // Render other unpaid experience pages
  router.get('/application/:applicationId/unpaid-experience/:view', (req, res) => {
    res.render(`application/unpaid-experience/${req.params.view}`)
  })
}
