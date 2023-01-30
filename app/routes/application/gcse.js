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
  const data = req.session.data
  if (data.gcse && data.gcse[req.params.id]) {
    return data.gcse[req.params.id]
  }

  return false
}

const isInternational = (req) => gcseData(req).type === 'Non-UK qualification'
const isMissing = (req) => gcseData(req).type === 'not-yet'
const isFailGrade = (req) => {
  const grade = enteredGrade(gcseData(req))
  return gcseData(req).type === 'GCSE' && !passGrades.includes(grade)
}

const gcsePaths = (req) => {
  const { id } = req.params
  const basePath = `/application/gcse/${req.params.id}`
  const referrer = req.query.referrer

  const paths = [
    basePath,
    ...(isInternational(req) ? [`${basePath}/country`] : []),
    ...(isInternational(req) ? [`${basePath}/enic`] : []),
    `${basePath}/grade`,
    `${basePath}/year`,
    ...(isFailGrade(req) ? [`${basePath}/no-pass-grade`] : []),
    ...(referrer ? [referrer] : [`/application/gcse/${id}/review`])
  ]

  return journeys.nextAndBackPaths(paths, req)
}

/**
 * Application: GCSE or equivalent routes
 */
module.exports = router => {

  // Render GCSE review page
  // Note: Must be defined before next route declaration
  router.get('/application/gcse/:id/review', (req, res) => {
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
  router.get('/application/gcse/:id', (req, res) => {

    const { id } = req.params

    res.render('application/gcse/index', {
      id
    })
  })

  // Render 'no qualification yet' page
  router.get('/application/gcse/:id/not-yet', (req, res) => {
    const { id } = req.params

    res.render('application/gcse/not-yet', {
      id
    })
  })

  // Routing for 'Are you currently studying for an {subject} qualification?'
  router.post('/application/gcse/:id/not-yet', (req, res) => {
    const { id } = req.params

    const answer = utils.applicationData(req).gcse[id].currentlyStudying
    let path
    if (answer === 'yes') {
      path = `/application/gcse/${id}/review`
    } else {
      path = `/application/gcse/${id}/equivalency`
    }

    res.redirect(path)
  })

  // Routing for 'Are you currently retaking your {subject} qualification?'
  router.post('/application/gcse/:id/currently-retaking', (req, res) => {
    const { id } = req.params

    const answer = req.session.data.gcse[id].currentlyRetaking
    let path
    if (answer === 'yes') {
      path = `/application/gcse/${id}/review`
    } else {
      path = `/application/gcse/${id}/equivalency`
    }

    res.redirect(path)
  })

  // Render equivalency page
  router.get('/application/gcse/:id/equivalency', (req, res) => {
    const { id } = req.params

    res.render('application/gcse/equivalency', {
      id
    })
  })

  // GCSE type answer branching
  router.post('/application/gcse/:id/answer', (req, res) => {
    const { id } = req.params
    // const { referrer } = req.query

    // let path
    // if (isInternational(req)) {
    //   path = `/application/gcse/${id}/country`
    // } else if (isMissing(req)) {
    //   path = `/application/gcse/${id}/not-yet`
    // } else {
      path = `/application/gcse/${id}/grade`
    // }

    res.redirect(path)
  })

  // Render UK ENIC/grade/year pages
  router.all('/application/gcse/:id/:view(subject|country|grade|no-pass-grade|enic|year)', (req, res) => {
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
