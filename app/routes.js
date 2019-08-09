const express = require('express')
const router = express.Router()
const querystring = require('querystring')
const {
  pickCoursePaths
} = require('./utils/journeys')

// Utils
const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5).toUpperCase()
}

/**
  * Account: Check email
  * @param {String} page Page to render
  * @param {String} action Confirmation action
  */
router.get('/account/check-email/:action', (req, res) => {
  res.render(`account/check-email`, {
    action: req.params.action
  })
})

/**
  * Email: Confirm address
  * @param {String} page Page to render
  * @param {String} action Confirmation action
  */
router.get('/email/:page/:action', (req, res) => {
  const page = req.params.page

  res.render(`email/${page}`, {
    action: req.params.action
  })
})

router.get('/application/start', function (req, res) {
  var code = generateRandomString()
  var data = req.session.data

  if (typeof data.applications === 'undefined') {
    data.applications = {}
  }

  data.applications[code] = { started: true }
  res.redirect(`/application/${code}`)
})

router.all('/application/:applicationId', function (req, res) {
  res.render('application/index', { applicationId: req.params.applicationId })
})

/**
  * Apply: Populate pages with course and provider details
  * @param {String} provider Provider code
  * @param {String} course Course code
  * @param {String} page Page to render
  */
router.get('/applications/:provider/:course/:page', (req, res) => {
  const page = req.params.page

  res.render(`applications/${page}`, {
    provider: req.params.provider,
    course: req.params.course
  })
})

/**
  * Application: Work history - Add/edit missing work history
  * Note: Must be defined before next route declaration
  * @param {String} action add || edit
  */
router.get('/application/:applicationId/work-history/:action(add|edit)/missing', (req, res) => {
  res.render(`application/work-history/missing`, {
    action: req.params.action,
    applicationId: req.params.applicationId
  })
})

/**
  * Application: Generate ID to add new thing
  * @param {String} section Section of the application
  * @param {String} thing Thing to add (i.e. qualification, job, role, etc.)
  */
router.get('/application/:applicationId/:section/add/:thing', (req, res) => {
  const section = req.params.section
  const thing = req.params.thing
  const id = generateRandomString()
  const queryString = querystring.stringify(req.query)

  res.redirect(`/application/${req.params.applicationId}/${section}/add/${thing}/${id}?${queryString}`)
})

/**
  * Application: Personal details
  */
router.get('/application/:applicationId/personal-details/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer
  const applicationId = req.params.applicationId

  res.render('application/personal-details/index', {
    applicationId,
    action,
    formaction: referrer || `/application/${applicationId}/personal-details/answer`,
    referrer
  })
})

/**
  * Application: Personal details - answer branching
  */
router.post('/application/:applicationId/personal-details/answer', (req, res) => {
  const applicationId = req.params.applicationId
  const nationality = req.session.data.applications[applicationId]['candidate']['nationality']

  const eea = ['Austrian', 'Belgian', 'Bulgarian', 'Croatian', 'Cypriot', 'Czech', 'Danish', 'Dutch', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Icelandic', 'Irish', 'Italian', 'Latvian', 'Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Maltese', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Slovak', 'Slovenian', 'Spanish', 'Swedish', 'Swiss', 'British']

  if (eea.includes(nationality)) {
    res.redirect(`/application/${applicationId}`)
  } else {
    res.redirect(`/application/${applicationId}/personal-details/residency-status/add`)
  }
})

/**
  * Application: Residency status
  */
router.get('/application/:applicationId/personal-details/residency-status/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer
  const applicationId = req.params.applicationId

  res.render('application/personal-details/residency-status', {
    applicationId,
    action,
    formaction: referrer || `/application/${applicationId}`,
    referrer
  })
})

/**
  * Application: Contact details
  */
router.get('/application/:applicationId/contact-details/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer
  const applicationId = req.params.applicationId

  res.render('application/contact-details/index', {
    action,
    formaction: referrer || `/application/${applicationId}/contact-details/address-answer`,
    referrer
  })
})

/**
  * Application: Contact details - answer branching
  */
router.post('/application/:applicationId/contact-details/address-answer', (req, res) => {
  const applicationId = req.params.applicationId
  const applicationData = req.session.data.applications[applicationId]
  const location = applicationData['contact-details']['address-type']

  if (location === 'domestic') {
    res.redirect(`/application/${applicationId}/contact-details/lookup-address`)
  } else {
    res.redirect(`/application/${applicationId}`)
  }
})

