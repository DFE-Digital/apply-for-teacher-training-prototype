const providers = require('../../data/providers')

/**
 * Application: Subject knowledge routes
 */
module.exports = router => {
  router.get('/application/:applicationId/cover-letter/:providerCode', (req, res) => {
    const referrer = req.query.referrer
    const providerCode = req.params.providerCode
    const provider = providers[providerCode]

    res.render(`application/cover-letter/index`, {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer,
      providerCode,
      provider
    })
  })

  // Render other cover letter pages
  router.get('/application/:applicationId/cover-letter/:providerCode/:view', (req, res) => {
    const referrer = req.query.referrer
    const providerCode = req.params.providerCode
    const provider = providers[providerCode]
    const view = req.params.view

    res.render(`application/cover-letter/${view}`, {
      formaction: referrer || `/application/${req.params.applicationId}`,
      referrer,
      providerCode,
      provider
    })
  })
}
