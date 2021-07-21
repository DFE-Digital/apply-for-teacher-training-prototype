const journeys = require('./../../utils/journeys')
const utils = require('./../../utils')

const passGrades = [
  'A*', 'A', 'B', 'C',
  'A*A*', 'A*A', 'AA', 'AB', 'BB', 'BC', 'CC', 'CD',
  '9', '8', '7', '6', '5', '4',
  '99', '98', '88', '87', '77', '76', '66', '65', '55', '54', '44', '43'
]

const enteredGrade = (gcse) => {
  return gcse.gradeSingle || gcse.gradeDouble ||
  gcse.gradeBiology || gcse.gradeChemistry || gcse.gradePhysics ||
  gcse.gradeEnglish || gcse.gradeLanguage || gcse.gradeLiterature || gcse.gradeStudies || gcse.gradeOther
}

const gcseData = (req) => {
  const application = utils.applicationData(req)
  if (application.gcse[req.params.id]) {
    return application.gcse[req.params.id]
  }

  return false
}

const hasGcse = (req) => gcseData(req).hasGcse === 'Yes'

const isInternational = (req) => gcseData(req).type === 'Non-UK qualification'
const isMissing = (req) => gcseData(req).type === 'not-yet'
const isFailGrade = (req) => {
  const grade = enteredGrade(gcseData(req))
  return gcseData(req).type === 'GCSE' && !passGrades.includes(grade)
}

const gcsePaths = (req) => {
  const { applicationId, id } = req.params
  const basePath = `/application/${applicationId}/gcse/${req.params.id}`
  const referrer = req.query.referrer

  const paths = [
    basePath,
    ...(isInternational(req) ? [`${basePath}/country`] : []),
    ...(isInternational(req) ? [`${basePath}/enic`] : []),
    `${basePath}/grade`,
    `${basePath}/year`,
    ...(isFailGrade(req) ? [`${basePath}/no-pass-grade`] : []),
    ...(referrer ? [referrer] : [`/application/${applicationId}/gcse/${id}/review`])
  ]

  return journeys.nextAndBackPaths(paths, req)
}

/**
 * Application: GCSE or equivalent routes
 */
module.exports = router => {
  // Generate new ID and redirect to that degree
  router.get('/application/:applicationId/gcse/add', (req, res) => {
    const id = utils.generateRandomString()
    res.redirect(`/application/${req.params.applicationId}/gcse/${id}/add?${utils.queryString(req)}`)
  })

  // Render GCSE review page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/gcse/:id/review', (req, res) => {
    const gcse = gcseData(req)
    const grade = enteredGrade(gcse)
    const hasElligibleGrade = passGrades.includes(grade)

    res.render('application/gcse/review', {
      grade,
      hasElligibleGrade,
      id: req.params.id
    })
  })

  // Render first page
  router.get('/application/:applicationId/gcse/:id', (req, res) => {
    const completedGcse = gcseData(req).grade && gcseData(req).year

    const { id } = req.params
    const { referrer } = req.query
    const formaction = `/application/${req.params.applicationId}/gcse/${id}/gcse-or-not`

    res.render('application/gcse/gcse-or-not', {
      formaction,
      id,
      referrer
    })
  })

  // Render 'no qualification yet' page
  router.get('/application/:applicationId/gcse/:id/not-yet', (req, res) => {
    const { id } = req.params

    res.render('application/gcse/not-yet', {
      id
    })
  })

  // Routing for 'Are you currently studying for an {subject} qualification?'
  router.post('/application/:applicationId/gcse/:id/not-yet', (req, res) => {
    const { applicationId, id } = req.params

    const answer = utils.applicationData(req).gcse[id].currentlyStudying
    let path
    if (answer == 'yes') {
      path = `/application/${applicationId}/gcse/${id}/review`
    } else {
      path = `/application/${applicationId}/gcse/${id}/equivalency`
    }

    res.redirect(path)
  })


  // Render equivalency page
  router.get('/application/:applicationId/gcse/:id/equivalency', (req, res) => {
    const { applicationId, id } = req.params

    res.render('application/gcse/equivalency', {
      id
    })
  })


  // GCSE or not branching
  router.post('/application/:applicationId/gcse/:id/gcse-or-not', (req, res) => {

    const { applicationId, id } = req.params
    const application = utils.applicationData(req)
    const { referrer } = req.query

    let path
    if (hasGcse(req)) {
      application.gcse[id].type = 'GCSE'
      path = `/application/${applicationId}/gcse/${id}/grade`
    } else {
      path = `/application/${applicationId}/gcse/${id}/type`
    }

    res.redirect(`${path}?${utils.queryString(req)}`)
  })

  // GCSE type answer branching
  router.post('/application/:applicationId/gcse/:id/answer', (req, res) => {

    const { applicationId, id } = req.params
    const { referrer } = req.query

    let path
    if (isInternational(req)) {
      path = `/application/${applicationId}/gcse/${id}/country`
    } else if (isMissing(req)) {
      path = `/application/${applicationId}/gcse/${id}/not-yet`
      // path = referrer || `/application/${applicationId}/gcse/${id}/review`
    } else {
      path = `/application/${applicationId}/gcse/${id}/grade`
    }

    res.redirect(`${path}?${utils.queryString(req)}`)
  })

  // Render 'another type of [subject] qualification page'
  router.all('/application/:applicationId/gcse/:id/type', (req, res) => {
    const completedGcse = gcseData(req).grade && gcseData(req).year

    const { id, view } = req.params
    const { referrer } = req.query
    const paths = gcsePaths(req)
    const formaction = `/application/${req.params.applicationId}/gcse/${id}/answer`

    res.render(`application/gcse/type`, {
      formaction,
      paths,
      id,
      referrer
    })
  })

  // Render UK ENIC/grade/year pages
  router.all('/application/:applicationId/gcse/:id/:view(subject|country|grade|no-pass-grade|enic|year)', (req, res) => {
    const completedGcse = gcseData(req).grade && gcseData(req).year

    const { id, view } = req.params
    const { referrer } = req.query
    const paths = gcsePaths(req)
    const formaction = completedGcse ? referrer : paths.next

    res.render(`application/gcse/${view}`, {
      formaction,
      paths,
      id,
      referrer
    })
  })
}
