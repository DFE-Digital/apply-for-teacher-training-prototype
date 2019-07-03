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

// Application: Degrees
// Redirect to ‘Add a degree’ page using generated ID
router.get('/profile/qualifications/degree/add', (req, res) => {
  let id = generateRandomString()

  res.redirect(`/profile/qualifications/degree/add/${id}`)
})

// Render (add/edit) degree page
router.get('/profile/qualifications/degree/:action/:id', (req, res) => {
  res.render('profile/qualifications/degree', {
    action: req.params.action,
    id: req.params.id
  })
})

// Redirect to (add/edit) degree details based on degree provenance
router.post('/profile/qualifications/degree/:action/:id/answer', (req, res) => {
  const id = req.params.id
  let provenance = req.session.data['qualifications'][id]['provenance']

  if (provenance === 'domestic') {
    res.redirect(`/profile/qualifications/uk-degree/add/${id}`)
  } else {
    res.redirect(`/profile/qualifications/international-degree/add/${id}`)
  }
})

// Render (add/edit) (UK/international) degree details page
router.get('/profile/qualifications/:provenance/:action/:id', (req, res) => {
  res.render('profile/qualifications/degree-details', {
    action: req.params.action,
    id: req.params.id,
    international: (req.params.provenance === 'international-degree')
  })
})

// Redirect to next step based on application completion
router.post('/profile/qualifications/degree/add/:id/next', (req, res) => {
  let maths = req.session.data['qualifications']['maths']

  if (maths !== true) {
    res.redirect('/profile/qualifications/subject/add/maths')
  } else {
    res.redirect('/profile/qualifications/review')
  }
})

// Application: Subject branch (GCSE or equivalent)
router.get('/profile/qualifications/subject/:action/:subject', (req, res) => {
  const action = req.params.action
  const subject = req.params.subject

  res.render('profile/qualifications/subject', {
    action,
    formAction: `/profile/qualifications/subject-answer/${subject}/${action}`,
    subject
  })
})

router.post('/profile/qualifications/subject-answer/:action/:subject', (req, res) => {
  const action = req.params.action
  const subject = req.params.subject
  let gcse = req.session.data['branch'][subject]

  let next = 'review'
  if (action === 'add') {
    switch (subject) {
      case 'english':
        next = 'subject/add/science'
        break
      case 'maths':
        next = 'subject/add/english'
        break
      default:
        next = 'review'
    }
  }

  if (gcse === 'domestic') {
    res.redirect(`/profile/qualifications/${subject}/${action}/gcse`)
  } else if (gcse === 'international') {
    res.redirect(`/profile/qualifications/${subject}/${action}/equivalent`)
  } else { // If qualification missing, go to next step
    res.redirect(`/profile/qualifications/${next}`)
  }
})

// Application: Subject GCSE
router.get('/profile/qualifications/:subject/:action/gcse', (req, res) => {
  res.render('profile/qualifications/subject-gcse', {
    action: req.params.action,
    subject: req.params.subject
  })
})

// Application: Subject equivalent
router.get('/profile/qualifications/:subject/:action/equivalent', (req, res) => {
  res.render('profile/qualifications/subject-equivalent', {
    action: req.params.action,
    subject: req.params.subject
  })
})

// Application: Other qualifications
router.get('/profile/qualifications/other/add', (req, res) => {
  let id = generateRandomString()

  res.redirect(`/profile/qualifications/other/add/${id}`)
})

router.get('/profile/qualifications/other/:action/:id', (req, res) => {
  res.render('profile/qualifications/other', {
    action: req.params.action,
    id: req.params.id
  })
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

// Application: References
router.get('/profile/references/referee/:action/:id', (req, res) => {
  res.render('profile/references/referee', {
    action: req.params.action,
    id: req.params.id
  })
})

module.exports = router
