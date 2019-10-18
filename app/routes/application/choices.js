const journeys = require('../../utils/journeys')
const utils = require('../../utils')

const pickPaths = (req) => {
  const applicationId = req.params.applicationId
  const choiceId = req.params.choiceId

  var paths = [
    `/application/${applicationId}/choices`,
    `/application/${applicationId}/choices/${choiceId}/found`,
    `/application/${applicationId}/choices/${choiceId}/provider`,
    `/application/${applicationId}/choices/${choiceId}/pick`,
    `/application/${applicationId}/choices/${choiceId}/location`,
    `/application/${applicationId}/choices/${choiceId}/create`,
    `/application/${applicationId}/choices`
  ]

  return journeys.nextAndBackPaths(paths, req)
}

const findPaths = (req) => {
  const applicationId = req.params.applicationId
  const choiceId = req.params.choiceId

  var paths = [
    `/application/${applicationId}`,
    `/application/${applicationId}/choices/${choiceId}/found`,
    `/application/${applicationId}/choices/${choiceId}/find`
  ]

  return journeys.nextAndBackPaths(paths, req)
}

module.exports = router => {
  router.all('/application/:applicationId/choices/add', (req, res) => {
    const applicationId = req.params.applicationId
    const choiceId = utils.generateRandomString()
    var data = req.session.data

    if (typeof data.applications[applicationId].temporaryChoices === 'undefined') {
      data.applications[applicationId].temporaryChoices = {}
    }

    data.applications[applicationId].temporaryChoices[choiceId] = {
      started: true
    }

    res.redirect(`/application/${applicationId}/choices/${choiceId}/found`)
  })

  router.post('/application/:applicationId/choices/:choiceId/create', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const choiceId = req.params.choiceId
    const paths = pickPaths(req)
    const regExp = /\(([^)]+)\)$/
    const referrer = req.params.referrer

    if (typeof applicationData.choices === 'undefined') {
      applicationData.choices = {}
    }

    let existingChoice = applicationData.choices[choiceId]
    let choice = applicationData.temporaryChoices[choiceId]
    let providerCode = choice.provider ? regExp.exec(choice.provider)[1] : existingChoice.providerCode
    let courseCode = choice.course ? regExp.exec(choice.course)[1] : existingChoice.courseCode
    let locationName = choice.location ? choice.location : existingChoice.locationName

    applicationData.choices[choiceId] = {
      providerCode,
      courseCode,
      locationName,
      locationAddress: 'Pavillion Way, Edgware HA8 9YR'
    }

    delete req.session.data.course_from_find
    delete applicationData.temporaryChoices

    res.redirect(referrer || paths.next)
  })

  router.post('/application/:applicationId/choices/:choiceId/pick', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const choiceId = req.params.choiceId
    const temporaryChoice = applicationData.temporaryChoices[choiceId]

    if (temporaryChoice.providerFromFind && temporaryChoice.providerFromFind != "another") {
      temporaryChoice.provider = temporaryChoice.providerFromFind
      delete temporaryChoice.providerFromFind
    }

    res.render(`application/choices/pick`, {
      paths: pickPaths(req)
    })
  })

  router.post('/application/:applicationId/choices/:choiceId/location', (req, res) => {
    const applicationId = req.params.applicationId
    const applicationData = req.session.data.applications[applicationId]
    const choiceId = req.params.choiceId
    const temporaryChoice = applicationData.temporaryChoices[choiceId]

    if (temporaryChoice.courseFromFind && temporaryChoice.courseFromFind != "another") {
      temporaryChoice.course = temporaryChoice.courseFromFind
      delete temporaryChoice.courseFromFind
    }

    res.render(`application/choices/location`, {
      paths: pickPaths(req)
    })
  })

  router.post('/application/:applicationId/choices/:choiceId/found', (req, res) => {
    const found = req.body.applications[req.params.applicationId].temporaryChoices[req.params.choiceId].found

    const paths = (found && found === 'know')
      ? pickPaths(req)
      : findPaths(req)

    res.redirect(paths.next)
  })

  router.all('/application/:applicationId/choices/:choiceId/:view', (req, res) => {
    res.render(`application/choices/${req.params.view}`, {
      paths: pickPaths(req)
    })
  })
}