router.get('/application/:applicationId/contact-details/address/:action(add|edit)', (req, res) => {
  const referrer = req.query.referrer
  const applicationId = req.params.applicationId

  res.render('application/contact-details/address', {
    applicationId,
    action: req.params.action,
    formaction: referrer || `/application/${applicationId}/contact-details/review`,
    referrer
  })
})

router.get('/application/:applicationId/contact-details/:view', (req, res) => {
  const applicationId = req.params.applicationId
  res.render(`application/contact-details/${req.params.view}`, { applicationId })
})

/**
  * Application: Qualifications review
  */
router.get('/application/:applicationId/qualifications/review', (req, res) => {
  const referrer = req.query.referrer
  const applicationId = req.params.applicationId

  res.render('application/qualifications/review', {
    applicationId,
    formaction: referrer || `/application/${applicationId}`,
    referrer
  })
})

/**
  * Application: Qualifications - Add/edit degree or GCSE
  * @param {String} action add || edit
  * @param {String} category degree || gcse
  * @param {String} id Qualification ID
  */
router.get('/application/:applicationId/qualifications/:action(add|edit)/:category(degree|gcse)/:id', (req, res) => {
  const referrer = req.query.referrer
  const action = req.params.action
  const category = req.params.category
  const id = req.params.id
  const applicationId = req.params.applicationId

  res.render(`application/qualifications/${category}`, {
    applicationId,
    action,
    formaction: `/application/${applicationId}/qualifications/${action}/${category}/${id}/answer`,
    id,
    referrer
  })
})

/**
  * Application: Qualifications - Add/edit UK/international degree details
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  */
router.get('/application/:applicationId/qualifications/:action(add|edit)/:type(uk-degree|international-degree)/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id
  const applicationId = req.params.applicationId

  let formaction = req.session.data.referrer
  if (action === 'add') {
    formaction = `/application/${applicationId}/qualifications/next?prev=degree`
  }

  res.render('application/qualifications/degree-details', {
    applicationId,
    action,
    formaction,
    id,
    international: req.params.type === 'international-degree'
  })
})

/**
  * Application: Qualifications - Add/edit GCSE subject details
  * @param {String} action add || edit
  * @param {String} id maths || english || science
  */
router.get('/application/:applicationId/qualifications/:action(add|edit)/:type(gcse-subject|gcse-equivalent)/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id
  const applicationId = req.params.applicationId

  let formaction = req.session.data.referrer
  if (action === 'add') {
    formaction = `/application/${applicationId}/qualifications/next?prev=${id}`
  }

  res.render('application/qualifications/gcse-details', {
    applicationId,
    action,
    formaction,
    id,
    international: req.params.type === 'gcse-equivalent'
  })
})

/**
  * Application: Qualifications - Degree/GCSE answer branching
  * @param {String} action add || edit
  * @param {String} category degree || gcse
  * @param {String} id Qualification ID
  */
router.post('/application/:applicationId/qualifications/:action(add|edit)/:category(degree|gcse)/:id/answer', (req, res) => {
  const action = req.params.action
  const category = req.params.category
  const data = req.session.data
  const id = req.params.id
  const applicationId = req.params.applicationId
  const provenance = data.applications[applicationId]['qualifications'][id]['provenance']

  let path
  if (category === 'degree') {
    if (provenance === 'domestic') {
      path = `${action}/uk-degree/${id}`
    } else {
      path = `${action}/international-degree/${id}`
    }
  }

  if (category === 'gcse') {
    if (provenance === 'domestic') {
      path = `${action}/gcse-subject/${id}`
    } else if (provenance === 'international') {
      path = `${action}/gcse-equivalent/${id}`
    } else { // If qualification missing, go to next step
      path = `next?prev=${id}`
    }
  }

  res.redirect(`/application/${applicationId}/qualifications/${path}`)
})

/**
  * Application: Qualifications - Degree/GCSE next step logic
  * Redirect to next step based on qualifications already entered
  */
