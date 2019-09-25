const express = require('express')
const router = express.Router()

// Make `applicationId` available as local variable
router.all(['/application/:applicationId', '/application/:applicationId/*'], (req, res, next) => {
  res.locals.applicationId = req.params.applicationId
  next()
})

// Make `courseId` available as local variable
router.all(['/application/:applicationId/course/:courseId', '/application/:applicationId/course/:courseId/*'], (req, res, next) => {
  res.locals.courseId = req.params.courseId
  next()
})

require('./routes/application')(router)
require('./routes/course')(router)
require('./routes/email')(router)
require('./routes/remove')(router)

// Clear all data in session if you open /prototype-admin/clear-data
router.post('/admin/clear-data', function (req, res) {
  req.session.data = {}
  res.render('admin/clear-data-success')
})

// Show feature flags
router.get('/admin/flags', (req, res) => {
  res.render('admin/flags', {
    flags: req.session.data.flags
  })
})

module.exports = router
