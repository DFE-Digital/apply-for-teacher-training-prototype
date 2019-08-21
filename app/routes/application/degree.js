const journeys = require('./../../utils/journeys')
const utils = require('./../../utils')

const degreeData = (req) => {
  const applicationData = utils.applicationData(req)
  return applicationData.degree[req.params.id]
}

const degreePaths = (req) => {
  const applicationId = req.params.applicationId
  const data = degreeData(req)
  const international = data.provenance && data.provenance === 'international'
  const basePath = `/application/${applicationId}/degree/${req.params.id}`
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
    const id = req.params.id
    const referrer = req.query.referrer

    res.render('application/degree/index', {
      formaction: referrer || `/application/${req.params.applicationId}/degree/${id}/answer?${utils.queryString(req)}`,
      id,
      referrer
    })
  })

  // Degree provenance answer branching
  router.post('/application/:applicationId/degree/:id/answer', (req, res) => {
    const data = req.session.data
    const id = req.params.id
    const applicationId = req.params.applicationId
    const provenance = data.applications[applicationId]['degree'][id]['provenance']

    let path
    if (provenance === 'domestic') {
      path = `${id}/grade`
    } else {
      path = `${id}/naric`
    }

    res.redirect(`/application/${applicationId}/degree/${path}?${utils.queryString(req)}`)
  })

  // Render NARIC/grade/year pages
  router.all('/application/:applicationId/degree/:id/:template(naric|grade|year)', (req, res) => {
    const id = req.params.id
    const referrer = req.query.referrer
    const template = req.params.template
    const paths = degreePaths(req)

    res.render(`application/degree/${template}`, {
      formaction: referrer || paths.next,
      paths,
      id,
      referrer
    })
  })
}
