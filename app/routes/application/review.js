const utils = require('./../../utils')

/**
 * Application: Review answers
 */
module.exports = router => {
  router.get('/application/:applicationId/review', (req, res) => {
    const application = utils.applicationData(req)
    const { applicationId } = req.params
    const pageObject = {}
    const successFlash = req.flash('success')

    if (successFlash[0] === 'submitted-incompleted-application') {
      pageObject.errorList = []
      const sections = {
        choices: application.apply2 ? 'Course choice not marked as completed' : 'Course choices not marked as completed',
        references: 'Add 2 referees to your application',
        candidate: 'Personal details not entered',
        'contact-details': 'Contact details not entered',
        'additional-support': 'Training with a disability not entered',
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
        interview: 'Tell us your interview needs'
      }

      for (const [key, value] of Object.entries(sections)) {
        if (key === 'gcse') {
          const subjects = ['maths', 'english', 'science']
          subjects.forEach(subject => {
            if (!utils.hasCompletedSection(application.gcse[subject])) {
              pageObject.errorList.push({
                text: value[subject],
                href: `#missing-gcse-${subject}`
              })
            }
          })
        } else {
          if (!utils.hasCompletedSection(application[key])) {
            pageObject.errorList.push({
              text: value,
              href: `#missing-${key}`
            })
          }
        }
      }
    }

    pageObject.closed = req.query.closed

    pageObject.applicationPath = `/application/${applicationId}`

    res.render('application/review', pageObject)
  })

  router.post('/application/:applicationId/review', (req, res) => {
    // If updating job/role, ensure dates are saved using ISO 8601
    const id = req.query.update
    const application = utils.applicationData(req)
    const referer = req.get('referer')

    if (id && referer.includes('work-history')) {
      utils.saveIsoDate(req, application['work-history'], id)
    }

    if (id && referer.includes('school-experience')) {
      utils.saveIsoDate(req, application['school-experience'], id)
    }

    res.render('application/review')
  })

  router.post('/application/:applicationId/review-complete', (req, res) => {
    const { applicationId } = req.params
    const completedApplication = utils.hasCompletedApplication(req)

    if (completedApplication) {
      res.redirect(`/application/${applicationId}/equality-monitoring`)
    } else {
      req.flash('success', 'submitted-incompleted-application')
      res.redirect(`/application/${applicationId}/review`)
    }
  })
}
