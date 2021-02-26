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
        case 'awaiting-provider-decision':
          choices[0].status = 'Awaiting decision'
          choices[0].interview = false
          application.endedWithoutSuccess = false
          break
        case 'future-interview':
          choices[0].status = 'Awaiting decision'
          choices[0].interview = [{
            date: '2021-12-14T10:30:00',
            providerName: 'Leeds Trinity University',
            address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
          }]
          application.endedWithoutSuccess = false
          break
        case 'post-interview':
          choices[0].status = 'Awaiting decision'
          choices[0].interview = [{
            date: '2019-12-14T10:30:00',
            providerName: 'Leeds Trinity University',
            address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
          }]
          application.endedWithoutSuccess = false
          break
        case 'offer-received':
          choices[0].status = 'Offer received'
          choices[0].interview = null
          application.endedWithoutSuccess = false
          break
        case 'unsuccessful-with-feedback':
          choices[0].status = 'Unsuccessful'
          choices[0].hasFeedback = true
          choices[0].feedback = {
            behaviour: false,
            quality_of_application: {
              subject_knowledge: "Understand the purpose of primary education and then learn more about the procedures related to safeguarding."
            },
            qualifications: {
              degree_does_not_meet_requirements: true
            },
            interested_in_future_applications: true
          }
          application.endedWithoutSuccess = true
          break
        case 'unsuccessful-course-full':
          choices[0].status = 'Unsuccessful'
          choices[0].hasFeedback = true
          choices[0].feedback = {
            course_full: true
          }
          application.endedWithoutSuccess = true
          break
        case 'unsuccessful-provider-did-not-respond':
          choices[0].status = 'Unsuccessful'
          choices[0].hasFeedback = true
          choices[0].feedback = {
            rejected_by_default: true
          }
          application.endedWithoutSuccess = true
          break
        case 'withdrawn':
          choices[0].status = 'Application withdrawn'
          application.endedWithoutSuccess = true
          break
        case 'offer-withdrawn':
          choices[0].status = 'Offer withdrawn'
          application.endedWithoutSuccess = true
          break

        case 'accepted':
          choices[0].status = 'Offer accepted'
          application.endedWithoutSuccess = false
          break
        case 'declined':
          choices[0].status = 'Offer declined'
          application.endedWithoutSuccess = true
          break
        case 'deferred':
          choices[0].status = 'Offer deferred'
          application.endedWithoutSuccess = false
          break
        case 'did-not-respond-to-offer':
          choices[0].status = 'Offer declined'
          application.endedWithoutSuccess = true
          break
        case 'conditions-not-met':
          choices[0].status = 'Conditions not met'
          application.endedWithoutSuccess = true
          break
        case 'recruited-single':
          choices[0].status = 'Conditions met'
          application.endedWithoutSuccess = false
          break


        // Multiple courses applied for
        case 'awaiting-all-provider-decisions':
          choices[0].status = 'Awaiting decision'
          choices[0].interview = false
          choices[1].status = 'Awaiting decision'
          choices[1].interview = false
          choices[2].status = 'Awaiting decision'
          choices[2].interview = false
          application.endedWithoutSuccess = false
          break

        case 'interviewing':
          choices[0].status = 'Awaiting decision'
          choices[0].interview = [{
            date: '2020-12-14T11:00:00',
            providerName: 'Gorse SCITT',
            address: 'Clifford Moor Road, Boston Spa, West Yorkshire. LS23 6RW'
          }, {
            date: '2020-12-16T14:00:00',
            providerName: 'University of Leeds',
            address: 'Woodhouse, Leeds. LS2 9JT'
          }]
          choices[1].status = 'Awaiting decision'
          choices[1].interview = [{
            date: '2020-12-14T10:30:00',
            providerName: 'Leeds Trinity University',
            address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
          }]
          choices[2].status = 'Awaiting decision'
          application.endedWithoutSuccess = false

          break

        case 'awaiting-some-provider-decisions':
          choices[0].status = 'Awaiting decision'
          choices[0].interview = [{
            date: '2020-12-14T11:00:00',
            providerName: 'Gorse SCITT',
            address: 'Clifford Moor Road, Boston Spa, West Yorkshire. LS23 6RW'
          }]
          choices[1].status = 'Unsuccessful'
          choices[1].hasFeedback = true
          choices[1].feedback = {
            course_full: true
          }
          choices[2].status = 'Offer received'
          choices[2].interview = null
          application.endedWithoutSuccess = false
          break

        case 'received-one-offer':
          choices[0].status = 'Unsuccessful'
          choices[0].interview = [{
            date: '2020-12-14T11:00:00',
            providerName: 'Gorse SCITT',
            address: 'Clifford Moor Road, Boston Spa, West Yorkshire. LS23 6RW'
          }]
          choices[1].status = 'Application withdrawn'
          choices[1].interview = false
          choices[2].status = 'Offer received'
          application.endedWithoutSuccess = false
          break

        case 'received-two-offers':
          choices[0].status = 'Unsuccessful'
          choices[0].interview = [{
            date: '2020-12-14T11:00:00',
            providerName: 'Gorse SCITT',
            address: 'Clifford Moor Road, Boston Spa, West Yorkshire. LS23 6RW'
          }]
          choices[1].status = 'Offer received'
          choices[1].interview = false
          choices[2].status = 'Offer received'
          application.endedWithoutSuccess = false
          break

        case 'awaiting-candidate-response':
          choices[0].status = 'Unsuccessful'
          choices[0].hasFeedback = true
          choices[1].status = 'Offer received'
          choices[2].status = 'Awaiting decision'
          break

        case 'ended-without-success':
          choices[0].status = 'Unsuccessful'
          choices[0].hasFeedback = true
          choices[1].status = 'Offer withdrawn'
          choices[1].hasFeedback = true
          choices[2].status = 'Application withdrawn'
          application.endedWithoutSuccess = true
          break

        case 'pending-conditions':
          choices[0].status = 'Offer declined'
          choices[1].status = 'Application withdrawn'
          choices[2].status = 'Offer accepted'
          application.endedWithoutSuccess = false
          break

        case 'offer-deferred':
          choices[0].status = 'Offer declined'
          choices[1].status = 'Application withdrawn'
          choices[2].status = 'Offer deferred'
          application.endedWithoutSuccess = false
          break

        case 'recruited':
          choices[0].status = 'Offer declined'
          choices[1].status = 'Application withdrawn'
          choices[2].status = 'Conditions met'
          application.endedWithoutSuccess = false
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
