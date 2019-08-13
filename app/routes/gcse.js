const querystring = require('querystring')
const utils = require('./../utils')

module.exports = router => {
  /**
    * Application: Generate ID to add new GCSE
    */
  router.get('/application/:applicationId/gcse/add', (req, res) => {
    const gcseId = utils.generateRandomString()
    const queryString = querystring.stringify(req.query)

    res.redirect(`/application/${req.params.applicationId}/gcse/${gcseId}/add?${queryString}`)
  })

  /**
    * Application: GCSE(s) - Add/edit
    * @param {String} gcseId Qualification ID
    */
  router.get('/application/:applicationId/gcse/:gcseId', (req, res) => {
    const applicationId = req.params.applicationId
    const gcseId = req.params.gcseId
    const referrer = req.query.referrer

    res.render('application/gcse/index', {
      applicationId,
      formaction: `/application/${applicationId}/gcse/${gcseId}/answer`,
      gcseId,
      referrer
    })
  })

  /**
    * Application: GCSE(s) - Add/edit details
    * @param {String} gcseId Qualification ID
    */
  router.get('/application/:applicationId/gcse/:gcseId/:template(details|naric|grade|year)', (req, res) => {
    const applicationId = req.params.applicationId
    const gcseId = req.params.gcseId
    const referrer = req.query.referrer
    const template = req.params.template

    let formaction
    if (template === 'index') {
      formaction = `/application/${applicationId}/gcse/${gcseId}/answer`
    }

    res.render(`application/gcse/${template}`, {
      applicationId,
      formaction,
      gcseId,
      referrer
    })
  })

  /**
    * Application: GCSE(s) - Answer branching
    * @param {String} gcseId Qualification ID
    */
  router.post('/application/:applicationId/gcse/:gcseId/answer', (req, res) => {
    const data = req.session.data
    const gcseId = req.params.gcseId
    const applicationId = req.params.applicationId
    const referrer = req.query.referrer
    const type = data.applications[applicationId]['gcse'][gcseId]['type']

    let path
    if (type === 'Non-UK qualification') {
      path = `/application/${applicationId}/gcse/${gcseId}/naric`
    } if (type === 'Missing') {
      path = referrer || `/application/${applicationId}`
    } else {
      path = `/application/${applicationId}/gcse/${gcseId}/grade`
    }

    res.redirect(path)
  })

  /**
    * Application: GCSE(s) - Review
    */
  router.get('/application/:applicationId/gcse/review', (req, res) => {
    res.render('application/gcse/review')
  })
}
