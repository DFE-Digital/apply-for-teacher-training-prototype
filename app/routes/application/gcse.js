const journeys = require('./../../utils/journeys')
const utils = require('./../../utils')

const gcseData = (req) => {
  const applicationData = utils.applicationData(req)
  if (applicationData.gcse[req.params.id]) {
    return applicationData.gcse[req.params.id]
  }

  return false
}

const isInternational = (req) => gcseData(req).type === 'Non-UK qualification'
const isMissing = (req) => gcseData(req).type === 'I don’t have this qualification yet'

const gcsePaths = (req) => {
  const applicationId = req.params.applicationId
  const basePath = `/application/${applicationId}/gcse/${req.params.id}`
  const referrer = req.query.referrer
  const id = req.params.id

  var paths = [
    basePath,
    ...(isInternational(req) ? [`${basePath}/country`] : []),
    ...(isInternational(req) ? [`${basePath}/naric`] : [`${basePath}/grade`]),
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
    const completedGcse = gcseData(req).grade && gcseData(req).year

    const id = req.params.id
    const referrer = req.query.referrer
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
    const id = req.params.id
    const applicationId = req.params.applicationId
    const referrer = req.query.referrer
    const type = gcseData(req).type

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

  // Render NARIC/grade/year pages
  router.all('/application/:applicationId/gcse/:id/:template(subject|country|grade|naric|year)', (req, res) => {
    const completedGcse = gcseData(req).grade && gcseData(req).year

    const id = req.params.id
    const referrer = req.query.referrer
    const template = req.params.template
    const paths = gcsePaths(req)
    const formaction = completedGcse ? referrer : paths.next

    res.render(`application/gcse/${template}`, {
      formaction,
      paths,
      id,
      referrer
    })
  })
}
