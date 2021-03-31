const journeys = require('./../../utils/journeys')
const utils = require('./../../utils')

const gcseData = (req) => {
  const application = utils.applicationData(req)
  if (application.gcse[req.params.id]) {
    return application.gcse[req.params.id]
  }

  return false
}

const isInternational = (req) => gcseData(req).type === 'Non-UK qualification'
const isMissing = (req) => gcseData(req).type === 'I don’t have this qualification yet'

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

    const enteredGrade =
      gcse.gradeSingle || gcse.gradeDouble ||
      gcse.gradeBiology || gcse.gradeChemistry || gcse.gradePhysics ||
      gcse.gradeEnglish || gcse.gradeLanguage || gcse.gradeLiterature || gcse.gradeStudies || gcse.gradeOther

    const passGrades = [
      'A*', 'A', 'B', 'C',
      'A*A*', 'A*A', 'AA', 'AB', 'BB', 'BC', 'CC',
      '1', '2', '3', '4',
      '11', '12', '22', '23', '33', '34', '44'
    ]

    const hasElligibleGrade = passGrades.includes(enteredGrade)

    res.render('application/gcse/review', {
      enteredGrade,
      hasElligibleGrade,
      id: req.params.id
    })
  })

  // Render first page
  router.get('/application/:applicationId/gcse/:id', (req, res) => {
    const completedGcse = gcseData(req).grade && gcseData(req).year

    const { id } = req.params
    const { referrer } = req.query
    const nextPath = `/application/${req.params.applicationId}/gcse/${id}/answer?${utils.queryString(req)}`
    // If completed this section, return to referrer, else next question
    const formaction = completedGcse ? referrer : nextPath

    res.render('application/gcse/index', {
      formaction,
      id,
      referrer
    })
  })

  // GCSE type answer branching
  router.post('/application/:applicationId/gcse/:id/answer', (req, res) => {
    const { applicationId, id } = req.params
    const { referrer } = req.query

    let path
    if (isInternational(req)) {
      path = `/application/${applicationId}/gcse/${id}/country`
    } else if (isMissing(req)) {
      path = referrer || `/application/${applicationId}/gcse/${id}/review`
    } else {
      path = `/application/${applicationId}/gcse/${id}/grade`
    }

    res.redirect(`${path}?${utils.queryString(req)}`)
  })

  // Render UK ENIC/grade/year pages
  router.all('/application/:applicationId/gcse/:id/:view(subject|country|grade|enic|year)', (req, res) => {
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
