const providers = require('../../data/providers')

/**
 * Application: Subject knowledge routes
 */
module.exports = router => {
  router.get('/application/:applicationId/personal-statement/:providerCode', (req, res) => {
    const referrer = req.query.referrer
    const providerCode = req.params.providerCode
    const provider = providers[providerCode]

    res.render(`application/personal-statement/index`, {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer,
      providerCode,
      provider
    })
  })

  // Render other cover letter pages
  router.get('/application/:applicationId/personal-statement/:providerCode/:view', (req, res) => {
    const referrer = req.query.referrer
    const providerCode = req.params.providerCode
    const provider = providers[providerCode]
    const view = req.params.view

    res.render(`application/personal-statement/${view}`, {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer,
      providerCode,
      provider
    })
  })
}
