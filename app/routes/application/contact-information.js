/* eslint-disable camelcase */
const utils = require('../../utils')

/**
 * Application: Contact information routes
 */
module.exports = router => {
  // Render other contact pages
  router.get('/application/:applicationId/contact-information/where-do-you-live', (req, res) => {
    const { referrer } = req.query

    res.render('application/contact-information/where-do-you-live', {
      referrer
    })
  })

  // Address type answer branching
  router.all('/application/:applicationId/contact-information/where-do-you-live/answer', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)
    const location = application['contact-information'].addressType
    const address_lookup_feature_enabled = req.session.data.flags.address_lookup

    if (location === 'domestic') {
      if (address_lookup_feature_enabled) {
        res.redirect(`/application/${applicationId}/contact-information/lookup-address`)
      } else {
        res.redirect(`/application/${applicationId}/contact-information/uk-address`)
      }
    } else {
      res.redirect(`/application/${applicationId}/contact-information/international-address`)
    }
  })

  // Render address page
  router.get('/application/:applicationId/contact-information/:view(uk-address|international-address)', (req, res) => {
    const { referrer } = req.query
    const { view } = req.params

    res.render(`application/contact-information/${view}`, {
      formaction: referrer || `/application/${req.params.applicationId}/contact-information/review`,
      referrer
    })
  })

  // Render other contact pages
  router.get('/application/:applicationId/contact-information/:view', (req, res) => {
    const { referrer } = req.query

    res.render(`application/contact-information/${req.params.view}`, {
      referrer
    })
  })
}
