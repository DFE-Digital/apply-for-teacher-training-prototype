const express = require('express')
const router = express.Router()
const querystring = require('querystring')

// Utils
const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5)
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
router.get('/application/work-history/:action(add|edit)/missing', (req, res) => {
  res.render(`application/work-history/missing`, {
    action: req.params.action
  })
})

/**
  * Application: Generate ID to add new thing
  * @param {String} section Section of the application
  * @param {String} thing Thing to add (i.e. qualification, job, role, etc.)
  */
router.get('/application/:section/add/:thing', (req, res) => {
  const section = req.params.section
  const thing = req.params.thing
  const id = generateRandomString()
  const queryString = querystring.stringify(req.query)

  res.redirect(`/application/${section}/add/${thing}/${id}?${queryString}`)
})

/**
  * Application: Personal details
  */
router.get('/application/personal-details/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('application/personal-details/index', {
    action,
    formaction: referrer || '/application/personal-details/answer',
    referrer
  })
})

/**
  * Application: Personal details - answer branching
  */
router.post('/application/personal-details/answer', (req, res) => {
  const nationality = req.session.data['candidate']['nationality']

  const eea = ['Austrian', 'Belgian', 'Bulgarian', 'Croatian', 'Cypriot', 'Czech', 'Danish', 'Dutch', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Icelandic', 'Irish', 'Italian', 'Latvian', 'Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Maltese', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Slovak', 'Slovenian', 'Spanish', 'Swedish', 'Swiss', 'British']

  if (eea.includes(nationality)) {
    res.redirect('/application')
  } else {
    res.redirect('/application/personal-details/residency-status/add')
  }
})

/**
  * Application: Residency status
  */
router.get('/application/personal-details/residency-status/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('application/personal-details/residency-status', {
    action,
    formaction: referrer || '/application/',
    referrer
  })
})

/**
  * Application: Contact details
  */
router.get('/application/contact-details/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('application/contact-details/index', {
    action,
    formaction: referrer || '/application/contact-details/address-answer',
    referrer
  })
})

/**
  * Application: Contact details - answer branching
  */
router.post('/application/contact-details/address-answer', (req, res) => {
  const location = req.session.data['contact-details']['address-type']

  if (location === 'domestic') {
    res.redirect('/application/contact-details/lookup-address')
  } else {
    res.redirect('/application')
  }
})

router.get('/application/contact-details/address/:action(add|edit)', (req, res) => {
  const referrer = req.query.referrer

  res.render('application/contact-details/address', {
    action: req.params.action,
    formaction: referrer || '/application/contact-details/review',
    referrer
  })
})

/**
  * Application: Qualifications review
  */
router.get('/application/qualifications/review', (req, res) => {
  const referrer = req.query.referrer

  res.render('application/qualifications/review', {
    formaction: referrer || '/application',
    referrer
  })
})

/**
  * Application: Qualifications - Add/edit degree or GCSE
  * @param {String} action add || edit
  * @param {String} category degree || gcse
  * @param {String} id Qualification ID
  */
router.get('/application/qualifications/:action(add|edit)/:category(degree|gcse)/:id', (req, res) => {
  const referrer = req.query.referrer
  const action = req.params.action
  const category = req.params.category
  const id = req.params.id

  res.render(`application/qualifications/${category}`, {
    action,
    formaction: `/application/qualifications/${action}/${category}/${id}/answer`,
    id,
    referrer
  })
})

