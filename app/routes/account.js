/**
 * Account routes
 */
module.exports = router => {
  router.post('/account', (req, res) => {
    const hasAccount = req.session.data['has-account']

    if (hasAccount === 'yes') {
      res.redirect('/account/check-email/sign-in')
    } else {
      res.redirect('/account/create-account')
    }
  })

  // Check email prompt
  router.get('/account/check-email/:action', (req, res) => {
    res.render('account/check-email', {
      action: req.params.action
    })
  })

  router.get('/account/sign-in', (req, res) => {
    res.render('account/sign-in')
  })

  // Remove session account email value when signing out
  router.get('/account/sign-out', (req, res, next) => {
    if (req.session.data && req.session.data.account) {
      delete req.session.data.account.email
    }

    res.redirect('/')
  })
}
