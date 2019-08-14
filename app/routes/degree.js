const journeys = require('../utils/journeys')
const querystring = require('querystring')
const utils = require('./../utils')

function getQueryString(req) {
  return querystring.stringify(req.query)
}

function degreeData(req) {
  const applicationData = utils.applicationData(req)
  return applicationData.degree[req.params.degreeId]
}

function degreePaths(req) {
  const applicationId = req.params.applicationId
  const data = degreeData(req)
  const international = data.provenance && data.provenance == 'international'
  const basePath = `/application/${applicationId}/degree/${req.params.degreeId}`

  var paths = [
    basePath,
    ...(international ? [`${basePath}/naric`] : []),
    `${basePath}/grade`,
    `${basePath}/year`,
    `/application/${applicationId}/degree/review`,
  ]

  return journeys.nextAndBackPaths(paths, req)
}

module.exports = router => {
  /**
    * Application: Generate ID to add new degree
    */
  router.get('/application/:applicationId/degree/add', (req, res) => {
    const degreeId = utils.generateRandomString()
    res.redirect(`/application/${req.params.applicationId}/degree/${degreeId}?${getQueryString(req)}`)
  })

  /**
    * Application: Degree(s) - Review
    */
  router.get('/application/:applicationId/degree/review', (req, res) => {
    res.render('application/degree/review')
  })

  /**
    * Application: Degree(s) - Add/edit
    * @param {String} degreeId Qualification ID
    */
  router.get('/application/:applicationId/degree/:degreeId', (req, res) => {
    const applicationId = req.params.applicationId
    const degreeId = req.params.degreeId
    const referrer = req.query.referrer

    res.render('application/degree/index', {
      applicationId,
      formaction: `/application/${applicationId}/degree/${degreeId}/answer?${getQueryString(req)}`,
      degreeId,
      referrer
    })
  })

  /**
    * Application: Degree(s) - Add/edit details
    * @param {String} degreeId Qualification ID
    */
  router.all('/application/:applicationId/degree/:degreeId/:template(naric|grade|year)', (req, res) => {
    const applicationId = req.params.applicationId
    const degreeId = req.params.degreeId
    const referrer = req.query.referrer
    const template = req.params.template
    const paths = degreePaths(req)
    // formaction = `/application/${applicationId}/degree/${degreeId}/${nextPage}?${getQueryString(req)}`

    res.render(`application/degree/${template}`, {
      applicationId,
      formaction: paths.next,
      paths,
      degreeId,
      referrer
    })
  })

  /**
    * Application: Degree(s) - Answer branching
    * @param {String} degreeId Qualification ID
    */
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

    res.redirect(`/application/${applicationId}/degree/${path}?${getQueryString(req)}`)
  })
}
