const utils = require('./../../utils')

module.exports = router => {
  // Generate new ID and redirect to start of referee flow
  router.get('/application/references/add', (req, res) => {
    const id = utils.generateRandomString()

    req.session.data.references ||= {}
    req.session.data.references[id] = { status: 'Not sent' }

    res.redirect(`/application/references/${id}/type`)
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
