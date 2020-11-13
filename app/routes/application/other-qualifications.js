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
    const application = utils.applicationData(req)
    const { id } = req.params
    const { referrer } = req.query
    const { type } = application['other-qualifications'][id]

    res.render('application/other-qualifications/details', {
      id,
      referrer,
      type
    })
  })

  router.post('/application/:applicationId/other-qualifications/:id/details', (req, res) => {
    const application = utils.applicationData(req)
    const next = req.session.data.next || 'review'
    const nextId = utils.generateRandomString()
    const { applicationId, id } = req.params
    const { referrer } = req.query
    const { year, org, type } = application['other-qualifications'][id]
    const typeUk = application['other-qualifications'][id]['type-uk']

    if (next === 'add-type') {
      application['other-qualifications'][nextId] = {
        year,
        org,
        type,
        'type-uk': typeUk
      }
      res.redirect(referrer || `/application/${applicationId}/other-qualifications/${nextId}/details`)
    } else {
      res.redirect(referrer || `/application/${applicationId}/other-qualifications/${next}`)
    }
  })
}
