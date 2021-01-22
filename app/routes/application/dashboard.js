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
        // Single course states
        case 'awaiting-decision':
          choices[0].status = 'Awaiting provider decision'
          choices[0].interview = false
          break
        // Single course states
        case 'future-interview':
          choices[0].status = 'Awaiting provider decision'
          choices[0].interview = [{
            date: '2021-12-14T10:30:00',
            providerName: 'Leeds Trinity University',
            address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
          }]
          break
        case 'post-interview':
          choices[0].status = 'Awaiting provider decision'
          choices[0].interview = [{
            date: '2019-12-14T10:30:00',
            providerName: 'Leeds Trinity University',
            address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
          }]
          break
        case 'offer-received':
          choices[0].status = 'Offer received'
          choices[0].interview = null
          break

        // Multiple courses applied for
        case 'awaiting-provider-decisions':
          choices[0].status = 'Awaiting application decision'
          choices[0].interview = false
          choices[1].status = 'Awaiting application decision'
          choices[1].interview = false
          choices[2].status = 'Awaiting application decision'
          choices[2].interview = false
          break

        case 'interviewing':
          choices[0].status = 'Awaiting application decision'
          choices[0].interview = [{
            date: '2020-12-14T11:00:00',
            providerName: 'Gorse SCITT',
            address: 'Clifford Moor Road, Boston Spa, West Yorkshire. LS23 6RW'
          }, {
            date: '2020-12-16T14:00:00',
            providerName: 'University of Leeds',
            address: 'Woodhouse, Leeds. LS2 9JT'
          }]
          choices[1].status = 'Awaiting application decision'
          choices[1].interview = [{
            date: '2020-12-14T10:30:00',
            providerName: 'Leeds Trinity University',
            address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
          }]
          choices[2].status = 'Awaiting application decision'
          break

        case 'awaiting-candidate-response':
          choices[0].status = 'Unsuccessful'
          choices[0].hasFeedback = true
          choices[1].status = 'Offer received'
          choices[2].status = 'Awaiting application decision'
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
