const utils = require('./../../utils')

module.exports = router => {
  // Generate new ID and redirect to start of referee flow
  router.get('/application/references/add', (req, res) => {
    const id = utils.generateRandomString()

    req.session.data.references ||= {}
    req.session.data.references[id] = { status: 'Not sent' }

    res.redirect(`/application/references/${id}/type`)
  })

  // References review page
  router.get('/application/references', (req, res) => {

    incompleteReferences = Object.values(req.session.data.references).filter(ref => ref.email == "")

    res.render(`application/references/index`, {
      incompleteReferences
    })
  })

  router.post('/application/references/:id/delete', (req, res) => {
    const { id } = req.params

    delete req.session.data.references[id]

    res.redirect('/application/references')
  })

  router.get('/application/references/:id/:view(intro|type|name|email|relationship|delete)', (req, res) => {
    const { id, view } = req.params

    res.render(`application/references/${view}`, {
      id
    })
  })
}
