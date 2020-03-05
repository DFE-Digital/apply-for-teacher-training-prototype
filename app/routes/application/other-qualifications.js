const utils = require('./../../utils')

/**
 * Application: Other relevant qualifications routes
 */
module.exports = router => {
  // Generate new id and redirect to that qualification
  router.get('/application/:applicationId/other-qualifications/add', (req, res) => {
    const id = utils.generateRandomString()
    res.redirect(`/application/${req.params.applicationId}/other-qualifications/${id}?${utils.queryString(req)}`)
  })

  // Render review page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/other-qualifications/review', (req, res) => {
    res.render('application/other-qualifications/review')
  })

  // Render type page
  router.get('/application/:applicationId/other-qualifications/:id', (req, res) => {
    const { id } = req.params
    const { referrer } = req.query

    res.render('application/other-qualifications/index', {
      id,
      referrer
    })
  })

  router.post('/application/:applicationId/other-qualifications/:id', (req, res) => {
    const { applicationId, id } = req.params
    const { referrer } = req.query

    res.redirect(referrer || `/application/${applicationId}/other-qualifications/${id}/details`)
  })

  // Render details page
  router.get('/application/:applicationId/other-qualifications/:id/details', (req, res) => {
    const { id } = req.params
    const { referrer } = req.query

    res.render('application/other-qualifications/details', {
      id,
      referrer
    })
  })

  router.post('/application/:applicationId/other-qualifications/:id/details', (req, res) => {
    const next = req.session.data.next || 'review'
    const { applicationId } = req.params
    const { referrer } = req.query

    res.redirect(referrer || `/application/${applicationId}/other-qualifications/${next}`)
  })
}
