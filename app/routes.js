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
require('./routes/application/vocation')(router)
require('./routes/application/degree')(router)
require('./routes/application/gcse')(router)
require('./routes/application/qualifications')(router)
require('./routes/application/other-qualifications')(router)
require('./routes/application/references')(router)
require('./routes/application/interview')(router)
require('./routes/email')(router)

/**
  * Application: Generate ID to add new thing
  * @param {String} section Section of the application
  * @param {String} thing Thing to add (i.e. job, role, etc.)
  */
router.get('/application/:applicationId/school-experience/add/role', (req, res) => {
  const id = utils.generateRandomString()
  const queryString = querystring.stringify(req.query)

  res.redirect(`/application/${req.params.applicationId}/school-experience/role/${id}?${queryString}`)
})

/**
  * Application: School experience role
  * @param {String} id ID
  */
router.get('/application/:applicationId/school-experience/role/:id', (req, res) => {
  const id = req.params.id
  const type = req.params.type
  const section = req.params.section
  const queryString = querystring.stringify(req.query)
  const referrer = req.query.referrer

  res.render(`application/${section}/${type}`, {
    referrer,
    formaction: `/application/${req.params.applicationId}/school-experience/update/role/${id}?${queryString}`,
    id,
    start: `${req.query.start}`,
    end: `${req.query.end}`
  })
})

/**
  * Application: School experience - Update job/gap data
  * Convert individual date components into ISO 8601 date strings
  * @param {String} type job || gap
  * @param {String} id Job/gap ID
  */
router.post('/application/:applicationId/school-experience/update/role/:id', (req, res) => {
  const id = req.params.id
  const applicationId = req.params.applicationId
  const applicationData = req.session.data.applications[applicationId]['school-experience'][id]

  // Create ISO 8601 start date
  const startDay = req.body[`${id}-start-date-day`] || '01'
  const startMonth = req.body[`${id}-start-date-month`]
  const startYear = req.body[`${id}-start-date-year`]
  applicationData['start-date'] = false

  if (startMonth && startYear) {
    applicationData['start-date'] = `${startYear}-${startMonth}-${startDay}`
  }

  // Create ISO 8601 end date
  const endDay = req.body[`${id}-end-date-day`] || '01'
  const endMonth = req.body[`${id}-end-date-month`]
  const endYear = req.body[`${id}-end-date-year`]
  applicationData['end-date'] = false

  if (endMonth && endYear) {
    applicationData['end-date'] = `${endYear}-${endMonth}-${endDay}`
  }

  res.redirect(req.query.referrer || `/application/${applicationId}/school-experience/review`)
})

router.get('/application/:applicationId/school-experience/:view', (req, res) => {
  res.render(`application/school-experience/${req.params.view}`)
})

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

require('./routes/course')(router)

module.exports = router
