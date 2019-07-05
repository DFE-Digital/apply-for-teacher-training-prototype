const express = require('express')
const router = express.Router()

// Utils
const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5)
}

/**
  * Profile: Generate ID to add new thing
  *
  * @param {String} section Section of the profile application
  * @param {String} thing Thing to add (i.e. qualification, job, role, etc.)
  */
router.get('/profile/:section/add/:thing', (req, res) => {
  const section = req.params.section
  const thing = req.params.thing
  let id = generateRandomString()

  res.redirect(`/profile/${section}/add/${thing}/${id}`)
})

/**
  * Profile: Personal details
  */
router.post('/profile/personal-details/answer', (req, res) => {
  let nationality = req.session.data['candidate']['nationality']

  let eea = ['Austrian', 'Belgian', 'Bulgarian', 'Croatian', 'Cypriot', 'Czech', 'Danish', 'Dutch', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Icelandic', 'Irish', 'Italian', 'Latvian', 'Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Maltese', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Slovak', 'Slovenian', 'Spanish', 'Swedish', 'Swiss', 'British']

  if (eea.includes(nationality)) {
    res.redirect('/profile/personal-details/review')
  } else {
    res.redirect('/profile/personal-details/residency-status')
  }
})

/**
  * Profile: Contact details
  */
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

/**
  * Profile: Qualifications - Add/edit degree
  *
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  *
  */
router.get('/profile/qualifications/:action/degree/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  res.render('profile/qualifications/degree', {
    action,
    formAction: `/profile/qualifications/${action}/degree/${id}/answer`,
    id
  })
})

/**
  * Profile: Qualifications - Add/edit UK degree details
  *
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  *
  */
router.get('/profile/qualifications/:action/uk-degree/:id', (req, res) => {
  const action = req.params.action
  const formActionPath = (action === 'add') ? 'next?prev=degree' : 'review'
  const id = req.params.id

  res.render('profile/qualifications/degree-details', {
    action,
    formAction: `/profile/qualifications/${formActionPath}`,
    id
  })
})

/**
  * Profile: Qualifications - Add/edit international degree details
  *
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  *
  */
router.get('/profile/qualifications/:action/international-degree/:id', (req, res) => {
  const action = req.params.action
  const formActionPath = (action === 'add') ? 'next?prev=degree' : 'review'
  const id = req.params.id

  res.render('profile/qualifications/degree-details', {
    action,
    formAction: `/profile/qualifications/${formActionPath}`,
    id,
    international: true
  })
})

/**
  * Profile: Qualifications - Add/edit GCSE subject
  *
  * @param {String} action add || edit
  * @param {String} id maths || english || science
  *
  */
router.get('/profile/qualifications/:action/gcse/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id

  res.render('profile/qualifications/gcse', {
    action,
    formAction: `/profile/qualifications/${action}/gcse/${id}/answer`,
    id
  })
})

/**
  * Profile: Qualifications - Add/edit GCSE subject details
  *
  * @param {String} action add || edit
  * @param {String} id maths || english || science
  *
  */
router.get('/profile/qualifications/:action/gcse-subject/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id
  const formActionPath = (action === 'add') ? `next?prev=${id}` : 'review'

  res.render('profile/qualifications/gcse-details', {
    action,
    formAction: `/profile/qualifications/${formActionPath}`,
    id
  })
})

/**
  * Profile: Qualifications - Add/edit GCSE equivalent details
  *
  * @param {String} action add || edit
  * @param {String} id maths || english || science
  *
  */
router.get('/profile/qualifications/:action/gcse-equivalent/:id', (req, res) => {
  const action = req.params.action
  const id = req.params.id
  const formActionPath = (action === 'add') ? `next?prev=${id}` : 'review'

  res.render('profile/qualifications/gcse-details', {
    action,
    formAction: `/profile/qualifications/${formActionPath}`,
    id,
    international: true
  })
})

/**
  * Profile: Qualifications - Add/edit other qualification details
  *
  * @param {String} action add || edit
  * @param {String} id Qualification ID
  *
  */
router.get('/profile/qualifications/:action/other/:id', (req, res) => {
  res.render('profile/qualifications/other', {
    action: req.params.action,
    formAction: '/profile/qualifications/review',
    id: req.params.id
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

/**
  * Profile: Qualifications - Degree/GCSE next step logic
  * Redirect to next step based on qualifications already entered
  */
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

/**
  * Profile: Work history - Add/edit job
  *
  * @param {String} action add || edit
  * @param {String} id Job ID
  *
  */
router.get('/profile/work-history/:action/job/:id', (req, res) => {
  res.render('profile/work-history/job', {
    action: req.params.action,
    formAction: '/profile/work-history/review',
    id: req.params.id
  })
})

/**
  * Profile: School experience - Add/edit role
  *
  * @param {String} action add || edit
  * @param {String} id Role ID
  *
  */
router.get('/profile/school-experience/:action/role/:id', (req, res) => {
  res.render('profile/school-experience/role', {
    action: req.params.action,
    formAction: '/profile/school-experience/review',
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
