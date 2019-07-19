const express = require('express')
const router = express.Router()
const querystring = require('querystring')

// Utils
const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5)
}

/**
  * Apply: Populate pages with course and provider details
  * @param {String} provider Provider code
  * @param {String} course Course code
  * @param {String} page Page to render
  */
router.get('/apply/:provider/:course/:page', (req, res) => {
  const page = req.params.page

  res.render(`apply/${page}`, {
    provider: req.params.provider,
    course: req.params.course
  })
})

/**
  * Profile: Work history - Add/edit missing work history
  * Note: Must be defined before next route declaration
  * @param {String} action add || edit
  */
router.get('/profile/work-history/:action/missing', (req, res) => {
  res.render(`profile/work-history/missing`, {
    action: req.params.action
  })
})

/**
  * Profile: Generate ID to add new thing
  * @param {String} section Section of the profile application
  * @param {String} thing Thing to add (i.e. qualification, job, role, etc.)
  */
router.get('/profile/:section/add/:thing', (req, res) => {
  const section = req.params.section
  const thing = req.params.thing
  const id = generateRandomString()
  const queryString = querystring.stringify(req.query)

  res.redirect(`/profile/${section}/add/${thing}/${id}?${queryString}`)
})

/**
  * Profile: Personal details
  */
router.get('/profile/personal-details/:action', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('profile/personal-details/index', {
    action,
    formaction: referrer || '/profile/personal-details/answer'
  })
})

/**
  * Profile: Personal details - answer branching
  */
router.post('/profile/personal-details/answer', (req, res) => {
  const nationality = req.session.data['candidate']['nationality']

  const eea = ['Austrian', 'Belgian', 'Bulgarian', 'Croatian', 'Cypriot', 'Czech', 'Danish', 'Dutch', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Icelandic', 'Irish', 'Italian', 'Latvian', 'Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Maltese', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Slovak', 'Slovenian', 'Spanish', 'Swedish', 'Swiss', 'British']

  if (eea.includes(nationality)) {
    res.redirect('/profile')
  } else {
    res.redirect('/profile/personal-details/residency-status/add')
  }
})

/**
  * Profile: Residency status
  */
router.get('/profile/personal-details/residency-status/:action', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('profile/personal-details/residency-status', {
    action,
    formaction: referrer || '/profile/'
  })
})

/**
  * Profile: Contact details - answer branching
  */
router.post('/profile/contact-details/address-answer', (req, res) => {
  const location = req.session.data['contact-details']['address-type']

  if (location === 'domestic') {
    res.redirect('/profile/contact-details/lookup-address')
  } else {
    res.redirect('/profile')
  }
})

router.get('/profile/contact-details/address/:action', (req, res) => {
  const referrer = req.query.referrer

  res.render('profile/contact-details/address', {
    action: req.params.action,
    formaction: referrer || '/profile/contact-details/review'
  })
})

/**
  * Profile: Qualifications - Add/edit degree or GCSE
  * @param {String} action add || edit
  * @param {String} category degree || gcse
  * @param {String} id Qualification ID
  */
router.get('/profile/qualifications/:action/:category(degree|gcse)/:id', (req, res) => {
  const referrer = req.query.referrer
  const action = req.params.action
  const category = req.params.category
  const id = req.params.id

  res.render(`profile/qualifications/${category}`, {
    action,
    formaction: `/profile/qualifications/${action}/${category}/${id}/answer`,
    id,
    referrer
  })
})

/**
  * Profile: Qualifications - Add/edit UK/international degree details
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  */
router.get('/profile/qualifications/:action/:type(uk-degree|international-degree)/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  let formaction = req.session.data.referrer
  if (action === 'add') {
    formaction = '/profile/qualifications/next?prev=degree'
  }

  res.render('profile/qualifications/degree-details', {
    action,
    formaction,
    id,
    international: req.params.type === 'international-degree'
  })
})

