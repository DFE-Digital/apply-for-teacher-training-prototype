const utils = require('./../../utils')

/**
 * Application: Other relevant qualifications routes
 */
module.exports = router => {
  // Other qualifications answer branching
  router.post('/application/:applicationId/other-qualifications/answer', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = utils.applicationData(req)
    const include = applicationData['include-other-qualifications']
    applicationData.completed = applicationData.completed || {}

    if (include === 'no') {
      applicationData.completed['other-qualifications'] = true
      res.redirect(`/application/${applicationId}`)
    } else {
      res.redirect(`/application/${applicationId}/other-qualifications/add`)
    }
  })

  // Generate new id and redirect to that qualification
  router.get('/application/:applicationId/other-qualifications/add', (req, res) => {
    const id = utils.generateRandomString()
    res.redirect(`/application/${req.params.applicationId}/other-qualifications/${id}?${utils.queryString(req)}`)
  })

  // Render review page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/other-qualifications/review', (req, res) => {
    const applicationData = utils.applicationData(req)
    const completed = applicationData.completed['other-qualifications']
    const qualifications = utils.toArray(applicationData['other-qualifications'])

    // If previously opted out of question, ask question again
    if (completed && !qualifications.length) {
      res.redirect(`/application/${req.params.applicationId}/other-qualifications`)
    } else {
      res.render('application/other-qualifications/review')
    }
  })

  // Render details page
  router.get('/application/:applicationId/other-qualifications/:id', (req, res) => {
    const id = req.params.id
    const referrer = req.query.referrer

    res.render('application/other-qualifications/qualification', {
      formaction: referrer || `/application/${req.params.applicationId}/other-qualifications/review`,
      id,
      referrer
    })
  })
}
