const utils = require('./../../utils')

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
    let { otherQualifications } = utils.applicationData(req)

    otherQualifications = utils.toArray(otherQualifications)
    const noQualificationsEntered = !(otherQualifications && otherQualifications.length > 1)

    res.render('application/other-qualifications/index', {
      id,
      referrer,
      noQualificationsEntered
    })
  })

  router.post('/application/:applicationId/other-qualifications/:id', (req, res) => {
    const { applicationId, id } = req.params
    const { referrer } = req.query
    const { otherQualifications } = utils.applicationData(req)
    const { type } = otherQualifications[id]

    if (type === 'None') {
      req.session.data.applications[applicationId].otherQualificationsDisclose = 'No'
      res.redirect(referrer || `/application/${applicationId}/other-qualifications/review`)
    } else {
      req.session.data.applications[applicationId].otherQualificationsDisclose = 'Yes'
      res.redirect(`/application/${applicationId}/other-qualifications/${id}/details`)
    }
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
    const application = utils.applicationData(req)
    const next = req.session.data.next || 'review'
    const nextId = utils.generateRandomString()
    const { applicationId, id } = req.params
    const { referrer } = req.query
    const { year, org, type } = application.otherQualifications[id]
    const { typeUk } = application.otherQualifications[id]

    res.redirect(referrer || `/application/${applicationId}/other-qualifications/${next}`)
  })
}