router.all('/application/:applicationId/qualifications/next', (req, res) => {
  const prev = req.query.prev
  const applicationId = req.params.applicationId
  const applicationData = req.session.data.applications[applicationId]

  const mathsCompleted = applicationData['qualifications']['maths']
  const englishCompleted = applicationData['qualifications']['english']
  const scienceCompleted = applicationData['qualifications']['science']
  const primaryApplication = req.session.data['settings']['primary-application']

  let path
  if (prev === 'degree' && mathsCompleted !== true) {
    path = 'add/gcse/maths'
  } else if (prev === 'maths' && englishCompleted !== true) {
    path = 'add/gcse/english'
  } else if (prev === 'english' && scienceCompleted !== true && primaryApplication === 'true') {
    path = 'add/gcse/science'
  } else {
    path = 'review'
  }

  res.redirect(`/application/${applicationId}/qualifications/${path}`)
})

/**
  * Application: Qualifications - Add/edit other qualification
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  */
router.get('/application/:applicationId/qualifications/:action(add|edit)/other/:id', (req, res) => {
  const referrer = req.query.referrer
  const applicationId = req.params.applicationId

  res.render('application/qualifications/other', {
    applicationId,
    action: req.params.action,
    formaction: referrer || `/application/${applicationId}/qualifications/review`,
    id: req.params.id
  })
})

/**
  * Application: Your knowledge about the subject you want to teach - Add/edit subject knowledge statement
  * @param {String} action add || edit
  */
router.get('/application/:applicationId/subject-knowledge/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer
  const applicationId = req.params.applicationId

  res.render('application/subject-knowledge/index', {
    applicationId,
    action,
    formaction: referrer || `/application/${applicationId}`,
    referrer
  })
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
  * Application: Work history and school experience - Add/edit job/gap/role
  * @param {String} action add || edit
  * @param {String} type job || gap || role
  * @param {String} id ID
  */
router.get('/application/:applicationId/:section(work-history|school-experience)/:action(add|edit)/:type(job|gap|role)/:id', (req, res) => {
  const id = req.params.id
  const type = req.params.type
  const section = req.params.section
  const queryString = querystring.stringify(req.query)
  const applicationId = req.params.applicationId

  res.render(`application/${section}/${type}`, {
    applicationId,
    action: req.params.action,
    formaction: `/application/${applicationId}/${section}/update/${type}/${id}?${queryString}`,
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
  const applicationId = req.params.applicationId
  res.render(`application/${req.params.section}/${req.params.view}`, { applicationId })
})

/**
  * Application: References - Add/edit referee
  * @param {String} action add || edit
  * @param {String} id first || second
  */
router.get('/application/:applicationId/references/:action(add|edit)/referee/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id
  const applicationId = req.params.applicationId

  let formaction = req.session.data.referrer
  if (action === 'add') {
    if (id === 'first') {
      formaction = `/application/${applicationId}/references/add/referee/second`
    } else {
      formaction = `/application/${applicationId}/references/review`
    }
  }

  res.render('application/references/referee', {
    applicationId,
    action,
    formaction,
    id: req.params.id
  })
})

router.get('/application/:applicationId/references/:view', (req, res) => {
  const applicationId = req.params.applicationId
  res.render(`application/references/${req.params.view}`, { applicationId })
})

/**
  * Application: Vocation - Add/edit vocation statement
  * @param {String} action add || edit
  */
router.get('/application/:applicationId/vocation/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer
  const applicationId = req.params.applicationId

  res.render('application/vocation/index', {
    applicationId,
    action,
    formaction: referrer || `/application/${applicationId}`,
    referrer
  })
})

/**
  * Application: Interview - Add/edit interview preferences
  * @param {String} action add || edit
  */
router.get('/application/:applicationId/interview/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer
  const applicationId = req.params.applicationId

  res.render('application/interview/index', {
    applicationId,
    action,
    formaction: referrer || `/application/${applicationId}`,
    referrer
  })
})

router.all('/application/:applicationId/:view', function (req, res) {
  const applicationId = req.params.applicationId

  res.render(
    `application/${req.params.view}`,
    { applicationId },
    function (error, html) {
      if (error && error.message.includes('template not found')) {
        res.render(
          `application/${req.params.view}/index`,
          { applicationId })
      } else {
        res.send(html)
      }
    }
  )
})

router.all('/course/:view', function (req, res) {
  res.render(`course/${req.params.view}`, { paths: pickCoursePaths(req) })
})

module.exports = router
