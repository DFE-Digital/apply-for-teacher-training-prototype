const utils = require('../../utils')

module.exports = router => {
  // Generate ID to add new thing
  router.get('/details/unpaid-experience/add', (req, res) => {
    const id = utils.generateRandomString()

    res.redirect(`/details/unpaid-experience/role/${id}`)
  })

  // Render role page
  router.get('/details/unpaid-experience/role/:id', (req, res) => {
    const { id } = req.params

    res.render('details/unpaid-experience/role', {
      id
    })
  })

  // Delete unpaid experience role page
  router.get('/details/unpaid-experience/role/:id/delete', (req, res) => {
    const { id } = req.params

    res.render('details/unpaid-experience/delete', {
      id
    })
  })

  // Delete unpaid experience role page
  router.post('/details/unpaid-experience/role/:id/delete', (req, res) => {
    const { id } = req.params

    delete req.session.data.unpaidExperience[id]
    res.redirect('/details/unpaid-experience/review')
  })

  router.get('/details/unpaid-experience/review', (req, res) => {

    req.session.data.references ||= {}
    const applications = (req.session.data.applications ? Object.values(req.session.data.applications) : [] )
    const applicationsAwaitingDecisionOrReceivedOffer = applications.filter(a => (['Awaiting decision', "Offer received"].includes(a.status)))
    const numberOfApplicationsLeft = 4 - (applicationsAwaitingDecisionOrReceivedOffer.length)

    res.render(`details/unpaid-experience/review`, {
      id: req.params.id,
      numberOfApplicationsLeft
    })
  })
}
