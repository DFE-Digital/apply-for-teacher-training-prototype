const NotifyClient = require('notifications-node-client').NotifyClient
const notify = new NotifyClient(process.env.NOTIFYAPIKEY)

// Emails will only send if the email address has been whitelisted
const sendEmail = (req, template) => {
  const email = req.session.data.account.email
  if (email) {
    notify.sendEmail(
      template,
      email,
      {
        personalisation: {
          url: req.get('origin')
        }
      }
    )
  }
}

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

  router.post('/send-email/create-account', (req, res) => {
    sendEmail(req, 'd19c241f-73f9-45da-a9cc-6613f9b3d2da')
    res.redirect('/account/check-email/create-account')
  })
}
