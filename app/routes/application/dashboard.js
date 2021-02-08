const utils = require('./../../utils')

module.exports = router => {
  router.get('/dashboard/:applicationId/:applicationStatus?', (req, res) => {

    const { applicationId, applicationStatus } = req.params

    if (applicationStatus) {
      // clear data and reset it from file
      req.session.data = {}
      req.session.data = utils.defaultSessionData()

    }

    const application = utils.applicationData(req)
    let choices = application.choices

    switch (applicationStatus) {
      // Single course states
      case 'awaiting-provider-decision':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = false
        choices.ABCDE.feedback = null
        choices.ABCDE.rejectedByDefault = false
        application.endedWithoutSuccess = false
        break
      case 'future-interview':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = [{
          date: '2021-12-14T10:30:00',
          providerName: 'Leeds Trinity University',
          address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
        }]
        choices.ABCDE.feedback = null
        choices.ABCDE.rejectedByDefault = false

        application.endedWithoutSuccess = false
        break
      case 'post-interview':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = [{
          date: '2019-12-14T10:30:00',
          providerName: 'Leeds Trinity University',
          address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
        }]
        choices.ABCDE.feedback = null
        choices.ABCDE.rejectedByDefault = false

        application.endedWithoutSuccess = false
        break
      case 'offer-received':
        choices.ABCDE.status = 'Offer received'
        choices.ABCDE.interview = null
        choices.ABCDE.feedback = null
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.conditions = [
          "Fitness to Teach check",
          "Disclosure and barring service check",
          "Achievement of Degree in BA Ballet Education with 2:1 or above",
          "Verification of original or certified copies of GCSE Maths and English certificates at grade C (4) or above.",
          "Return completed and signed Suitability Declaration.",
          "Return completed and signed Fee Status Declaration."
        ]
        application.endedWithoutSuccess = false
        break
      case 'unsuccessful-with-feedback':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.hasFeedback = true
        choices.ABCDE.feedback = {
          behaviour: {
            didNotReplyToMessages: true
          },
          quality_of_application: {
            subject_knowledge: "Understand the purpose of primary education and then learn more about the procedures related to safeguarding."
          },
          qualifications: {
            degree_does_not_meet_requirements: true
          },
          interested_in_future_applications: true
        }
        choices.ABCDE.rejectedByDefault = false
        application.endedWithoutSuccess = true
        break
      case 'unsuccessful-course-full':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.hasFeedback = true
        choices.ABCDE.feedback = {
          course_full: true
        }
        choices.ABCDE.rejectedByDefault = false
        application.endedWithoutSuccess = true
        break
      case 'unsuccessful-provider-did-not-respond':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.hasFeedback = true
        choices.ABCDE.rejectedByDefault = true
        choices.ABCDE.feedback = null
        application.endedWithoutSuccess = true
        break
      case 'withdrawn':
        choices.ABCDE.status = 'Application withdrawn'
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.feedback = null
        application.endedWithoutSuccess = true
        break
      case 'offer-withdrawn':
        choices.ABCDE.status = 'Offer withdrawn'
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.feedback = {
          behaviour: {
            didNotReplyToMessages: true,
            other: "You did not send us the required form with additional information.",
            whatTheyCouldToDoImprove: "Respond promptly to our requests."
          },
          interested_in_future_applications: true
        }
        application.endedWithoutSuccess = true
        break

      case 'accepted':
        choices.ABCDE.status = 'Offer accepted'
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.feedback = null
        choices.ABCDE.conditions = [
          "Fitness to Teach check",
          "Disclosure and barring service check",
          "Achievement of Degree in BA Ballet Education with 2:1 or above",
          "Verification of original or certified copies of GCSE Maths and English certificates at grade C (4) or above.",
          "Return completed and signed Suitability Declaration.",
          "Return completed and signed Fee Status Declaration."
        ]
        application.endedWithoutSuccess = false
        break
      case 'declined':
        choices.ABCDE.status = 'Offer declined'
        choices.ABCDE.rejectedByDefault = false
        application.endedWithoutSuccess = true
        break
      case 'deferred':
        choices.ABCDE.status = 'Offer deferred'
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.conditions = [
          "Fitness to Teach check",
          "Disclosure and barring service check",
          "Achievement of Degree in BA Ballet Education with 2:1 or above",
          "Verification of original or certified copies of GCSE Maths and English certificates at grade C (4) or above.",
          "Return completed and signed Suitability Declaration.",
          "Return completed and signed Fee Status Declaration."
        ]
        application.endedWithoutSuccess = false
        break
      case 'did-not-respond-to-offer':
        choices.ABCDE.status = 'Offer declined'
        choices.ABCDE.rejectedByDefault = false
        application.endedWithoutSuccess = true
        break
      case 'conditions-not-met':
        choices.ABCDE.status = 'Conditions not met'
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.conditions = [
          "Fitness to Teach check",
          "Disclosure and barring service check",
          "Achievement of Degree in BA Ballet Education with 2:1 or above",
          "Verification of original or certified copies of GCSE Maths and English certificates at grade C (4) or above.",
          "Return completed and signed Suitability Declaration.",
          "Return completed and signed Fee Status Declaration."
        ]
        application.endedWithoutSuccess = true
        break
      case 'recruited-single':
        choices.ABCDE.status = 'Conditions met'
        choices.ABCDE.rejectedByDefault = false
        application.endedWithoutSuccess = false
        break


      // Multiple courses applied for
      case 'awaiting-all-provider-decisions':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = false
        choices.FGHIJ.status = 'Awaiting decision'
        choices.FGHIJ.interview = false
        choices.ZYXWV.status = 'Awaiting decision'
        choices.ZYXWV.interview = false
        application.endedWithoutSuccess = false
        break

      case 'interviewing':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = [{
          date: '2021-02-18T14:00:00',
          providerName: 'University of Leeds',
          address: 'Please use this link to attend the interview on Zoom:\n\n<a href="#">https://zoom.us/https://us02web.zoom.us/j/35346436342?pwd=bk43RStvSnFHK1NQZnVp6D3DFTSJFGNS</a><br><br>You may need to download the Zoom app first.',
          additional_details: 'The interview panel will consist of Gemma (training lead) and Brian (recruitment officer)'
        },
        {
          date: '2021-02-01T11:00:00',
          providerName: 'Gorse SCITT',
          address: 'Clifford Moor Road, Boston Spa, West Yorkshire. LS23 6RW'
        }, ]
        choices.FGHIJ.status = 'Awaiting decision'
        choices.FGHIJ.interview = [{
          date: '2021-02-08T10:30:00',
          providerName: 'Leeds Trinity University',
          address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
        }]
        choices.ZYXWV.status = 'Awaiting decision'
        application.endedWithoutSuccess = false

        break

      case 'awaiting-some-provider-decisions':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = [{
          date: '2021-02-06T11:00:00',
          providerName: 'Gorse SCITT',
          address: 'Clifford Moor Road, Boston Spa, West Yorkshire. LS23 6RW'
        },
        {
          date: '2021-02-01T11:00:00',
          providerName: 'Gorse SCITT',
          address: 'Clifford Moor Road, Boston Spa, West Yorkshire. LS23 6RW'
        }]
        choices.FGHIJ.status = 'Unsuccessful'
        choices.FGHIJ.feedback = {
          course_full: true,
          interested_in_future_applications: true
        }
        choices.ZYXWV.status = 'Unsuccessful'
        choices.ZYXWV.interview = null
        choices.ZYXWV.feedback = {
          behaviour: {
            other: "TBC",
            whatTheyCouldToDoImprove: "TBC"
          },
          quality_of_application: {
            subject_knowledge: "TBC"
          },
          interested_in_future_applications: true
        }
        application.endedWithoutSuccess = false
        break

      case 'received-one-offer':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.interview = false
        choices.ABCDE.feedback = {
          behaviour: {
            didNotReplyToMessages: true
          },
          interested_in_future_applications: true
        }
        choices.FGHIJ.status = 'Application withdrawn'
        choices.FGHIJ.interview = false
        choices.ZYXWV.status = 'Offer received'
        choices.ZYXWV.conditions = [
          "Fitness to Teach check",
          "Disclosure and barring service check"
        ]
        application.endedWithoutSuccess = false
        break

      case 'received-two-offers':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.interview = [{
          date: '2020-12-14T11:00:00',
          providerName: 'Gorse SCITT',
          address: 'Clifford Moor Road, Boston Spa, West Yorkshire. LS23 6RW'
        }]
        choices.ABCDE.feedback = {
          course_full: true
        }
        choices.FGHIJ.status = 'Offer received'
        choices.FGHIJ.interview = false
        choices.FGHIJ.conditions = [
          "Fitness to Teach check",
          "Disclosure and barring service check"
        ]
        choices.ZYXWV.status = 'Offer received'
        choices.ZYXWV.interview = false
        choices.ZYXWV.conditions = [
          "Fitness to Teach check",
          "Disclosure and barring service check"
        ]
        application.endedWithoutSuccess = false
        break

      case 'awaiting-candidate-response':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.hasFeedback = true
        choices.FGHIJ.status = 'Offer received'
        choices.ZYXWV.status = 'Awaiting decision'
        break

      case 'ended-without-success':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.feedback = {
          course_full: true
        }
        choices.FGHIJ.status = 'Offer withdrawn'
        choices.FGHIJ.feedback = false
        choices.ZYXWV.status = 'Application withdrawn'
        choices.ZYXWV.feedback = false
        application.endedWithoutSuccess = true
        break

      case 'pending-conditions':
        choices.ABCDE.status = 'Offer accepted'
        choices.ABCDE.conditions = [
          "Fitness to Teach check",
          "Disclosure and barring service check"
        ]
        application.endedWithoutSuccess = false
        break

      case 'offer-deferred':
        choices.ZYXWV.status = 'Offer deferred'
        application.choices = [choices.ZYXWV]
        application.endedWithoutSuccess = false
        break

      case 'recruited':
        choices.ZYXWV.status = 'Conditions met'
        application.choices = [choices.ZYXWV]
        application.endedWithoutSuccess = false
        break
    }

    const numberOfOffersReceived = utils.toArray(application.choices).filter(function(choice) {
      return choice.status == "Offer received"
    }).length

    const numberOfChoicesAwaitingDecision = utils.toArray(application.choices).filter(function(choice) {
      return choice.status == "Awaiting decision"
    }).length

    const canMakeDecision = (numberOfOffersReceived > 0 && numberOfChoicesAwaitingDecision == 0)

    res.render('dashboard/index', {
      applicationId,
      application,
      canMakeDecision,
      numberOfOffersReceived
    })
  })
}
