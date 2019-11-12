/* eslint-disable camelcase */

/**
 * Application: Contact details routes
 */
module.exports = router => {
  // Render other contact pages
  router.get('/application/:applicationId/contact-details/where-do-you-live', (req, res) => {
    const referrer = req.query.referrer
    const applicationId = req.params.applicationId
    const international_address_feature_enabled = req.session.data.flags.international_address

    if (!international_address_feature_enabled) {
      res.redirect(`/application/${applicationId}/contact-details/where-do-you-live/answer?referrer=${referrer}`)
    } else {
      res.render('application/contact-details/where-do-you-live', {
        referrer
      })
    }
  })

  // Address type answer branching
  router.all('/application/:applicationId/contact-details/where-do-you-live/answer', (req, res) => {
    const referrer = req.query.referrer
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const location = applicationData['contact-details']['address-type']
    const address_lookup_feature_enabled = req.session.data.flags.address_lookup
    const international_address_feature_enabled = req.session.data.flags.international_address

    if (location === 'domestic' || !international_address_feature_enabled) {
      if (address_lookup_feature_enabled) {
        res.redirect(`/application/${applicationId}/contact-details/lookup-address?referrer=${referrer}`)
      } else {
        res.redirect(`/application/${applicationId}/contact-details/uk-address?referrer=${referrer}`)
      }
    } else {
      res.redirect(`/application/${applicationId}/contact-details/international-address?referrer=${referrer}`)
    }
  })

  // Render address page
  router.get('/application/:applicationId/contact-details/:view(uk-address|international-address)', (req, res) => {
    const referrer = req.query.referrer
    const view = req.params.view

    res.render(`application/contact-details/${view}`, {
      formaction: referrer || `/application/${req.params.applicationId}/contact-details/review`,
      referrer
    })
  })

  // Render other contact pages
  router.get('/application/:applicationId/contact-details/:view', (req, res) => {
    const referrer = req.query.referrer

    res.render(`application/contact-details/${req.params.view}`, {
      referrer
    })
  })
}
