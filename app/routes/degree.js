const querystring = require('querystring')
const utils = require('./../utils')

module.exports = router => {
  /**
    * Application: Generate ID to add new degree
    */
  router.get('/application/:applicationId/degree/add', (req, res) => {
    const degreeId = utils.generateRandomString()
    const queryString = querystring.stringify(req.query)

    res.redirect(`/application/${req.params.applicationId}/degree/${degreeId}?${queryString}`)
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
      formaction: `/application/${applicationId}/degree/${degreeId}/answer`,
      degreeId,
      referrer
    })
  })

  /**
    * Application: Degree(s) - Add/edit details
    * @param {String} degreeId Qualification ID
    */
  router.get('/application/:applicationId/degree/:degreeId/:template(naric|grade|year)', (req, res) => {
    const applicationId = req.params.applicationId
    const degreeId = req.params.degreeId
    const referrer = req.query.referrer
    const template = req.params.template

    let formaction
    if (template === 'index') {
      formaction = `/application/${applicationId}/degree/${degreeId}/answer`
    }

    res.render(`application/degree/${template}`, {
      applicationId,
      formaction,
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

    res.redirect(`/application/${applicationId}/degree/${path}`)
  })
}
