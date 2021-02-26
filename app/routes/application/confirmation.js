const utils = require('./../../utils')

module.exports = router => {
  router.all('/application/:applicationId/confirmation', (req, res) => {
    const { applicationId } = req.params

    const application = utils.applicationData(req)
    application.status = 'awaiting-provider-decisions'

    let { choices } = application
    choices = utils.toArray(choices)
    choices[0].status = 'Awaiting application decision'
    choices[1].status = 'Awaiting application decision'
    choices[2].status = 'Awaiting application decision'

    res.render('application/confirmation', {
      applicationId
    })
  })
}
