const express = require('express')
const router = express.Router()

// Make `applicationId` available as local variable
router.all(['/application/:applicationId', '/application/:applicationId/*'], (req, res, next) => {
  res.locals.applicationId = req.params.applicationId
  next()
})

// Make `choiceId` available as local variable
router.all([
  '/application/:applicationId/choices/:choiceId',
  '/application/:applicationId/choices/:choiceId/*'
], (req, res, next) => {
  res.locals.choiceId = req.params.choiceId
  next()
})

// Make `validate` available as local variable for Find page
router.get('/find/feedback', (req, res) => {
  const { validate } = req.query

  res.render('find/feedback.html', {
    validate
  })
})

router.get('/accepted/:applicationId/select-ske-provider', (req, res) => {
  const { applicationId } = req.params

  res.render('accepted/select-ske-provider.html', {
    applicationId
  })
})

router.get('/accepted/:applicationId/confirm-ske-provider', (req, res) => {
  const { applicationId } = req.params
  res.render('accepted/confirm-ske-provider.html', {
    applicationId
  })
})

router.get('/accepted/:applicationId/submit-ske-provider', (req, res) => {
  const { applicationId } = req.params
  const application = req.session.data.applications[applicationId]

  application.skeProvider = req.session.data.skeProvider

  res.redirect(`/dashboard/${applicationId}`)
})

router.get('/accepted/:applicationId/complete-ske-course', (req, res) => {
  const { applicationId } = req.params
  const application = req.session.data.applications[applicationId]

  application.skeCompleted = true

  res.redirect(`/dashboard/${applicationId}`)
})

require('./routes/account')(router)
require('./routes/delete')(router) // Must appear before other routes
require('./routes/apply')(router)
require('./routes/application')(router)
require('./routes/reference')(router)
require('./routes/emails')(router)
require('./routes/send-email')(router)
require('./routes/survey')(router)

require('./routes/accepted/references')(router)

require('./routes/admin')(router)

module.exports = router
