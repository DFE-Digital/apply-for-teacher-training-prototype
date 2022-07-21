const { DateTime } = require('luxon')
const utils = require('./../../utils')

module.exports = router => {
  router.get('/dashboard/:applicationId/:applicationStatus?', (req, res) => {
    const { applicationId, applicationStatus } = req.params
    const { confirmation } = req.query

    const { makeMeAnOffer } = req.query

    if (applicationStatus) {
      // clear data and reset it from file
      req.session.data = {}
      req.session.data = utils.defaultSessionData()
    }

    const application = utils.applicationData(req)
    const choices = application.choices

    switch (applicationStatus) {
      // Single course states
      case 'awaiting-provider-decision':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = false
        choices.ABCDE.feedback = null
        choices.ABCDE.rejectedByDefault = false
        break
      case 'future-interview':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = [{
          date: DateTime.local().set({ hour: 10, minute: 30 }).plus({ days: 7 }),
          providerName: 'Leeds Trinity University',
          address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
        }]
        choices.ABCDE.feedback = null
        choices.ABCDE.rejectedByDefault = false
        break
      case 'post-interview':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = [{
          date: DateTime.local().set({ hour: 10, minute: 30 }).minus({ days: 2 }),
          providerName: 'Leeds Trinity University',
          address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
        }]
        choices.ABCDE.feedback = null
        choices.ABCDE.rejectedByDefault = false
        break
      case 'offer-received':
        choices.ABCDE.status = 'Offer received'
        choices.ABCDE.interview = null
        choices.ABCDE.feedback = null
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' },
          { title: 'Achievement of Degree in BA Ballet Education with 2:1 or above', status: 'Pending' },
          { title: 'Verification of GCSE maths and English certificates', status: 'Pending' },
          { title: 'Return completed and signed Suitability Declaration.', status: 'Pending' },
          { title: 'Return completed and signed Fee Status Declaration.', status: 'Pending' }
        ]
        break
      case 'offer-received-different-course':
        choices.ABCDE.status = 'Offer received'
        choices.ABCDE.offeredCourseId = '3C2X'
        choices.ABCDE.interview = null
        choices.ABCDE.feedback = null
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' }
        ]
        break
      case 'offer-received-different-provider':
        choices.ABCDE.status = 'Offer received'
        choices.ABCDE.offeredCourseId = 'X100'
        choices.ABCDE.offeredProviderId = 'S31'
        choices.ABCDE.interview = null
        choices.ABCDE.feedback = null
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' }
        ]
        break

      case 'unsuccessful-with-feedback':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.hasFeedback = true
        choices.ABCDE.feedback = {
          behaviour: {
            didNotReplyToMessages: true
          },
          qualityOfApplication: {
            subjectKnowledge: 'Understand the purpose of primary education and then learn more about the procedures related to safeguarding.'
          },
          qualifications: {
            degreeDoesNotMeetRequirements: true
          }
        }
        choices.ABCDE.rejectedByDefault = false
        break
      case 'unsuccessful-course-full':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.hasFeedback = true
        choices.ABCDE.feedback = {
          courseFull: true
        }
        choices.ABCDE.rejectedByDefault = false
        break
      case 'unsuccessful-provider-did-not-respond':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.hasFeedback = true
        choices.ABCDE.rejectedByDefault = true
        choices.ABCDE.feedback = null
        break
      case 'withdrawn':
        choices.ABCDE.status = 'Application withdrawn'
        choices.ABCDE.withdrawnByProvider = false
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.feedback = null
        break
      case 'withdrawn-by-provider':
        choices.ABCDE.status = 'Application withdrawn'
        choices.ABCDE.withdrawnByProvider = true
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.feedback = null
        break
      case 'offer-withdrawn':
        choices.ABCDE.status = 'Offer withdrawn'
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.feedback = {
          behaviour: {
            didNotReplyToMessages: true,
            other: 'You did not send us the required form with additional information.',
            whatTheyCouldToDoImprove: 'Respond promptly to our requests.'
          }
        }
        break

      case 'accepted':
        choices.ABCDE.status = 'Offer accepted'
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.feedback = null
        choices.ABCDE.conditions = [
          { title: 'References', status: 'Met' },
          { title: 'Fitness to train to teach check', status: 'Met' },
          { title: 'Disclosure and barring service check', status: 'Met' },
          { title: 'Achievement of Degree in BA Ballet Education with 2:1 or above', status: 'Met' },
          { title: 'Verification of GCSE maths and English certificates', status: 'Met' },
          { title: 'Return completed and signed Suitability Declaration.', status: 'Met' },
          { title: 'Return completed and signed Fee Status Declaration.', status: 'Met' }
        ]
        break
      case 'declined':
        choices.ABCDE.status = 'Offer declined'
        choices.ABCDE.rejectedByDefault = false
        break
      case 'deferred':
        choices.ABCDE.status = 'Offer deferred'
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' },
          { title: 'Achievement of Degree in BA Ballet Education with 2:1 or above', status: 'Pending' },
          { title: 'Verification of GCSE maths and English certificates', status: 'Pending' },
          { title: 'Return completed and signed Suitability Declaration.', status: 'Pending' },
          { title: 'Return completed and signed Fee Status Declaration.', status: 'Pending' }
        ]
        break
      case 'did-not-respond-to-offer':
        choices.ABCDE.status = 'Offer declined'
        choices.ABCDE.rejectedByDefault = false
        break
      case 'conditions-not-met':
        choices.ABCDE.status = 'Conditions not met'
        choices.ABCDE.rejectedByDefault = false
        choices.ABCDE.conditions = [
          { title: 'References', status: 'Not met' },
          { title: 'Fitness to train to teach check', status: 'Met' },
          { title: 'Disclosure and barring service check', status: 'Pending' },
          { title: 'Achievement of Degree in BA Ballet Education with 2:1 or above', status: 'Pending' },
          { title: 'Verification of GCSE maths and English certificates', status: 'Pending' },
          { title: 'Return completed and signed Suitability Declaration.', status: 'Pending' },
          { title: 'Return completed and signed Fee Status Declaration.', status: 'Pending' }
        ]
        break
      case 'recruited-single':
        choices.ABCDE.status = 'Offer confirmed'
        choices.ABCDE.rejectedByDefault = false
        break

      // Multiple courses applied for
      case 'awaiting-all-provider-decisions':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = false
        choices.FGHIJ.status = 'Awaiting decision'
        choices.FGHIJ.interview = false
        choices.ZYXWV.status = 'Awaiting decision'
        choices.ZYXWV.interview = false
        break

      case 'interviewing':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = [{
          date: DateTime.local().set({ hour: 10, minute: 30 }).plus({ days: 7 }),
          providerName: 'University of Leeds',
          address: 'Zoom: <a href="#">https://zoom.us/https://us02web.zoom.us/j/35346436342?pwd=bk43RStvSnFHK1NQZnVp6D3DFTSJFGNS</a>'
        }]
        choices.FGHIJ.status = 'Awaiting decision'
        choices.FGHIJ.interview = [{
          date: DateTime.local().set({ hour: 14, minute: 30 }).plus({ days: 2 }),
          providerName: 'Leeds Trinity University',
          address: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD'
        }]
        choices.ZYXWV.status = 'Awaiting decision'

        break

      case 'awaiting-one-provider-decision-one-offer':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = [{
          date: DateTime.local().set({ hour: 10, minute: 30 }).minus({ days: 2 }),
          providerName: 'University of Leeds',
          address: 'Zoom: <a href="#">https://zoom.us/https://us02web.zoom.us/j/35346436342?pwd=bk43RStvSnFHK1NQZnVp6D3DFTSJFGNS</a>'
        }]
        choices.FGHIJ.status = 'Unsuccessful'
        choices.FGHIJ.feedback = {
          courseFull: true
        }
        choices.ZYXWV.status = 'Offer received'
        choices.ZYXWV.conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' }
        ]

        break

      case 'awaiting-one-provider-decision-no-offers':
        choices.ABCDE.status = 'Awaiting decision'
        choices.ABCDE.interview = [{
          date: DateTime.local().set({ hour: 10, minute: 30 }).plus({ days: 7 }),
          providerName: 'Gorse SCITT',
          address: 'Clifford Moor Road, Boston Spa, West Yorkshire. LS23 6RW'
        }]
        choices.FGHIJ.status = 'Unsuccessful'
        choices.FGHIJ.feedback = {
          personalStatement: {
            qualityOfWriting: 'There were a number of spelling and grammar errors throughout the application.',
            other: 'Your rationale for wanting to teach was strong but your personal statement did not demonstrate that you understand the rewards and challenges of teaching. '
          },
          additionalFeedback: 'It would also strengthen your application if you could get more experience of working within a primary school. '
        }
        choices.ZYXWV.status = 'Unsuccessful'
        choices.ZYXWV.interview = null
        choices.ZYXWV.feedback = {
          additionalFeedback: 'Thank you for your application. After careful consideration, we have decided not to select you for interview for a place on this highly competitive programme.  We wish you all the best with the other applications you have made.'
        }
        break

      case 'received-one-offer':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.interview = false
        choices.ABCDE.feedback = {
          behaviour: {
            didNotReplyToMessages: true
          }
        }
        choices.FGHIJ.status = 'Application withdrawn'
        choices.FGHIJ.interview = false
        choices.ZYXWV.status = 'Offer received'
        choices.ZYXWV.conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' }
        ]
        break

      case 'received-two-offers':
        choices.ABCDE.status = 'Offer received'
        choices.ABCDE.interview = [{
          date: DateTime.local().set({ hour: 10, minute: 30 }).minus({ days: 3 }),
          providerName: 'Gorse SCITT',
          address: 'Clifford Moor Road, Boston Spa, West Yorkshire. LS23 6RW'
        }]
        choices.ABCDE.conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' }
        ]
        choices.FGHIJ.status = 'Unsuccessful'
        choices.FGHIJ.feedback = {
          courseFull: true
        }
        choices.ZYXWV.status = 'Offer received'
        choices.ZYXWV.interview = false
        choices.ZYXWV.conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' }
        ]
        break

      case 'awaiting-candidate-response':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.hasFeedback = true
        choices.FGHIJ.status = 'Offer received'
        choices.ZYXWV.status = 'Awaiting decision'
        break

      // Actionable feedback
      case 'ended-without-success':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.feedback = {
          personalStatement: {
            qualityOfWriting: 'Contained several spelling mistakes and grammatical errors.\n\nThe candidate should describe the impact they want to have on their students in more detail.',
            other: 'Candidate was not able to demonstrate sufficient experience of working with children.'
          }
        }
        choices.FGHIJ.status = 'Unsuccessful'
        choices.FGHIJ.feedback = {
          personalStatement: {
            other: 'Your rationale for wanting to teach was strong but your personal statement did not demonstrate that you understand the rewards and challenges of teaching. There were a number of spelling and grammar errors throughout the application.'
          },
          additionalFeedback: 'It would also strengthen your application if you could get more experience of working within a primary school. '
        }
        choices.ZYXWV.status = 'Unsuccessful'
        choices.ZYXWV.interview = null
        choices.ZYXWV.feedback = {
          personalStatement: {
            other: 'Focus more on why teaching is the career for you.'
          }
        }
        break

      // Vague feedback
      case 'ended-without-success-vague-feedback':
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.feedback = {
          personalStatement: {
            other: 'The overall application was weak suggesting that the applicant may not be successful on the course'
          }
        }
        choices.FGHIJ.status = 'Unsuccessful'
        choices.FGHIJ.feedback = {
          performanceAtInterview: 'You had not made a sufficiently considered and informed decision to train to teach.',
          personalStatement: {
            qualityOfWriting: 'The quality of communication in the personal statement could be improved.'
          },
          additionalFeedback: 'There have been limited places for this course and stronger applications received.'
        }
        choices.ZYXWV.status = 'Unsuccessful'
        choices.ZYXWV.interview = null
        choices.ZYXWV.feedback = {
          personalStatement: {
            other: 'Focus more on why teaching is the career for you.'
          },
          additionalFeedback: 'You could apply for the unsalaried route that we offer.'
        }
        break

      // Qualifications feedback
      case 'ended-without-success-qualifications-feedback':
        application.gcse.maths.gradeSingle = 'D'
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.feedback = {
          qualifications: {
            noMathsGCSEOrEquivalent: true
          }
        }
        choices.FGHIJ.status = 'Unsuccessful'
        choices.FGHIJ.feedback = {
          qualifications: {
            noMathsGCSEOrEquivalent: true,
            other: 'Our minimum degree requirement is a 2:1. We cannot accepted degrees with a 2:2 or below.'
          },
          additionalFeedback: 'There have been limited places for this course and stronger applications received.'
        }
        choices.ZYXWV.status = 'Unsuccessful'
        choices.ZYXWV.interview = null
        choices.ZYXWV.feedback = {
          qualifications: {
            noMathsGCSEOrEquivalent: true,
            other: 'Thank you for your application. Unfortunately you do not meet our entry requirements in terms of subject knowledge. As your degree is not in English you would need A Levels of grade C or above in English Language and English Literature.'
          }
        }
        break

      case 'pending-conditions':
        application.status = 'Offer accepted'
        choices.ABCDE.status = 'Offer accepted'
        choices.ABCDE.conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' }
        ]
        application.choices = [choices.ABCDE]
        break

      case 'halfway-through-references':
        application.status = 'Offer accepted'
        choices.ABCDE.status = 'Offer accepted'
        choices.ABCDE.conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' }
        ]
        application.choices = [choices.ABCDE]

        application.references = {
          '1J4g': {
            status: 'Requested',
            name: 'John Bloggs',
            email: 'john@birmingham.ac.uk',
            relationship: 'He was my academic tutor. I’ve known him for 3 years.',
            type: 'Academic',
            log: [{ note: 'Request sent', date: '2022-06-27T15:36:51.330Z' }]
          },
          7351: {
            status: 'Received',
            name: 'Jane Doe',
            email: 'jane@test.com',
            relationship: 'I worked with her a Birmingham School. I’ve know her for 2 years.',
            type: 'Someone you know through experience working in a school',
            log: [
              { note: 'Request sent', date: '2022-06-23T15:36:51.330Z' },
              { note: 'Reference received', date: '2022-06-27T15:36:51.330Z' }
            ]
          },
          543636: {
            status: 'Cancelled',
            name: 'Miranda Bishop',
            email: 'mirande@test.com',
            relationship: 'She is my ex-colleague. I’ve known her 10 years',
            type: 'Character',
            log: [
              { note: 'Request sent', date: '2022-06-23T15:36:51.330Z' },
              { note: 'Cancelled', date: '2022-06-27T15:36:51.330Z' }
            ]
          }
        }
        break

      case 'references-given-other-conditions-pending':
        application.status = 'Offer accepted'
        choices.ABCDE.status = 'Offer accepted'
        choices.ABCDE.conditions = [
          { title: 'References', status: 'Met' },
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Met' }
        ]
        application.choices = [choices.ABCDE]

        application.references = {
          '1J4g': {
            status: 'Received',
            name: 'John Bloggs',
            email: 'john@birmingham.ac.uk',
            relationship: 'He was my academic tutor. I’ve known him for 3 years.',
            type: 'Academic',
            log: [
              { note: 'Request sent', date: '2022-06-27T15:36:51.330Z' },
              { note: 'Reference received', date: '2022-06-27T15:36:51.330Z' }
            ]
          },
          7351: {
            status: 'Received',
            name: 'Jane Doe',
            email: 'jane@test.com',
            relationship: 'I worked with her a Birmingham School. I’ve know her for 2 years.',
            type: 'Someone you know through experience working in a school',
            log: [
              { note: 'Request sent', date: '2022-06-23T15:36:51.330Z' },
              { note: 'Reference received', date: '2022-06-27T15:36:51.330Z' }
            ]
          },
          543636: {
            status: 'Cancelled',
            name: 'Miranda Bishop',
            email: 'mirande@test.com',
            relationship: 'She is my ex-colleague. I’ve known her 10 years',
            type: 'Character',
            log: [
              { note: 'Request sent', date: '2022-06-23T15:36:51.330Z' },
              { note: 'Cancelled', date: '2022-06-27T15:36:51.330Z' }
            ]
          },
          25235: {
            status: 'Requested',
            name: 'Phoebe Taylor',
            email: 'phoebe@test.com',
            relationship: 'I worked with her at the Birmingham coffee shop for 2 years.',
            type: 'Professional',
            log: [
              { note: 'Request sent', date: '2022-06-23T15:36:51.330Z' }
            ]
          }
        }
        break

      case 'offer-deferred':
        application.status = 'Offer deferred'
        choices.ZYXWV.status = 'Offer deferred'
        choices.ZYXWV.conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' }
        ]
        application.choices = [choices.ZYXWV]

        break

      case 'recruited':
        application.status = 'Offer confirmed'
        choices.ZYXWV.status = 'Offer confirmed'
        application.choices = [choices.ZYXWV]
        break

      case 'awaiting-apply-again-response':
        choices.ABCDE.status = 'Awaiting decision'
        req.session.data.applications['12345'].choices.ABCDE.status = 'Unsuccessful'
        req.session.data.applications['12345'].choices.FGHIJ.status = 'Unsuccessful'
        req.session.data.applications['12345'].choices.ZYXWV.status = 'Unsuccessful'
        break

      case 'end-of-cycle-unsuccessful':
        req.session.data.applications['84659'].cycleDeadlinePassed = true
        choices.ABCDE.status = 'Unsuccessful'
        choices.ABCDE.hasFeedback = true
        choices.ABCDE.feedback = {
          qualityOfApplication: {
            personalStatement: 'Contained several spelling mistakes and grammatical errors.\n\nThe candidate should describe the impact they want to have on their students in more detail.',
            other: 'Candidate was not able to demonstrate sufficient experience of working with children.'
          }
        }
        break
    }

    // TODO: refactor these counts
    const numberOfOffersReceived = utils.toArray(application.choices).filter(function (choice) {
      return choice.status === 'Offer received'
    }).length

    const numberOfOffersDeclined = utils.toArray(application.choices).filter(function (choice) {
      return choice.status === 'Offer declined'
    }).length

    const numberOfApplicationsWithdrawn = utils.toArray(application.choices).filter(function (choice) {
      return choice.status === 'Application withdrawn'
    }).length

    const numberOfChoicesAwaitingDecision = utils.toArray(application.choices).filter(function (choice) {
      return choice.status === 'Awaiting decision'
    }).length

    const courseOfferAccepted = utils.toArray(application.choices).filter(function (choice) {
      return (choice.status === 'Offer accepted') || (choice.status === 'Offer confirmed') || (choice.status === 'Offer deferred')
    }).length > 0

    const canMakeDecision = (numberOfOffersReceived > 0 && numberOfChoicesAwaitingDecision === 0)

    const endedWithoutSuccess = (numberOfOffersReceived === 0 && numberOfChoicesAwaitingDecision === 0 && courseOfferAccepted === false)

    if (makeMeAnOffer === 'yes') {
      for (const choiceId in application.choices) {
        application.choices[choiceId].status = 'Offer received'
        application.choices[choiceId].conditions = [
          { title: 'Fitness to train to teach check', status: 'Pending' },
          { title: 'Disclosure and barring service check', status: 'Pending' }
        ]
      }
    }

    res.render('dashboard/index', {
      applicationId,
      application,
      canMakeDecision,
      numberOfOffersReceived,
      numberOfOffersDeclined,
      endedWithoutSuccess,
      numberOfApplicationsWithdrawn,
      numberOfChoicesAwaitingDecision,
      confirmation
    })
  })
}
