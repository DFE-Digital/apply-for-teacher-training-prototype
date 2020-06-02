const journeys = require('./../../utils/journeys')
const utils = require('./../../utils')

const degreeData = (req) => {
  const applicationData = utils.applicationData(req)
  if (applicationData.degree[req.params.id]) {
    return applicationData.degree[req.params.id]
  }

  return false
}

const degreePaths = (req) => {
  const applicationId = req.params.applicationId
  const data = degreeData(req)
  const international = data.provenance && data.provenance === 'international'
  const basePath = `/application/${applicationId}/degree/${req.params.id}`
  const referrer = req.query.referrer

  var paths = [
    basePath,
    `${basePath}/subject`,
    `${basePath}/institution`,
    ...(international ? [`${basePath}/naric`] : [`${basePath}/grade`]),
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
    res.render('application/degree/review')
  })

  // Render first page
  router.get('/application/:applicationId/degree/:id', (req, res) => {
    const completedDegree = degreeData(req).grade && degreeData(req)['year-start']

    const id = req.params.id
    const referrer = req.query.referrer
    const nextPath = `/application/${req.params.applicationId}/degree/${id}/subject?${utils.queryString(req)}`
    // If completed this section, return to referrer, else next question
    const formaction = completedDegree ? referrer : nextPath

    res.render('application/degree/index', {
      formaction,
      id,
      referrer
    })
  })

  // Render NARIC/grade/year pages
  router.all('/application/:applicationId/degree/:id/:template(naric|subject|institution|grade|year)', (req, res) => {
    const completedDegree = degreeData(req).grade && degreeData(req)['year-start']

    const id = req.params.id
    const referrer = req.query.referrer
    const template = req.params.template
    const paths = degreePaths(req)
    const formaction = completedDegree ? referrer : paths.next

    res.render(`application/degree/${template}`, {
      formaction,
      paths,
      id,
      referrer
    })
  })
}
