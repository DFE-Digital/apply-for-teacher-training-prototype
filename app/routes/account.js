const utils = require('../utils')

/**
 * Account routes
 */
module.exports = router => {
  router.post('/account', (req, res) => {
    const hasAccount = req.session.data['has-account']

    if (hasAccount === 'yes') {
      utils.sendEmail(req, 'c3457068-675e-4ff9-963e-2e7444607bad')
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

  // Update choice status and phase from sign-in link in decision notification
  router.get('/account/sign-in', (req, res) => {
    const { phase, status } = req.query

    if (phase) {
      // Update application phase
      req.session.data.phase = phase
    }

    if (status) {
      // Get most recent application
      const applications = utils.toArray(req.session.data.applications)
      const application = applications[applications.length - 1]

      // Get statuses
      const statuses = status.split(';')

      // Get choices still pending a decision
      const choices = utils.toArray(application.choices)
      application.choices = choices.map((choice, i) => {
        choice.status = statuses[i]
        return choice
      })
    }

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
