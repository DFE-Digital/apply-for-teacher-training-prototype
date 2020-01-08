const utils = require('./../../utils')

/**
 * Application: Review answers
 */
module.exports = router => {
  router.get('/application/:applicationId/review', (req, res) => {
    var applicationData = utils.applicationData(req)
    var pageObject = {}
    var successFlash = req.flash('success')

    // Application sections
    const { candidate, choices, degree, interview, referees } = applicationData
    const { maths, english, science } = applicationData.gcse
    const contactDetails = applicationData['contact-details']
    const personalStatement = applicationData['personal-statement']
    const reasonableAdjustments = applicationData['reasonable-adjustments']
    const schoolExperience = applicationData['school-experience']
    const subjectKnowledge = applicationData['subject-knowledge']
    const workHistory = applicationData['work-history']

    if (successFlash[0] === 'submitted-incompleted-application') {
      pageObject.errorList = []

      if (Object.keys(choices).length === 0) {
        pageObject.errorList.push({
          text: 'Course choices not marked as completed',
          href: '#missing-course-choices'
        })
      }

      if (Object.keys(candidate).length === 0) {
        pageObject.errorList.push({
          text: 'Personal details not entered',
          href: '#missing-personal-details'
        })
      }

      if (Object.keys(contactDetails).length === 0) {
        pageObject.errorList.push({
          text: 'Contact details not entered',
          href: '#missing-contact-details'
        })
      }

      if (Object.keys(reasonableAdjustments).length === 0) {
        pageObject.errorList.push({
          text: 'Training with a disability not entered',
          href: '#missing-reasonable-adjustments'
        })
      }

      if (Object.keys(workHistory).length === 0) {
        pageObject.errorList.push({
          text: 'Work history is not marked as completed',
          href: '#missing-work-history'
        })
      }

      if (Object.keys(schoolExperience).length === 0) {
        pageObject.errorList.push({
          text: 'Volunteering with children and young people is not marked as completed',
          href: '#missing-school-experience'
        })
      }

      if (Object.keys(degree).length === 0) {
        pageObject.errorList.push({
          text: 'Degree(s) are not marked as completed',
          href: '#missing-degree'
        })
      }

      if (Object.keys(maths).length === 0) {
        pageObject.errorList.push({
          text: 'Maths GCSE or equivalent not entered',
          href: '#missing-maths-gcse'
        })
      }

      if (Object.keys(english).length === 0) {
        pageObject.errorList.push({
          text: 'English GCSE or equivalent not entered',
          href: '#missing-english-gcse'
        })
      }

      if (Object.keys(science).length === 0) {
        pageObject.errorList.push({
          text: 'Science GCSE or equivalent not entered',
          href: '#missing-science-gcse'
        })
      }

      console.log('personalStatement', personalStatement)

      if (personalStatement === null) {
        pageObject.errorList.push({
          text: 'Tell us why you want to be a teacher',
          href: '#missing-personal-statement'
        })
      }

      if (subjectKnowledge === null) {
        pageObject.errorList.push({
          text: 'Tell us about your knowledge about the subject you want to teach',
          href: '#missing-subject-knowledge'
        })
      }

      if (interview === null) {
        pageObject.errorList.push({
          text: 'Tell us your interview preferences',
          href: '#missing-interview'
        })
      }

      if (Object.keys(referees).length === 0) {
        pageObject.errorList.push({
          text: 'Add 2 referees to your application',
          href: '#missing-referees'
        })
      }
    }

    res.render('application/review', pageObject)
  })

  router.post('/application/:applicationId/review', (req, res) => {
    // If updating job/role, ensure dates are saved using ISO 8601
    const id = req.query.update
    const applicationData = utils.applicationData(req)
    const referer = req.get('referer')

    if (id && referer.includes('work-history')) {
      utils.saveIsoDate(req, applicationData['work-history'], id)
    }

    if (id && referer.includes('school-experience')) {
      utils.saveIsoDate(req, applicationData['school-experience'], id)
    }

    res.render('application/review')
  })

  router.post('/application/:applicationId/review-complete', (req, res) => {
    const applicationData = utils.applicationData(req)

    // Application sections
    const { candidate, choices, degree, interview, status, referees } = applicationData
    const { maths, english, science } = applicationData.gcse
    const contactDetails = applicationData['contact-details']
    const personalStatement = applicationData['personal-statement']
    const reasonableAdjustments = applicationData['reasonable-adjustments']
    const schoolExperience = applicationData['school-experience']
    const subjectKnowledge = applicationData['subject-knowledge']
    const workHistory = applicationData['work-history']

    // User tried to submit incomplete application
    // just checking choices are empty for now
    // to make real need to check over every section
    if (
      Object.keys(choices).length === 0 ||
      Object.keys(candidate).length === 0 ||
      Object.keys(contactDetails).length === 0 ||
      Object.keys(reasonableAdjustments).length === 0 ||
      Object.keys(workHistory).length === 0 ||
      Object.keys(schoolExperience).length === 0 ||
      Object.keys(degree).length === 0 ||
      Object.keys(maths).length === 0 ||
      Object.keys(english).length === 0 ||
      Object.keys(science).length === 0 ||
      Object.keys(personalStatement).length === 0 ||
      Object.keys(subjectKnowledge).length === 0 ||
      Object.keys(interview).length === 0 ||
      Object.keys(referees).length === 0
    ) {
      req.flash('success', 'submitted-incompleted-application')
      res.redirect(`/application/${req.params.applicationId}/review`)
    } else {
      console.log('applicationData.status', applicationData.status)
      if (status === 'amending') {
        res.redirect(`/application/${req.params.applicationId}/submit`)
      } else {
        res.redirect(`/application/${req.params.applicationId}/equality-monitoring`)
      }
    }
  })
}
