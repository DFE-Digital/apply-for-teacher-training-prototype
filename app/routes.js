const express = require('express')
const router = express.Router()

// Utils
const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5)
}

// Application: Personal details
router.post('/profile/personal-details/answer', (req, res) => {
  let nationality = req.session.data['candidate']['nationality']

  let eea = ['Austrian', 'Belgian', 'Bulgarian', 'Croatian', 'Cypriot', 'Czech', 'Danish', 'Dutch', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Icelandic', 'Irish', 'Italian', 'Latvian', 'Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Maltese', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Slovak', 'Slovenian', 'Spanish', 'Swedish', 'Swiss', 'British']

  if (eea.includes(nationality)) {
    res.redirect('/profile/personal-details/review')
  } else {
    res.redirect('/profile/personal-details/residency-status')
  }
})

// Application: Contact details
router.post('/profile/contact-details/address-answer', (req, res) => {
  let location = req.session.data['contact-details']['address-type']

  if (location === 'domestic') {
    res.redirect('/profile/contact-details/lookup-address')
  } else {
    res.redirect('/profile/contact-details/review')
  }
})

router.get('/profile/contact-details/address/:action', (req, res) => {
  res.render('profile/contact-details/address', {
    action: req.params.action
  })
})

// Application: Qualifications
// Redirect to add qualification page using a generated ID
router.get('/profile/qualifications/add/:category', (req, res) => {
  const category = req.params.category
  const id = generateRandomString()

  res.redirect(`/profile/qualifications/add/${category}/${id}`)
})

// Render degree qualification branch page
router.get('/profile/qualifications/:action/degree/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  res.render('profile/qualifications/degree', {
    action,
    formAction: `/profile/qualifications/${action}/degree/${id}/answer`,
    id
  })
})

// Render UK degree qualification detail page
router.get('/profile/qualifications/:action/uk-degree/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  let formAction
  if (action === 'add') {
    formAction = '/profile/qualifications/next?prev=degree'
  } else {
    formAction = '/profile/qualifications/review'
  }

  res.render('profile/qualifications/degree-details', {
    action,
    formAction,
    id
  })
})

// Render international degree qualification detail page
router.get('/profile/qualifications/:action/international-degree/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  let formAction
  if (action === 'add') {
    formAction = '/profile/qualifications/next?prev=degree'
  } else {
    formAction = '/profile/qualifications/review'
  }

  res.render('profile/qualifications/degree-details', {
    action,
    formAction,
    id,
    international: true
  })
})

// Render GCSE qualification branch page (id = subject)
router.get('/profile/qualifications/:action/gcse/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  res.render('profile/qualifications/gcse', {
    action,
    formAction: `/profile/qualifications/${action}/gcse/${id}/answer`,
    id
  })
})

// Render UK degree qualification detail page
router.get('/profile/qualifications/:action/gcse-subject/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  let formAction
  if (action === 'add') {
    formAction = `/profile/qualifications/next?prev=${id}`
  } else {
    formAction = '/profile/qualifications/review'
  }

  res.render('profile/qualifications/gcse-details', {
    action,
    formAction,
    id
  })
})

// Render international degree qualification detail page
router.get('/profile/qualifications/:action/gcse-equivalent/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  let formAction
  if (action === 'add') {
    formAction = `/profile/qualifications/next?prev=${id}`
  } else {
    formAction = '/profile/qualifications/review'
  }

  res.render('profile/qualifications/gcse-details', {
    action,
    formAction,
    id,
    international: true
  })
})

// Render other qualification detail page
router.get('/profile/qualifications/:action/other/:id', (req, res) => {
  res.render('profile/qualifications/other', {
    action: req.params.action,
    formAction: '/profile/qualifications/review',
    id: req.params.id
  })
})

// Redirect to (add/edit) qualification details based on its provenance
router.post('/profile/qualifications/:action/:category/:id/answer', (req, res) => {
  const action = req.params.action
  const category = req.params.category
  const id = req.params.id

  let provenance = req.session.data['qualifications'][id]['provenance']
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

// Redirect to next step based on required qualifications already entered
router.all('/profile/qualifications/next', (req, res) => {
  const prev = req.query.prev

  let maths = req.session.data['qualifications']['maths']
  let english = req.session.data['qualifications']['english']
  let science = req.session.data['qualifications']['science']
  let path

  if (prev === 'degree' && maths !== true) {
    path = 'add/gcse/maths'
  } else if (prev === 'maths' && english !== true) {
    path = 'add/gcse/english'
  } else if (prev === 'english' && science !== true) {
    path = 'add/gcse/science'
  } else {
    path = 'review'
  }

  res.redirect(`/profile/qualifications/${path}`)
})

// Application: Work history
router.get('/profile/work-history/job/add', (req, res) => {
  let id = generateRandomString()

  res.redirect(`/profile/work-history/job/add/${id}`)
})

router.get('/profile/work-history/job/:action/:id', (req, res) => {
  res.render('profile/work-history/job', {
    action: req.params.action,
    id: req.params.id
  })
})

// Application: School experience
router.get('/profile/school-experience/role/add', (req, res) => {
  let id = generateRandomString()

  res.redirect(`/profile/school-experience/role/add/${id}`)
})

router.get('/profile/school-experience/role/:action/:id', (req, res) => {
  res.render('profile/school-experience/role', {
    action: req.params.action,
    id: req.params.id
  })
})

/**
  * Application: References
  *
  * @param {String} action add/edit
  * @param {String} id principle/secondary
  *
  */
router.get('/profile/references/:action/referee/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  let formActionPath
  if (action === 'add') {
    formActionPath = (id === 'principle') ? 'add/referee/secondary' : 'review'
  } else {
    formActionPath = 'review'
  }

  res.render('profile/references/referee', {
    action: req.params.action,
    formAction: `/profile/references/${formActionPath}`,
    id: req.params.id
  })
})

module.exports = router
