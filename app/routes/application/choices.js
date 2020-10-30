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
    `/application/${applicationId}/choices/${choiceId}/another`,
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
  const { data } = req.session
  const applicationData = data.applications[req.params.applicationId]
  const { choiceId } = req.params

  if (typeof applicationData.choices === 'undefined') {
    applicationData.choices = {}
  }

  if (typeof applicationData.temporaryChoices === 'undefined') {
    applicationData.temporaryChoices = {}
  }

  const existingChoice = applicationData.choices[choiceId] || {}
  const temporaryChoice = applicationData.temporaryChoices[choiceId] || {}

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

module.exports = router => {
  router.all('/application/:applicationId/choices/add', (req, res) => {
    const { applicationId } = req.params
    const choiceId = utils.generateRandomString()
    const data = req.session.data

    if (typeof data.applications[applicationId].temporaryChoices === 'undefined') {
      data.applications[applicationId].temporaryChoices = {}
    }

    data.applications[applicationId].temporaryChoices[choiceId] = {
      started: true
    }

    // Already made one choice, second choice shouldn't be in welcome flow
    if (data.applications[applicationId].choices && Object.entries(data.applications[applicationId].choices).length > 0) {
      req.session.data.applications[applicationId].welcomeFlow = false
    }

    res.redirect(`/application/${applicationId}/choices/${choiceId}/found`)
  })

  router.all('/application/:applicationId/choices/:choiceId/create', (req, res) => {
    const applicationData = req.session.data.applications[req.params.applicationId]
    const { choiceId } = req.params
    const paths = pickPaths(req)

    applicationData.choices[choiceId] = {
      providerCode: providerCode(req),
      courseCode: courseCode(req),
      locationName: locationName(req),
      locationAddress: locationAddress(req),
      singleLocationCourse: singleLocationCourse(req)
    }

    delete req.session.data.course_from_find
    delete applicationData.temporaryChoices

    res.redirect(req.params.referrer || paths.next)
  })

  router.all('/application/:applicationId/choices/:choiceId/another', (req, res) => {
    if (req.body['add-another-course'] === 'yes') {
      return res.redirect(`/application/${req.params.applicationId}/choices/add`)
    }

    const applicationData = req.session.data.applications[req.params.applicationId]
    const count = Object.keys(applicationData.choices).length
    const paths = pickPaths(req)

    if (count === 3 || applicationData.apply2 || req.body['add-another-course'] === 'no') {
      res.redirect(req.params.referrer || paths.next)
    } else {
      res.render('application/choices/another', {
        paths: paths
      })
    }
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
        l.label = { classes: 'govuk-label--s' }
        return l
      })

      res.render('application/choices/location', {
        locationOptions,
        paths: paths
      })
    }
  })

  router.post('/application/:applicationId/choices/:choiceId/found', (req, res) => {
    const { data } = req.session
    const { applicationId } = req.params
    const applicationData = data.applications[applicationId]
    const { choiceId } = req.params
    const temporaryChoice = applicationData.temporaryChoices[choiceId]

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

  router.all('/application/:applicationId/choices/:choiceId/:view', (req, res) => {
    res.render(`application/choices/${req.params.view}`, {
      paths: pickPaths(req),
      found: temporaryChoice.found
    })
  })
}
