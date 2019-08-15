const journeys = require('../utils/journeys')
const utils = require('../utils')

const pickCoursePaths = (req) => {
  const applicationId = req.params.applicationId
  const courseId = req.params.courseId

  var paths = [
    `/application/${applicationId}`,
    `/application/${applicationId}/course/${courseId}/found`,
    `/application/${applicationId}/course/${courseId}/provider`,
    `/application/${applicationId}/course/${courseId}/pick`,
    `/application/${applicationId}/course/${courseId}/create`,
    `/application/${applicationId}`
  ]

  return journeys.nextAndBackPaths(paths, req)
}

const findCoursePaths = (req) => {
  const applicationId = req.params.applicationId
  const courseId = req.params.courseId

  var paths = [
    `/application/${applicationId}`,
    `/application/${applicationId}/course/${courseId}/found`,
    `/application/${applicationId}/course/${courseId}/find`
  ]

  return journeys.nextAndBackPaths(paths, req)
}

module.exports = router => {
  router.all('/application/:applicationId/course/add', (req, res) => {
    const applicationId = req.params.applicationId
    const courseId = utils.generateRandomString()
    var data = req.session.data

    if (typeof data.applications[applicationId]['temporaryCourses'] === 'undefined') {
      data.applications[applicationId]['temporaryCourses'] = {}
    }

    data.applications[applicationId].temporaryCourses[courseId] = { started: true }
    res.redirect(`/application/${applicationId}/course/${courseId}/found`)
  })

  router.post('/application/:applicationId/course/:courseId/create', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const courseId = req.params.courseId
    const temporaryCourse = applicationData['temporaryCourses'][courseId]
    const paths = pickCoursePaths(req)
    const regExp = /\(([^)]+)\)$/
    const providerCode = regExp.exec(temporaryCourse.provider)[1]
    const courseCode = regExp.exec(temporaryCourse.course)[1]

    if (typeof applicationData['courses'] === 'undefined') {
      applicationData['courses'] = {}
    }

    applicationData['courses'][courseId] = {
      providerCode,
      courseCode
    }

    delete applicationData['temporaryCourses']

    res.redirect(paths.next)
  })

  router.post('/application/:applicationId/course/:courseId/found', (req, res) => {
    const found = req.body.applications[req.params.applicationId]['temporaryCourses'][req.params.courseId].found
    const paths = (found && found === 'know')
      ? pickCoursePaths(req)
      : findCoursePaths(req)
    res.redirect(paths.next)
  })

  router.all('/application/:applicationId/course/:courseId/find', (req, res) => {
    res.render(`course/find`, {
      paths: findCoursePaths(req)
    })
  })

  router.all('/application/:applicationId/course/:courseId/:view', (req, res) => {
    res.render(`course/${req.params.view}`, {
      paths: pickCoursePaths(req)
    })
  })
}
