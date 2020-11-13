/* eslint-disable camelcase */
const utils = require('./../../utils')

/**
 * Application: Contact details routes
 */
module.exports = router => {
  // Render other contact pages
  router.get('/application/:applicationId/contact-details/where-do-you-live', (req, res) => {
    const { referrer } = req.query

    res.render('application/contact-details/where-do-you-live', {
      referrer
    })
  })

  // Address type answer branching
  router.all('/application/:applicationId/contact-details/where-do-you-live/answer', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)
    const location = application['contact-details']['address-type']
    const address_lookup_feature_enabled = req.session.data.flags.address_lookup

    if (location === 'domestic') {
      if (address_lookup_feature_enabled) {
        res.redirect(`/application/${applicationId}/contact-details/lookup-address`)
      } else {
        res.redirect(`/application/${applicationId}/contact-details/uk-address`)
      }
    } else {
      res.redirect(`/application/${applicationId}/contact-details/international-address`)
    }
  })

  // Render address page
  router.get('/application/:applicationId/contact-details/:view(uk-address|international-address)', (req, res) => {
    const { referrer } = req.query
    const { view } = req.params

    res.render(`application/contact-details/${view}`, {
      formaction: referrer || `/application/${req.params.applicationId}/contact-details/review`,
      referrer
    })
  })

  // Render other contact pages
  router.get('/application/:applicationId/contact-details/:view', (req, res) => {
    const { referrer } = req.query

    res.render(`application/contact-details/${req.params.view}`, {
      referrer
    })
  })
}
