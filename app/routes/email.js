/**
 * Email routes
 */
module.exports = router => {
  // Check email
  router.get('/account/check-email/:action', (req, res) => {
    res.render('account/check-email', {
      action: req.params.action
    })
  })

  // Confirm address
  router.get('/email/:page/:action', (req, res) => {
    const page = req.params.page

    res.render(`email/${page}`, {
      action: req.params.action
    })
  })

  // Account created
  router.get('/account/account-created', (req, res) => {
    res.render('account/account-created')
  })
}
