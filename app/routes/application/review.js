const utils = require('./../../utils')

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
        references: 'You need 2 references before you can submit your application',
        candidate: 'Personal information not entered',
        'contact-information': 'Contact information not entered',
        gcse: {
          maths: 'Maths GCSE or equivalent not entered',
          english: 'English GCSE or equivalent not entered',
          science: 'Science GCSE or equivalent not entered'
        },
        'other-qualifications': 'A levels and other qualifications not marked as complete',
        degree: 'Degree section not marked as completed',
        'work-history': 'Work history not entered',
        'unpaid-experience': 'Unpaid experience not entered',
        'personal-statement': 'Personal statement not entered',
        'subject-knowledge': 'Subject knowledge not entered',
        'additional-support': 'Any disability or other needs not entered',
        'interview-needs': 'Interview needs not entered',
        safeguarding: 'Safeguarding information not entered'
      }

      for (const [key, value] of Object.entries(sections)) {
        if (key === 'gcse') {
          const subjects = ['maths', 'english', 'science']
          subjects.forEach(subject => {
            if (!utils.hasCompletedSection(application.gcse[subject])) {
              pageObject.errorList.push({
                text: value[subject],
                href: `#gcse-${subject}`
              })
            }
          })
        } else {
          if (!utils.hasCompletedSection(application[key])) {
            pageObject.errorList.push({
              text: value,
              href: `#${key}`
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
      utils.saveIsoDate(req, application.workHistory, id)
    }

    if (id && referer.includes('unpaid-experience')) {
      utils.saveIsoDate(req, application.unpaidExperience, id)
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
