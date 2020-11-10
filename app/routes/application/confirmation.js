const utils = require('./../../utils')

module.exports = router => {
  router.all('/application/:applicationId/confirmation', (req, res) => {
    const { applicationId } = req.params

    const applicationData = utils.applicationData(req)
    applicationData.status = 'awaiting-provider-decisions'

    let { choices } = applicationData
    choices = utils.toArray(choices)
    choices[0].status = 'Awaiting decision'
    choices[1].status = 'Awaiting decision'
    choices[2].status = 'Awaiting decision'

    res.render('application/confirmation', {
      applicationId
    })
  })
}
