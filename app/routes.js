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
require('./routes/email')(router)

/**
  * Application: Work history - Missing work history
  * Note: Must be defined before next route declaration
  */
router.get('/application/:applicationId/work-history/missing', (req, res) => {
  res.render(`application/work-history/missing`, { referrer: req.query.referrer })
})

/**
  * Application: Generate ID to add new thing
  * @param {String} section Section of the application
  * @param {String} thing Thing to add (i.e. job, role, etc.)
  */
router.get('/application/:applicationId/:section/add/:thing(job|role|gap|gcse|gcse-equivalent)', (req, res) => {
  const section = req.params.section
  const thing = req.params.thing
  const id = utils.generateRandomString()
  const queryString = querystring.stringify(req.query)

  res.redirect(`/application/${req.params.applicationId}/${section}/${thing}/${id}?${queryString}`)
})

require('./routes/degree')(router)
require('./routes/gcse')(router)
require('./routes/other-qualifications')(router)
require('./routes/qualifications')(router)

/**
  * Application: Review
  */
router.get('/application/:applicationId/review', (req, res) => {
  res.render('application/review')
})

/**
  * Application: Work history - answer branching
  */
router.post('/application/:applicationId/work-history/answer', (req, res) => {
  const applicationId = req.params.applicationId
  const length = req.session.data.applications[applicationId]['work-history']['length']

  if (length === 'none') {
    res.redirect(`/application/${applicationId}/work-history/missing`)
  } else {
    res.redirect(`/application/${applicationId}/work-history/add/job`)
  }
})

/**
  * Application: Work history and school experience - Job/gap/role
  * @param {String} type job || gap || role
  * @param {String} id ID
  */
router.get('/application/:applicationId/:section(work-history|school-experience)/:type(job|gap|role)/:id', (req, res) => {
  const id = req.params.id
  const type = req.params.type
  const section = req.params.section
  const queryString = querystring.stringify(req.query)
  const referrer = req.query.referrer

  res.render(`application/${section}/${type}`, {
    referrer,
    formaction: `/application/${req.params.applicationId}/${section}/update/${type}/${id}?${queryString}`,
    id,
    start: `${req.query.start}`,
    end: `${req.query.end}`
  })
})

/**
  * Application: Work history - Update job/gap data
  * Convert individual date components into ISO 8601 date strings
  * @param {String} type job || gap
  * @param {String} id Job/gap ID
  */
router.post('/application/:applicationId/:section(work-history|school-experience)/update/:type(job|gap|role)/:id', (req, res) => {
  const id = req.params.id
  const section = req.params.section
  const applicationId = req.params.applicationId
  const applicationData = req.session.data.applications[applicationId][section][id]

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

  res.redirect(req.query.referrer || `/application/${applicationId}/${section}/review`)
})

router.get('/application/:applicationId/:section(work-history|school-experience)/:view', (req, res) => {
  res.render(`application/${req.params.section}/${req.params.view}`)
})

/**
  * Application: References - Referee
  * @param {String} id first || second
  */
router.get('/application/:applicationId/references/referee/:id', (req, res) => {
  const applicationId = req.params.applicationId
  const id = req.params.id

  res.render('application/references/referee', {
    applicationId,
    id,
    formaction: `/application/${applicationId}/references/referee-details/${id}`
  })
})

/**
  * Application: References - Referee details
  * @param {String} id first || second
  */
router.get('/application/:applicationId/references/referee-details/:id', (req, res) => {
  const applicationId = req.params.applicationId
  const id = req.params.id
  const referrer = req.query.referrer

  res.render('application/references/referee-details', {
    applicationId,
    id,
    formaction: referrer || `/application/${applicationId}/references/review`
  })
})

router.get('/application/:applicationId/references/:view', (req, res) => {
  res.render(`application/references/${req.params.view}`)
})

/**
  * Application: Vocation - Vocation statement
  */
router.get('/application/:applicationId/vocation', (req, res) => {
  const referrer = req.query.referrer

  res.render('application/vocation/index', {
    formaction: referrer || `/application/${req.params.applicationId}`,
    referrer
  })
})

/**
  * Application: Interview
  */
router.get('/application/:applicationId/interview', (req, res) => {
  const referrer = req.query.referrer

  res.render('application/interview/index', {
    formaction: referrer || `/application/${req.params.applicationId}`,
    referrer
  })
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
