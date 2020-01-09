const utils = require('./../../utils')

/**
 * Application: Review answers
 */
module.exports = router => {
  router.get('/application/:applicationId/review', (req, res) => {
    var applicationData = utils.applicationData(req)
    var pageObject = {}
    var successFlash = req.flash('success')

    if (successFlash[0] === 'submitted-incompleted-application') {
      pageObject.errorList = []
      const sections = {
        choices: 'Course choices not marked as completed',
        candidate: 'Personal details not entered',
        'contact-details': 'Contact details not entered',
        'reasonable-adjustments': 'Training with a disability not entered',
        'work-history': 'Work history is not marked as completed',
        'school-experience': 'Volunteering with children and young people is not marked as completed',
        degree: 'Degree(s) are not marked as completed',
        'personal-statement': 'Tell us why you want to be a teacher',
        'subject-knowledge': 'Tell us about your knowledge about the subject you want to teach',
        gcse: {
          maths: 'Maths GCSE or equivalent not entered',
          english: 'English GCSE or equivalent not entered',
          science: 'Science GCSE or equivalent not entered'
        },
        interview: 'Tell us your interview preferences',
        referees: 'Add 2 referees to your application'
      }

      for (const [key, value] of Object.entries(sections)) {
        if (key === 'gcse') {
          const subjects = ['maths', 'english', 'science']
          subjects.forEach(subject => {
            if (Object.keys(applicationData.gcse[subject]).length === 0) {
              pageObject.errorList.push({
                text: value[subject],
                href: `#missing-gcse-${subject}`
              })
            }
          })
        } else {
          if (applicationData[key] === null || Object.keys(applicationData[key]).length === 0) {
            pageObject.errorList.push({
              text: value,
              href: `#missing-${key}`
            })
          }
        }
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
      if (status === 'amending') {
        res.redirect(`/application/${req.params.applicationId}/submit`)
      } else {
        res.redirect(`/application/${req.params.applicationId}/equality-monitoring`)
      }
    }
  })
}
