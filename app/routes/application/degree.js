const journeys = require('./../../utils/journeys')
const utils = require('./../../utils')

function degreeData (req) {
  const applicationData = utils.applicationData(req)
  return applicationData.degree[req.params.degreeId]
}

function degreePaths (req) {
  const applicationId = req.params.applicationId
  const data = degreeData(req)
  const international = data.provenance && data.provenance === 'international'
  const basePath = `/application/${applicationId}/degree/${req.params.degreeId}`
  const referrer = req.query.referrer

  var paths = [
    basePath,
    ...(international ? [`${basePath}/naric`] : []),
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
  // Generate new degreeID and redirect to that degree
  router.get('/application/:applicationId/degree/add', (req, res) => {
    const degreeId = utils.generateRandomString()
    res.redirect(`/application/${req.params.applicationId}/degree/${degreeId}?${utils.queryString(req)}`)
  })

  // Render degree review page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/degree/review', (req, res) => {
    res.render('application/degree/review')
  })

  // Render first page
  router.get('/application/:applicationId/degree/:degreeId', (req, res) => {
    const degreeId = req.params.degreeId
    const referrer = req.query.referrer

    res.render('application/degree/index', {
      formaction: `/application/${req.params.applicationId}/degree/${degreeId}/answer?${utils.queryString(req)}`,
      degreeId,
      referrer
    })
  })

  // Degree provenance answer branching
  router.post('/application/:applicationId/degree/:degreeId/answer', (req, res) => {
    const data = req.session.data
    const degreeId = req.params.degreeId
    const applicationId = req.params.applicationId
    const provenance = data.applications[applicationId]['degree'][degreeId]['provenance']

    let path
    if (provenance === 'domestic') {
      path = `${degreeId}/grade`
    } else {
      path = `${degreeId}/naric`
    }

    res.redirect(`/application/${applicationId}/degree/${path}?${utils.queryString(req)}`)
  })

  // Render NARIC/grade/year pages
  router.all('/application/:applicationId/degree/:degreeId/:template(naric|grade|year)', (req, res) => {
    const degreeId = req.params.degreeId
    const referrer = req.query.referrer
    const template = req.params.template
    const paths = degreePaths(req)

    res.render(`application/degree/${template}`, {
      formaction: paths.next,
      paths,
      degreeId,
      referrer
    })
  })
}