/**
  * Application: Qualifications - Add/edit UK/international degree details
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  */
router.get('/application/qualifications/:action(add|edit)/:type(uk-degree|international-degree)/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  let formaction = req.session.data.referrer
  if (action === 'add') {
    formaction = '/application/qualifications/next?prev=degree'
  }

  res.render('application/qualifications/degree-details', {
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
router.get('/application/qualifications/:action(add|edit)/:type(gcse-subject|gcse-equivalent)/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  let formaction = req.session.data.referrer
  if (action === 'add') {
    formaction = `/application/qualifications/next?prev=${id}`
  }

  res.render('application/qualifications/gcse-details', {
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
router.post('/application/qualifications/:action(add|edit)/:category(degree|gcse)/:id/answer', (req, res) => {
  const action = req.params.action
  const category = req.params.category
  const id = req.params.id
  const provenance = req.session.data['qualifications'][id]['provenance']

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

  res.redirect(`/application/qualifications/${path}`)
})

/**
  * Application: Qualifications - Degree/GCSE next step logic
  * Redirect to next step based on qualifications already entered
  */
router.all('/application/qualifications/next', (req, res) => {
  const prev = req.query.prev

  const mathsCompleted = req.session.data['qualifications']['maths']
  const englishCompleted = req.session.data['qualifications']['english']
  const scienceCompleted = req.session.data['qualifications']['science']
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

  res.redirect(`/application/qualifications/${path}`)
})

/**
  * Application: Qualifications - Add/edit other qualification
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  */
router.get('/application/qualifications/:action(add|edit)/other/:id', (req, res) => {
  const referrer = req.query.referrer

  res.render('application/qualifications/other', {
    action: req.params.action,
    formaction: referrer || '/application/qualifications/review',
    id: req.params.id
  })
})

/**
  * Application: Your knowledge about the subject you want to teach - Add/edit subject knowledge statement
  * @param {String} action add || edit
  */
router.get('/application/subject-knowledge/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('application/subject-knowledge/index', {
    action,
    formaction: referrer || '/application/',
    referrer
  })
})

/**
  * Application: Language skills - Add/edit question
  * @param {String} action add || edit
  */
router.get('/application/language-skills/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('application/language-skills/index', {
    action,
    formaction: referrer || '/application/',
    referrer
  })
})

/**
  * Application: Work history and school experience - Add/edit job/gap/role
  * @param {String} action add || edit
  * @param {String} type job || gap || role
  * @param {String} id ID
  */
router.get('/application/:section(work-history|school-experience)/:action(add|edit)/:type(job|gap|role)/:id', (req, res) => {
  const id = req.params.id
  const type = req.params.type
  const section = req.params.section
  const queryString = querystring.stringify(req.query)

  res.render(`application/${section}/${type}`, {
    action: req.params.action,
    formaction: `/application/${section}/update/${type}/${id}?${queryString}`,
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
router.post('/application/:section(work-history|school-experience)/update/:type(job|gap|role)/:id', (req, res) => {
  const id = req.params.id
  const section = req.params.section
  const data = req.session.data[section][id]

  // Create ISO 8601 start date
  const startDay = req.body[`${id}-start-date-day`] || '01'
  const startMonth = req.body[`${id}-start-date-month`]
  const startYear = req.body[`${id}-start-date-year`]
  data['start-date'] = false

  if (startMonth && startYear) {
    data['start-date'] = `${startYear}-${startMonth}-${startDay}`
  }

  // Create ISO 8601 end date
  const endDay = req.body[`${id}-end-date-day`] || '01'
  const endMonth = req.body[`${id}-end-date-month`]
  const endYear = req.body[`${id}-end-date-year`]
  data['end-date'] = false

  if (endMonth && endYear) {
    data['end-date'] = `${endYear}-${endMonth}-${endDay}`
  }

  res.redirect(req.query.referrer || `/application/${section}/review`)
})

/**
  * Application: References - Add/edit referee
  * @param {String} action add || edit
  * @param {String} id first || second
  */
router.get('/application/references/:action(add|edit)/referee/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  let formaction = req.session.data.referrer
  if (action === 'add') {
    if (id === 'first') {
      formaction = '/application/references/add/referee/second'
    } else {
      formaction = '/application/references/review'
    }
  }

  res.render('application/references/referee', {
    action,
    formaction,
    id: req.params.id
  })
})

/**
  * Application: Vocation - Add/edit vocation statement
  * @param {String} action add || edit
  */
router.get('/application/vocation/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('application/vocation/index', {
    action,
    formaction: referrer || '/application/',
    referrer
  })
})

/**
  * Application: Interview - Add/edit interview preferences
  * @param {String} action add || edit
  */
router.get('/application/interview/:action(add|edit)', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('application/interview/index', {
    action,
    formaction: referrer || '/application/',
    referrer
  })
})

module.exports = router
