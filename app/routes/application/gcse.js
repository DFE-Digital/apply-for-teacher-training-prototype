const journeys = require('./../../utils/journeys')
const utils = require('./../../utils')

function gcseData (req) {
  const applicationData = utils.applicationData(req)
  return applicationData.gcse[req.params.gcseId]
}

function isInternational (req) {
  return gcseData(req)['type'] === 'Non-UK qualification'
}

function gcsePaths (req) {
  const applicationId = req.params.applicationId
  const basePath = `/application/${applicationId}/gcse/${req.params.gcseId}`
  const referrer = req.query.referrer

  var paths = [
    basePath,
    ...(isInternational(req) ? [`${basePath}/naric`] : []),
    `${basePath}/grade`,
    `${basePath}/year`,
    ...(referrer ? [referrer] : [`/application/${applicationId}`])
  ]

  return journeys.nextAndBackPaths(paths, req)
}

/**
 * Application: GCSE or equivalent routes
 */
module.exports = router => {
  // Generate new degreeID and redirect to that degree
  router.get('/application/:applicationId/gcse/add', (req, res) => {
    const gcseId = utils.generateRandomString()
    res.redirect(`/application/${req.params.applicationId}/gcse/${gcseId}/add?${utils.queryString(req)}`)
  })

  // Render GCSE review page
  // Note: Must be defined before next route declaration
  router.get('/application/:applicationId/gcse/:gcseId/review', (req, res) => {
    res.render('application/gcse/review', {
      gcseId: req.params.gcseId
    })
  })

  // Render first page
  router.get('/application/:applicationId/gcse/:gcseId', (req, res) => {
    const gcseId = req.params.gcseId
    const referrer = req.query.referrer
    const referrerPath = referrer ? `?referrer=${referrer}` : ''

    res.render('application/gcse/index', {
      formaction: `/application/${req.params.applicationId}/gcse/${gcseId}/answer${referrerPath}`,
      gcseId,
      referrer
    })
  })

  // GCSE type answer branching
  router.post('/application/:applicationId/gcse/:gcseId/answer', (req, res) => {
    const gcseId = req.params.gcseId
    const applicationId = req.params.applicationId
    const referrer = req.query.referrer
    const type = gcseData(req)['type']

    let path
    if (isInternational(req)) {
      path = `/application/${applicationId}/gcse/${gcseId}/naric`
    } else if (type === 'I don’t have an equivalent qualification yet') {
      path = referrer || `/application/${applicationId}`
    } else {
      path = `/application/${applicationId}/gcse/${gcseId}/grade`
    }

    res.redirect(`${path}?${utils.queryString(req)}`)
  })

  // Render NARIC/grade/year pages
  router.all('/application/:applicationId/gcse/:gcseId/:template(naric|grade|year)', (req, res) => {
    const gcseId = req.params.gcseId
    const referrer = req.query.referrer
    const template = req.params.template
    const paths = gcsePaths(req)

    res.render(`application/gcse/${template}`, {
      formaction: paths.next,
      paths,
      gcseId,
      referrer
    })
  })
}
