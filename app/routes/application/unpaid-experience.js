const utils = require('../../utils')

module.exports = router => {

  // Generate ID to add new thing
  router.get('/application/unpaid-experience/add', (req, res) => {
    const id = utils.generateRandomString()

    res.redirect(`/application/unpaid-experience/role/${id}`)
  })

  // Render role page
  router.get('/application/unpaid-experience/role/:id', (req, res) => {
    const { id } = req.params

    res.render('application/unpaid-experience/role', {
      id
    })
  })

  // Delete unpaid experience role page
  router.get('/application/unpaid-experience/role/:id/delete', (req, res) => {
    const { id } = req.params

    res.render(`application/unpaid-experience/delete`, {
      id
    })
  })

  // Delete unpaid experience role page
  router.post('/application/unpaid-experience/role/:id/delete', (req, res) => {
    const { id } = req.params

    delete req.session.data.unpaidExperience[id]
    res.redirect(`/application/unpaid-experience/review`)
  })
}
