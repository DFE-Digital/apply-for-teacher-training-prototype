const journeys = require('./../../utils/journeys')
const utils = require('./../../utils')
const allDegreeTypes = require('./../../data/degree-types.js').map(degreeType => {
  if (degreeType.abbreviation) {
    degreeType.name = (degreeType.name + " (" + degreeType.abbreviation + ")")
    degreeType.synonyms.push(degreeType.abbreviation)
  }
  return degreeType
})
const allDegreeLevels = require('./../../data/degree-levels.js')
const allDegreeSubjects = require('./../../data/degree-subjects.js').map(subject => {
  subject.name = utils.capitaliseFirstLetter(subject.name)
  return subject
})
const allDegreeInstitutions = require('./../../data/degree-institutions.js').map(degreeInstitution => {
  // Merge the synonyms into a single list
  degreeInstitution.synonyms = degreeInstitution.suggestion_synonyms.concat(degreeInstitution.match_synonyms)
  return degreeInstitution
})


const degreeData = (req) => {
  const application = utils.applicationData(req)
  if (application.degree && application.degree[req.params.id]) {
    return application.degree[req.params.id]
  }

  return false
}

const degreePaths = (req) => {
  const { applicationId } = req.params
  const data = degreeData(req)
  const international = data.provenance && data.provenance === 'international'
  const basePath = `/application/${applicationId}/degree/${req.params.id}`
  const { referrer } = req.query

  const paths = [
    basePath,
    `${basePath}/level`,
    `${basePath}/subject`,
    `${basePath}/type`,
    `${basePath}/institution`,
    ...(international ? [`${basePath}/enic`] : []),
    `${basePath}/completed`,
    `${basePath}/grade`,
    `${basePath}/year`,
    ...(referrer ? [referrer] : [`/application/${applicationId}/degree/review`])
  ]

  return journeys.nextAndBackPaths(paths, req)
}

/**
 * Application: Degree routes
 */
module.exports = router => {
  // Generate new id and redirect to that degree
  router.get('/application/:applicationId/degree/add', (req, res) => {
    const id = utils.generateRandomString()
    res.redirect(`/application/${req.params.applicationId}/degree/${id}/country?${utils.queryString(req)}`)
  })

  // Set the country
  router.post('/application/:applicationId/degree/:id/country', (req, res) => {
    const { applicationId, id } = req.params

    const provenance = req.body.applications[applicationId].degree[id].provenance

    if (provenance == "international") {
      // Skip to subject
      res.redirect(`/application/${applicationId}/degree/${id}/subject`)
    } else {
      res.redirect(`/application/${applicationId}/degree/${id}/level`)
    }

  })

  // Set the degree level (Bachelors, Masters, etc)
  router.post('/application/:applicationId/degree/:id/level', (req, res) => {
    const { applicationId, id } = req.params
    res.redirect(`/application/${applicationId}/degree/${id}/subject`)
  })

  // Set the degree subject
  router.post('/application/:applicationId/degree/:id/subject', (req, res) => {
    const { applicationId, id } = req.params

    const degree = utils.applicationData(req).degree[id]

    if (degree.level == 'other') {
      // Skip type, as that’s already given as part of 'level'
      res.redirect(`/application/${applicationId}/degree/${id}/institution`)
    } else {
      res.redirect(`/application/${applicationId}/degree/${id}/type`)
    }
  })

  // Set the degree type
  router.post('/application/:applicationId/degree/:id/type', (req, res) => {
    const { applicationId, id } = req.params
    res.redirect(`/application/${applicationId}/degree/${id}/institution`)
  })

  // Set the degree institution
  router.post('/application/:applicationId/degree/:id/institution', (req, res) => {
    const { applicationId, id } = req.params
    res.redirect(`/application/${applicationId}/degree/${id}/completed`)
  })

  // Set the degree completed status
  router.post('/application/:applicationId/degree/:id/completed', (req, res) => {
    const { applicationId, id } = req.params
    res.redirect(`/application/${applicationId}/degree/${id}/grade`)
  })

  // Set the degree grade
  router.post('/application/:applicationId/degree/:id/grade', (req, res) => {
    const { applicationId, id } = req.params
    res.redirect(`/application/${applicationId}/degree/${id}/start-year`)
  })

  // Set the degree start year
  router.post('/application/:applicationId/degree/:id/start-year', (req, res) => {
    const { applicationId, id } = req.params
    res.redirect(`/application/${applicationId}/degree/${id}/graduation-year`)
  })

  // Set the degree graduation year
  router.post('/application/:applicationId/degree/:id/graduation-year', (req, res) => {
    const { applicationId, id } = req.params

    if (degreeData(req).provenance == "international" && degreeData(req).completed == "Yes") {
      res.redirect(`/application/${applicationId}/degree/${id}/enic`)
    } else {
      res.redirect(`/application/${applicationId}/degree/review`)
    }
  })

  // Set the ENIC details
  router.post('/application/:applicationId/degree/:id/enic', (req, res) => {
    const { applicationId, id } = req.params
    res.redirect(`/application/${applicationId}/degree/review`)
  })

  // Render degree review page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/degree/review', (req, res) => {
    res.render('application/degree/review', {
    })
  })

  // Render the country question page
  router.get('/application/:applicationId/degree/:id/country', (req, res) => {
    const { id  } = req.params

    res.render('application/degree/country', {
      id
    })
  })

  // Render degree type page
  router.get('/application/:applicationId/degree/:id/type', (req, res) => {
    const completedDegree = degreeData(req).grade && degreeData(req).yearStart

    const { id, view } = req.params
    const { referrer } = req.query
    const paths = degreePaths(req)
    const degreeLevelNumber = allDegreeLevels.find(level => level.name == utils.applicationData(req).degree[id].level)?.level

    let degreeTypes = []

    if (degreeLevelNumber) {
      degreeTypes = allDegreeTypes.filter(degree => degree.level == degreeLevelNumber)
    } else {
      degreeTypes = allDegreeTypes
    }

    res.render(`application/degree/type`, {
      paths,
      id,
      referrer,
      degreeLevelNumber,
      degreeTypes
    })
  })

  // Render UK ENIC/grade/year pages
  router.get('/application/:applicationId/degree/:id/:view(subject|institution|completed|grade|enic|start-year|graduation-year|level)', (req, res) => {
    const completedDegree = degreeData(req).grade && degreeData(req).yearStart

    const { id, view } = req.params
    const { referrer } = req.query
    const paths = degreePaths(req)

    const formaction = completedDegree ? referrer : paths.next

    res.render(`application/degree/${view}`, {
      formaction,
      paths,
      id,
      referrer,
      allDegreeSubjects,
      allDegreeInstitutions
    })
  })
}
