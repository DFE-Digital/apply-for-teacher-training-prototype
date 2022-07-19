const utils = require('./../../utils')

module.exports = router => {

  // Generate new ID and redirect to start of referee flow
  router.get('/application/:applicationId/references/add', (req, res) => {
    const { applicationId } = req.params
    const id = utils.generateRandomString()
    const queryString = utils.queryString(req) ? `?${utils.queryString(req)}` : ''
    const application = utils.applicationData(req)

    application.references = {}

    application.references[id] = { status: 'Not requested yet' }

    res.redirect(`/application/${applicationId}/references/${id}/type${queryString}`)

  })

  router.post('/application/:applicationId/references/:id/delete', (req, res) => {
    const { applicationId, id } = req.params
    const application = utils.applicationData(req)

    delete application.references[id]

    const remainingReferences = utils.toArray(application.references)

    if (remainingReferences.length < 2) {
      application.completed = {}
      application.completed.references = null
    }

    console.log(application.completed)

    res.redirect(`/application/${applicationId}/references`)

  })

  router.get('/application/:applicationId/references/:id/:view(intro|type|name|email|relationship|delete)', (req, res) => {
    const { applicationId, id, view } = req.params
    const application = utils.applicationData(req)

    const reference = application['references'][id]

   res.render(`application/references/${view}`, {
      applicationId,
      reference,
      id
    })

  })
}
