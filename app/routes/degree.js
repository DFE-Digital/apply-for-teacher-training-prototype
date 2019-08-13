const querystring = require('querystring')
const utils = require('./../utils')

module.exports = router => {
  /**
    * Application: Generate ID to add new degree
    */
  router.get('/application/:applicationId/degree/add', (req, res) => {
    const degreeId = utils.generateRandomString()
    const queryString = querystring.stringify(req.query)

    res.redirect(`/application/${req.params.applicationId}/degree/${degreeId}/add?${queryString}`)
  })

  /**
    * Application: Degree(s) - Add/edit
    * @param {String} action add || edit
    * @param {String} degreeId Qualification ID
    */
  router.get('/application/:applicationId/degree/:degreeId/:action(add|edit)', (req, res) => {
    const action = req.params.action
    const applicationId = req.params.applicationId
    const degreeId = req.params.degreeId
    const referrer = req.query.referrer

    res.render('application/degree/index', {
      applicationId,
      action,
      formaction: `/application/${applicationId}/degree/${degreeId}/${action}/answer`,
      degreeId,
      referrer
    })
  })

  /**
    * Application: Degree(s) - Add/edit details
    * @param {String} action add || edit
    * @param {String} degreeId Qualification ID
    */
  router.get('/application/:applicationId/degree/:degreeId/:action(add|edit)/:template(naric|grade|year)', (req, res) => {
    const action = req.params.action
    const applicationId = req.params.applicationId
    const degreeId = req.params.degreeId
    const referrer = req.query.referrer
    const template = req.params.template

    let formaction
    if (template === 'index') {
      formaction = `/application/${applicationId}/degree/${degreeId}/${action}/answer`
    }

    res.render(`application/degree/${template}`, {
      applicationId,
      action,
      formaction,
      degreeId,
      referrer
    })
  })

  /**
    * Application: Degree(s) - Answer branching
    * @param {String} action add || edit
    * @param {String} degreeId Qualification ID
    */
  router.post('/application/:applicationId/degree/:degreeId/:action(add|edit)/answer', (req, res) => {
    const action = req.params.action
    const data = req.session.data
    const degreeId = req.params.degreeId
    const applicationId = req.params.applicationId
    const provenance = data.applications[applicationId]['degree'][degreeId]['provenance']

    let path
    if (provenance === 'domestic') {
      path = `${degreeId}/${action}/grade`
    } else {
      path = `${degreeId}/${action}/naric`
    }

    res.redirect(`/application/${applicationId}/degree/${path}`)
  })

  /**
    * Application: Degree(s) - Review
    */
  router.get('/application/:applicationId/degree/review', (req, res) => {
    res.render('application/degree/review')
  })
}
