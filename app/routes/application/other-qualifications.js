const utils = require('./../../utils')

module.exports = router => {
  // Generate new id and redirect to that qualification
  router.get('/application/:applicationId/other-qualifications/add', (req, res) => {
    const id = utils.generateRandomString()
    res.redirect(`/application/${req.params.applicationId}/other-qualifications/${id}/type`)
  })

  // Render review page
  router.get('/application/:applicationId/other-qualifications/review', (req, res) => {
    const { applicationId } = req.params
    const { otherQualifications } = utils.applicationData(req)
    const otherQualificationsDisclose = utils.applicationData(req).otherQualificationsDisclose

    if (otherQualificationsDisclose !== 'No' && (utils.toArray(otherQualifications).length === 0)) {
      // Redirect back to guard question if there are no qualifications but they didn't answer No to the guard question
      res.redirect(`/application/${applicationId}/other-qualifications`)
    } else {
      res.render('application/other-qualifications/review')
    }
  })

  router.post('/application/:applicationId/other-qualifications/answer', (req, res) => {
    const { applicationId } = req.params
    const { otherQualificationsDisclose } = req.body.applications[applicationId]

    if (otherQualificationsDisclose === 'Yes') {
      res.redirect(`/application/${applicationId}/other-qualifications/add`)
    } else {
      res.redirect(`/application/${applicationId}/other-qualifications/review`)
    }
  })

  // Render type page
  router.get('/application/:applicationId/other-qualifications/:id/type', (req, res) => {
    const { id } = req.params
    const { referrer } = req.query

    res.render('application/other-qualifications/type', {
      id,
      referrer
    })
  })

  // Update qualification type
  router.post('/application/:applicationId/other-qualifications/:id/type', (req, res) => {
    const { applicationId, id } = req.params
    res.redirect(`/application/${applicationId}/other-qualifications/${id}/details`)
  })

  // Render details page
  router.get('/application/:applicationId/other-qualifications/:id/details', (req, res) => {
    const { otherQualifications } = utils.applicationData(req)
    const { id } = req.params
    const { referrer } = req.query
    const { type } = otherQualifications[id]

    res.render('application/other-qualifications/details', {
      id,
      referrer,
      type
    })
  })

  router.post('/application/:applicationId/other-qualifications/:id/details', (req, res) => {
    const next = req.session.data.next || 'review'
    const { applicationId } = req.params
    const { referrer } = req.query

    res.redirect(referrer || `/application/${applicationId}/other-qualifications/${next}`)
  })
}
