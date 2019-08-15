const express = require('express')
const router = express.Router()
const querystring = require('querystring')
const utils = require('./utils')

// Make `applicationId` available as local variable
router.all(['/application/:applicationId', '/application/:applicationId/*'], function (req, res, next) {
  res.locals.applicationId = req.params.applicationId
  next()
})

// Make `courseId` available as local variable
router.all(['/application/:applicationId/course/:courseId', '/application/:applicationId/course/:courseId/*'], function (req, res, next) {
  res.locals.courseId = req.params.courseId
  next()
})

require('./routes/application')(router)
require('./routes/application/personal-details')(router)
require('./routes/application/contact-details')(router)
require('./routes/application/subject-knowledge')(router)
require('./routes/application/work-history')(router)
require('./routes/application/school-experience')(router)
require('./routes/application/vocation')(router)
require('./routes/application/degree')(router)
require('./routes/application/gcse')(router)
require('./routes/application/qualifications')(router)
require('./routes/application/other-qualifications')(router)
require('./routes/application/references')(router)
require('./routes/application/interview')(router)
require('./routes/course')(router)
require('./routes/email')(router)

router.all('/application/:applicationId/:view', function (req, res) {
  res.render(
    `application/${req.params.view}`,
    {},
    function (error, html) {
      if (error && error.message.includes('template not found')) {
        res.render(`application/${req.params.view}/index`)
      } else {
        res.send(html)
      }
    }
  )
})

module.exports = router
