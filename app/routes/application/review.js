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
    const { choices } = applicationData
    const workHistory = applicationData['work-history']
    const schoolExperience = applicationData['school-experience']
    const scienceGcse = applicationData.gcse.science

    if (successFlash[0] === 'submitted-incompleted-application') {
      pageObject.errorList = []

      if (Object.keys(choices).length === 0) {
        pageObject.errorList.push({
          text: 'Course choices not marked as completed',
          href: '#missing-course-choices'
        })
      }

      if (Object.keys(schoolExperience).length === 0) {
        pageObject.errorList.push({
          text: 'Volunteering with children and young people is not marked as completed',
          href: '#missing-school-experience'
        })
      }

      if (Object.keys(scienceGcse).length === 0) {
        pageObject.errorList.push({
          text: 'Science GCSE or equivalent not entered',
          href: '#missing-science-gcse'
        })
      }

      if (Object.keys(workHistory).length === 0) {
        pageObject.errorList.push({
          text: 'Work history is not marked as completed',
          href: '#missing-work-history'
        })
      }
    }

    res.render('application/review', pageObject)
  })

  router.post('/application/:applicationId/review', (req, res) => {
    // If updating jobs or roles, ensure dates are saved using ISO 8601 format
    const id = req.query.update
    const applicationData = utils.applicationData(req)

    // Application sections
    const { choices } = applicationData
    const schoolExperience = applicationData['school-experience']
    const scienceGcse = applicationData.gcse.science
    const workHistory = applicationData['work-history']

    // User tried to submit incomplete application
    // just checking choices are empty for now
    // to make real need to check over every section
    if (
      Object.keys(choices).length === 0 ||
      Object.keys(schoolExperience).length === 0 ||
      Object.keys(scienceGcse).length === 0 ||
      Object.keys(workHistory).length === 0
    ) {
      req.flash('success', 'submitted-incompleted-application')
      res.redirect(`/application/${req.params.applicationId}/review`)
    } else {
      const referer = req.get('referer')

      if (id && referer.includes('work-history')) {
        utils.saveIsoDate(req, workHistory, id)
      }

      if (id && referer.includes('school-experience')) {
        utils.saveIsoDate(req, schoolExperience, id)
      }

      res.render('application/review')
    }
  })
}
