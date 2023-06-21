const utils = require('./../../utils')

module.exports = router => {
  // Generate new ID and redirect to start of referee flow
  router.get('/details/references/add', (req, res) => {
    const id = utils.generateRandomString()

    req.session.data.references ||= {}
    req.session.data.references[id] = { status: 'Not sent' }

    res.redirect(`/details/references/${id}/type`)
  })

  // References review page
  router.get('/details/references', (req, res) => {

    req.session.data.references ||= {}
    const incompleteReferences = Object.values(req.session.data.references).filter(ref => ref.email === '')

    res.render(`details/references/index`, {
      incompleteReferences
    })
  })

  router.post('/details/references/:id/delete', (req, res) => {
    const { id } = req.params

    delete req.session.data.references[id]

    res.redirect('/details/references')
  })

  router.get('/details/references/:id/:view(intro|type|name|email|relationship|delete)', (req, res) => {
    const { id, view } = req.params

    res.render(`details/references/${view}`, {
      id
    })
  })
}
