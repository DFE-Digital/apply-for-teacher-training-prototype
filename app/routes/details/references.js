const utils = require('./../../utils')

module.exports = router => {
  // Generate new ID and redirect to start of referee flow
  router.get('/details/references/add', (req, res) => {
    const id = utils.generateRandomString()

    req.session.data.references ||= {}
    req.session.data.references[id] = { status: 'Draft' }

    res.redirect(`/details/references/${id}/type`)
  })


  router.post('/details/references/:id/check-email', (req, res) => {
    const id = req.params.id;
    const isPersonalEmail = ( req.session.data.references[id].email.indexOf('gmail') > 1 || req.session.data.references[id].email.indexOf('hotmail') > 1 )

    if (isPersonalEmail && !( req.session.data.references[id].type == 'character' ) ) {
      res.redirect(`/details/references/${id}/email-warning`)
    } else {
      res.redirect(`/details/references/${id}/relationship`)
    }
  })

  router.get('/details/references/:id/email-warning', (req, res) => {
    res.render('/details/references/email-warning', { id: req.params.id } )
  })

  // References review page
  router.get('/details/references', (req, res) => {

    req.session.data.references ||= {}
    const incompleteReferences = Object.values(req.session.data.references).filter(ref => ref.email === '')
    const applications = (req.session.data.applications ? Object.values(req.session.data.applications) : [] )
    const applicationsAwaitingDecisionOrReceivedOffer = applications.filter(a => (['Awaiting decision', "Offer received"].includes(a.status)))
    const numberOfApplicationsLeft = 4 - (applicationsAwaitingDecisionOrReceivedOffer.length)

    res.render(`details/references/index`, {
      incompleteReferences,
      id: req.params.id,
      numberOfApplicationsLeft
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
