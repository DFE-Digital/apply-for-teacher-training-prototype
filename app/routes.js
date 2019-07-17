const express = require('express')
const router = express.Router()
const querystring = require('querystring')

// Utils
const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5)
}

/**
  * Apply: Populate pages with course and provider details
  *
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
  *
  * @param {String} action add || edit
  *
  */
router.get('/profile/work-history/:action/missing', (req, res) => {
  res.render(`profile/work-history/missing`, {
    action: req.params.action
  })
})

/**
  * Profile: Generate ID to add new thing
  *
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
router.post('/profile/personal-details/answer', (req, res) => {
  const nationality = req.session.data['candidate']['nationality']

  const eea = ['Austrian', 'Belgian', 'Bulgarian', 'Croatian', 'Cypriot', 'Czech', 'Danish', 'Dutch', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Icelandic', 'Irish', 'Italian', 'Latvian', 'Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Maltese', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Slovak', 'Slovenian', 'Spanish', 'Swedish', 'Swiss', 'British']

  if (eea.includes(nationality)) {
    res.redirect('/profile')
  } else {
    res.redirect('/profile/personal-details/residency-status')
  }
})

/**
  * Profile: Contact details
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
  res.render('profile/contact-details/address', {
    action: req.params.action
  })
})

/**
  * Profile: Qualifications - Add/edit degree or GCSE
  *
  * @param {String} action add || edit
  * @param {String} category degree || gcse
  * @param {String} id Qualification ID
  *
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
  *
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  *
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
  *
  * @param {String} action add || edit
  * @param {String} id maths || english || science
  *
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
  * Profile: Qualifications - Degree/GCSE branch logic
  *
  * @param {String} action add || edit
  * @param {String} category degree || gcse
  * @param {String} id Qualification ID
  *
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
  *
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  *
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
  * Profile: Work history - Add/edit job/gap
  *
  * @param {String} action add || edit
  * @param {String} type job || gap
  * @param {String} id Job ID
  *
  */
router.get('/profile/work-history/:action/:type(job|gap)/:id', (req, res) => {
  const id = req.params.id
  const type = req.params.type

  res.render(`profile/work-history/${type}`, {
    action: req.params.action,
    formaction: `/profile/work-history/update/${type}/${id}`,
    id,
    start: `${req.query.start}`,
    end: `${req.query.end}`
  })
})

/**
  * Profile: Work history - Update job/gap data
  * Convert individual date components into ISO 8601 date strings
  *
  * @param {String} type job || gap
  * @param {String} id Job/gap ID
  *
  */
router.post('/profile/work-history/update/:type(job|gap)/:id', (req, res) => {
  const id = req.params.id

  const startMonth = req.body[`${id}-start-date-month`]
  const startYear = req.body[`${id}-start-date-year`]
  const startDate = `${startYear}-${startMonth}`

  const endMonth = req.body[`${id}-end-date-month`]
  const endYear = req.body[`${id}-end-date-year`]
  const endDate = `${endYear}-${endMonth}`

  req.session.data['work-history'][id]['start-date'] = startDate
  req.session.data['work-history'][id]['end-date'] = endDate

  res.redirect(req.query.next || '/profile/work-history/review')
})

/**
  * Profile: School experience - Add/edit role
  *
  * @param {String} action add || edit
  * @param {String} id Role ID
  *
  */
router.get('/profile/school-experience/:action/role/:id', (req, res) => {
  const referrer = req.query.referrer

  res.render('profile/school-experience/role', {
    action: req.params.action,
    formaction: referrer || '/profile/school-experience/review',
    id: req.params.id
  })
})

/**
  * Profile: References - Add/edit referee
  *
  * @param {String} action add || edit
  * @param {String} id principle || secondary
  *
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

module.exports = router
