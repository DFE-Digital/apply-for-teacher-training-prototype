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

module.exports = router
