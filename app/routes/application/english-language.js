const utils = require('../../utils')

/**
 * Application: English as a foreign language routes
 */
module.exports = router => {
  // Generate new id and redirect to that qualification
  router.get('/application/:applicationId/english-language/add', (req, res) => {
    const id = utils.generateRandomString()
    console.log(id)
    res.redirect(`/application/${req.params.applicationId}/english-language/${id}?${utils.queryString(req)}`)
  })

  // Render review page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/english-language/review', (req, res) => {
    res.render('application/english-language/review')
  })

  // Render type page
  router.get('/application/:applicationId/english-language/:id', (req, res) => {
    const { id } = req.params
    const { referrer } = req.query

    res.render('application/english-language/index', {
      id,
      referrer
    })
  })

  router.post('/application/:applicationId/english-language/:id', (req, res) => {
    const applicationData = utils.applicationData(req)
    const { applicationId, id } = req.params
    const { referrer } = req.query
    const { type } = applicationData['english-language'][id]

    if (type === 'I don’t have this qualification yet') {
      path = `/application/${applicationId}/english-language/review`
    } else {
      path = referrer || `/application/${applicationId}/english-language/${id}/details`
    }

    res.redirect(path)
  })

  // Render details page
  router.get('/application/:applicationId/english-language/:id/details', (req, res) => {
    const applicationData = utils.applicationData(req)
    const { id } = req.params
    const { referrer } = req.query
    const { type } = applicationData['english-language'][id]

    res.render('application/english-language/details', {
      id,
      referrer,
      type
    })
  })

  router.post('/application/:applicationId/english-language/:id/details', (req, res) => {
    const { applicationId } = req.params
    const { referrer } = req.query

    res.redirect(referrer || `/application/${applicationId}/english-language/review`)
  })
}