/**
  * Profile: Qualifications - Add/edit GCSE subject details
  * @param {String} action add || edit
  * @param {String} id maths || english || science
  */
router.get('/profile/qualifications/:action/:type(gcse-subject|gcse-equivalent)/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  let formaction = req.session.data.referrer
  if (action === 'add') {
    formaction = `/profile/qualifications/next?prev=${id}`
  }

  res.render('profile/qualifications/gcse-details', {
    action,
    formaction,
    id,
    international: req.params.type === 'gcse-equivalent'
  })
})

/**
  * Profile: Qualifications - Degree/GCSE answer branching
  * @param {String} action add || edit
  * @param {String} category degree || gcse
  * @param {String} id Qualification ID
  */
router.post('/profile/qualifications/:action/:category(degree|gcse)/:id/answer', (req, res) => {
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

  res.redirect(`/profile/qualifications/${path}`)
})

/**
  * Profile: Qualifications - Degree/GCSE next step logic
  * Redirect to next step based on qualifications already entered
  */
router.all('/profile/qualifications/next', (req, res) => {
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

  res.redirect(`/profile/qualifications/${path}`)
})

/**
  * Profile: Qualifications - Add/edit other qualification
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  */
router.get('/profile/qualifications/:action/other/:id', (req, res) => {
  const referrer = req.query.referrer

  res.render('profile/qualifications/other', {
    action: req.params.action,
    formaction: referrer || '/profile/qualifications/review',
    id: req.params.id
  })
})

/**
  * Profile: Subject knowledge - Add/edit subject knowledge statement
  * @param {String} action add || edit
  */
router.get('/profile/subject-knowledge/:action', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('profile/subject-knowledge/index', {
    action,
    formaction: referrer || '/profile/'
  })
})

/**
  * Profile: Language skills - Add/edit question
  * @param {String} action add || edit
  */
router.get('/profile/language-skills/:action', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('profile/language-skills/index', {
    action,
    formaction: referrer || '/profile/'
  })
})

/**
  * Profile: Work history and school experience - Add/edit job/gap/role
  * @param {String} action add || edit
  * @param {String} type job || gap || role
  * @param {String} id ID
  */
router.get('/profile/:section(work-history|school-experience)/:action/:type(job|gap|role)/:id', (req, res) => {
  const id = req.params.id
  const type = req.params.type
  const section = req.params.section
  const queryString = querystring.stringify(req.query)

  res.render(`profile/${section}/${type}`, {
    action: req.params.action,
    formaction: `/profile/${section}/update/${type}/${id}?${queryString}`,
    id,
    start: `${req.query.start}`,
    end: `${req.query.end}`
  })
})

/**
  * Profile: Work history - Update job/gap data
  * Convert individual date components into ISO 8601 date strings
  * @param {String} type job || gap
  * @param {String} id Job/gap ID
  */
router.post('/profile/:section(work-history|school-experience)/update/:type(job|gap|role)/:id', (req, res) => {
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

  res.redirect(req.query.referrer || `/profile/${section}/review`)
})

/**
  * Profile: References - Add/edit referee
  * @param {String} action add || edit
  * @param {String} id principle || secondary
  */
router.get('/profile/references/:action/referee/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  let formaction = req.session.data.referrer
  if (action === 'add') {
    if (id === 'principle') {
      formaction = '/profile/references/add/referee/secondary'
    } else {
      formaction = '/profile/references/review'
    }
  }

  res.render('profile/references/referee', {
    action,
    formaction,
    id: req.params.id
  })
})

/**
  * Profile: Vocation - Add/edit vocation statement
  * @param {String} action add || edit
  */
router.get('/profile/vocation/:action', (req, res) => {
  const action = req.params.action
  const referrer = req.query.referrer

  res.render('profile/vocation/index', {
    action,
    formaction: referrer || '/profile/'
  })
})

module.exports = router
