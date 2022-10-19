const journeys = require('../../utils/journeys')
const providers = require('../../data/providers')
const utils = require('../../utils')

const pickPaths = (req) => {
  const applicationId = req.params.applicationId
  const choiceId = req.params.choiceId

  const paths = [
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
  const { applicationId } = req.params
  const { choiceId } = req.params

  const paths = [
    `/application/${applicationId}`,
    `/application/${applicationId}/choices/${choiceId}/found`,
    `/application/${applicationId}/choices/${choiceId}/find`
  ]

  return journeys.nextAndBackPaths(paths, req)
}

const temporaryAndSavedChoices = (req) => {
  const application = utils.applicationData(req)
  const { choiceId } = req.params

  if (typeof application.choices === 'undefined') {
    application.choices = {}
  }

  if (typeof application.temporaryChoices === 'undefined') {
    application.temporaryChoices = {}
  }

  const existingChoice = application.choices[choiceId] || {}
  const temporaryChoice = application.temporaryChoices[choiceId] || {}

  return [existingChoice, temporaryChoice]
}

const temporaryChoice = (req) => {
  return temporaryAndSavedChoices(req)[1]
}

const providerCode = (req) => {
  const [existingChoice, temporaryChoice] = temporaryAndSavedChoices(req)
  return temporaryChoice.provider ? /\(([^)]+)\)$/.exec(temporaryChoice.provider)[1] : existingChoice.providerCode
}

const courseCode = (req) => {
  const [existingChoice, temporaryChoice] = temporaryAndSavedChoices(req)
  return temporaryChoice.course ? /\(([^)]+)\)$/.exec(temporaryChoice.course)[1] : existingChoice.courseCode
}

const locationName = (req) => {
  const [existingChoice, temporaryChoice] = temporaryAndSavedChoices(req)
  return temporaryChoice.location ? temporaryChoice.location : existingChoice.locationName
}

const locationAddress = (req) => {
  const locations = providers[providerCode(req)].courses[courseCode(req)].locations
  const location = locations.filter(l => { return l.name === locationName(req) })
  return location[0].address || ''
}

const singleLocationCourse = (req) => {
  const locations = providers[providerCode(req)].courses[courseCode(req)].locations
  return locations.length === 1
}

const randomDegreeRequirement = (seed) => {
  switch (Math.floor(Math.random(seed) * 5)) {
    case 0:
      return '21'
    case 1:
      return '22'
    case 2:
      return 'third'
    default:
      return 'degree'
  }
}

module.exports = router => {
  router.all('/application/:applicationId/choices/add', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)
    const choiceId = utils.generateRandomString()

    if (typeof application.temporaryChoices === 'undefined') {
      application.temporaryChoices = {}
    }

    application.temporaryChoices[choiceId] = {
      started: true
    }

    res.redirect(`/application/${applicationId}/choices/${choiceId}/found`)
  })

  router.all('/application/:applicationId/choices/:choiceId/create', (req, res) => {
    const application = utils.applicationData(req)
    const { applicationId, choiceId } = req.params

    const selectedCourseProviderCode = providerCode(req)
    const selectedCourseCode = courseCode(req)
    const courseSelected = providers[selectedCourseProviderCode].courses[selectedCourseCode]

    // Randomised for now, until this data is added to Find and the API
    const canSponsorVisa = (Math.random(choiceId) > 0.5)

    // Adding random degree class requirement
    const degreeRequired = randomDegreeRequirement(choiceId)

    application.choices[choiceId] = {
      providerCode: selectedCourseProviderCode,
      courseCode: selectedCourseCode,
      locationName: locationName(req),
      locationAddress: locationAddress(req),
      singleLocationCourse: singleLocationCourse(req),
      length: '1 year',
      type: courseSelected.description,
      starts: '2022-09',
      canSponsorVisa: canSponsorVisa,
      degreeRequired: degreeRequired
    }

    delete req.session.data.course_from_find
    delete application.temporaryChoices

    res.redirect(`/application/${applicationId}/choices`)
  })

  router.all('/application/:applicationId/choices/:choiceId/location', (req, res) => {
    const paths = pickPaths(req)
    const locations = providers[providerCode(req)].courses[courseCode(req)].locations

    if (locations.length === 1) {
      temporaryChoice(req).location = locations[0].name
      res.redirect(paths.next)
    } else {
      const locationOptions = locations.map(function (loc) {
        const l = {}
        l.text = loc.name
        l.hint = { text: loc.address }
        l.label = { classes: 'z' }
        return l
      })

      res.render('application/choices/location', {
        locationOptions,
        paths: paths
      })
    }
  })

  router.post('/application/:applicationId/choices/:choiceId/found', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)
    const { choiceId } = req.params
    const { data } = req.session
    const temporaryChoice = application.temporaryChoices[choiceId]

    if (temporaryChoice.fromFind && temporaryChoice.fromFind === 'yes') {
      const provider = providers[data.course_from_find.providerCode]
      temporaryChoice.provider = provider.name_and_code
      temporaryChoice.course = provider.courses[data.course_from_find.courseCode].name_and_code
      res.redirect(`/application/${applicationId}/choices/${choiceId}/location`)
    } else if (temporaryChoice.fromFind && temporaryChoice.fromFind === 'no') {
      delete data.course_from_find
      delete temporaryChoice.fromFind
      res.redirect(`/application/${applicationId}/choices/${choiceId}/found`)
    } else {
      const found = temporaryChoice.found
      const paths = (found && found === 'know')
        ? pickPaths(req)
        : findPaths(req)

      res.redirect(paths.next)
    }
  })

  router.get('/application/:applicationId/choices/:id/delete', (req, res) => {
    const { applicationId, id } = req.params
    res.render('application/choices/delete', {
      applicationId,
      id
    })
  })

  router.post('/application/:applicationId/choices/:id/delete', (req, res) => {
    const { applicationId, id } = req.params
    const application = utils.applicationData(req)

    delete application.choices[id]
    res.redirect(`/application/${applicationId}/choices`)
  })

  router.all('/application/:applicationId/choices/:choiceId/:view', (req, res) => {
    res.render(`application/choices/${req.params.view}`, {
      paths: pickPaths(req),
      found: temporaryChoice.found
    })
  })

  router.get('/application/:applicationId/choices', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)

    if (utils.toArray(application.choices).length === 0) {
      res.redirect(`/application/${applicationId}/choices/add`)
    } else {
      res.render('application/choices/index')
    }
  })
}
