const journeys = require('./../../utils/journeys')
const utils = require('./../../utils')

const degreeData = (req) => {
  const application = utils.applicationData(req)
  if (application.degree[req.params.id]) {
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
    `${basePath}/subject`,
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
    res.redirect(`/application/${req.params.applicationId}/degree/${id}?${utils.queryString(req)}`)
  })

  // Render degree review page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/degree/review', (req, res) => {
    const { degree } = utils.applicationData(req)
    const degreeArray = utils.toArray(degree)

    const enteredGrade = degreeArray[0].grade

    const passGrades = [
      'First-class honours',
      'Upper second-class honours (2:1)',
      'Lower second-class honours (2:2)'
    ]

    const hasElligibleGrade = passGrades.includes(enteredGrade)

    res.render('application/degree/review', {
      enteredGrade,
      hasElligibleGrade
    })
  })

  // Render first page
  router.get('/application/:applicationId/degree/:id', (req, res) => {
    const completedDegree = degreeData(req).grade && degreeData(req).yearStart

    const { id } = req.params
    const { referrer } = req.query
    const nextPath = `/application/${req.params.applicationId}/degree/${id}/subject?${utils.queryString(req)}`
    // If completed this section, return to referrer, else next question
    const formaction = completedDegree ? referrer : nextPath

    res.render('application/degree/index', {
      formaction,
      id,
      referrer
    })
  })

  // Render UK ENIC/grade/year pages
  router.all('/application/:applicationId/degree/:id/:view(subject|institution|completed|grade|enic|year)', (req, res) => {
    const completedDegree = degreeData(req).grade && degreeData(req).yearStart

    const { id, view } = req.params
    const { referrer } = req.query
    const paths = degreePaths(req)
    const formaction = completedDegree ? referrer : paths.next

    res.render(`application/degree/${view}`, {
      formaction,
      paths,
      id,
      referrer
    })
  })
}
