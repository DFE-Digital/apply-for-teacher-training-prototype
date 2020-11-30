const utils = require('./../../utils')

module.exports = router => {
  router.get('/dashboard/:applicationId/:applicationStatus?', (req, res) => {
    const { applicationId, applicationStatus } = req.params
    const application = utils.applicationData(req)
    let status

    if (applicationStatus) {
      status = applicationStatus

      let { choices } = application
      choices = utils.toArray(choices)

      switch (applicationStatus) {
        case 'awaiting-provider-decisions':
          choices[0].status = 'Awaiting decision'
          choices[1].status = 'Awaiting decision'
          choices[2].status = 'Awaiting decision'
          break

        case 'interviewing':
          choices[0].status = 'Interview arranged'
          choices[1].status = 'Awaiting decision'
          choices[2].status = 'Awaiting decision'
          break

        case 'awaiting-candidate-response':
          choices[0].status = 'Offer received'
          choices[1].status = 'Offer received'
          choices[2].status = 'Application withdrawn'
          break

        case 'ended-without-success':
          choices[0].status = 'Unsuccessful'
          choices[0].hasFeedback = true
          choices[1].status = 'Offer withdrawn'
          choices[1].hasFeedback = true
          choices[2].status = 'Application withdrawn'
          break

        case 'pending-conditions':
          choices[0].status = 'Offer accepted'
          choices[1].status = 'Application withdrawn'
          choices[2].status = 'Offer declined'
          break

        case 'offer-deferred':
          choices[0].status = 'Offer deferred'
          choices[1].status = 'Application withdrawn'
          choices[2].status = 'Offer declined'
          break

        case 'recruited':
          choices[0].status = 'Conditions met'
          choices[1].status = 'Application withdrawn'
          choices[2].status = 'Offer declined'
          break

        default:
      }
    } else {
      status = application.state || 'awaiting-provider-decisions'
    }

    res.render('dashboard/index', {
      applicationStatus,
      applicationId,
      application,
      status
    })
  })
}
