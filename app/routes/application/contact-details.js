/**
 * Application: Contact details routes
 */
module.exports = router => {
  // Render first page
  router.get('/application/:applicationId/contact-details', (req, res) => {
    const referrer = req.query.referrer

    res.render('application/contact-details/index', {
      formaction: referrer || `/application/${req.params.applicationId}/contact-details/address-answer`,
      referrer
    })
  })

  // Address type answer branching
  router.post('/application/:applicationId/contact-details/address-answer', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const location = applicationData['contact-details']['address-type']

    if (location === 'domestic') {
      res.redirect(`/application/${applicationId}/contact-details/lookup-address`)
    } else {
      res.redirect(`/application/${applicationId}`)
    }
  })

  // Render address page
  router.get('/application/:applicationId/contact-details/address', (req, res) => {
    const referrer = req.query.referrer

    res.render('application/contact-details/address', {
      formaction: referrer || `/application/${req.params.applicationId}/contact-details/review`,
      referrer
    })
  })

  // Render other contact pages
  router.get('/application/:applicationId/contact-details/:view', (req, res) => {
    res.render(`application/contact-details/${req.params.view}`)
  })
}
