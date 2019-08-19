const journeys = require('./../../utils/journeys')
const utils = require('./../../utils')

const gcseData = (req) => {
  const applicationData = utils.applicationData(req)
  return applicationData.gcse[req.params.id]
}

const isInternational = (req) => {
  return gcseData(req)['type'] === 'Non-UK qualification'
}

const gcsePaths = (req) => {
  const applicationId = req.params.applicationId
  const basePath = `/application/${applicationId}/gcse/${req.params.id}`
  const referrer = req.query.referrer
  const id = req.params.id

  var paths = [
    basePath,
    ...(isInternational(req) ? [`${basePath}/naric`] : []),
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
    res.render('application/gcse/review', {
      id: req.params.id
    })
  })

  // Render first page
  router.get('/application/:applicationId/gcse/:id', (req, res) => {
    const id = req.params.id
    const referrer = req.query.referrer
    const referrerPath = referrer ? `?referrer=${referrer}` : ''

    res.render('application/gcse/index', {
      formaction: `/application/${req.params.applicationId}/gcse/${id}/answer${referrerPath}`,
      id,
      referrer
    })
  })

  // GCSE type answer branching
  router.post('/application/:applicationId/gcse/:id/answer', (req, res) => {
    const id = req.params.id
    const applicationId = req.params.applicationId
    const referrer = req.query.referrer
    const type = gcseData(req)['type']

    let path
    if (isInternational(req)) {
      path = `/application/${applicationId}/gcse/${id}/naric`
    } else if (type === 'I don’t have an equivalent qualification yet') {
      path = referrer || `/application/${applicationId}`
    } else {
      path = `/application/${applicationId}/gcse/${id}/grade`
    }

    res.redirect(`${path}?${utils.queryString(req)}`)
  })

  // Render NARIC/grade/year pages
  router.all('/application/:applicationId/gcse/:id/:template(naric|grade|year)', (req, res) => {
    const id = req.params.id
    const referrer = req.query.referrer
    const template = req.params.template
    const paths = gcsePaths(req)

    res.render(`application/gcse/${template}`, {
      formaction: paths.next,
      paths,
      id,
      referrer
    })
  })
}
