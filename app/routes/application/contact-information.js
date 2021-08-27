const utils = require('../../utils')

module.exports = router => {
  // Render other contact pages
  router.get('/application/:applicationId/contact-information/contact-address', (req, res) => {
    const { referrer } = req.query

    res.render('application/contact-information/contact-address', {
      referrer
    })
  })

  // Contact address type answer branching
  router.all('/application/:applicationId/contact-information/contact-address/answer', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)
    const { addressType } = application.contactInformation
    const { addressLookup } = req.session.data.flags

    if (addressType === 'domestic') {
      if (addressLookup) {
        res.redirect(`/application/${applicationId}/contact-information/lookup-address`)
      } else {
        res.redirect(`/application/${applicationId}/contact-information/uk-contact-address`)
      }
    } else {
      res.redirect(`/application/${applicationId}/contact-information/international-contact-address`)
    }
  })

  // Second address type answer branching
  router.all('/application/:applicationId/contact-information/permanent-address/answer', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)
    const { permanentAddressType } = application.contactInformation

    if (permanentAddressType === 'contact') {
      res.redirect(`/application/${applicationId}/contact-information/review`)
    } else {
      res.redirect(`/application/${applicationId}/contact-information/where-is-your-permanent-address`)
    }
  })

  // Permanent address type answer branching
  router.all('/application/:applicationId/contact-information/where-is-your-permanent-address/answer', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)
    const { permanentAddressType } = application.contactInformation

    if (permanentAddressType === 'domestic') {
      res.redirect(`/application/${applicationId}/contact-information/uk-permanent-address`)
    } else {
      res.redirect(`/application/${applicationId}/contact-information/international-permanent-address`)
    }
  })

  // Render address page
  router.get('/application/:applicationId/contact-information/:view(uk-contact-address|international-contact-address)', (req, res) => {
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
