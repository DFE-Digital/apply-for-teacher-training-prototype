const providers = require('../../data/providers')

/**
 * Application: Personal statement routes
 */
module.exports = router => {
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
