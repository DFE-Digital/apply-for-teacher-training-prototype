const express = require('express')
const router = express.Router()

// Application: Personal details
router.post('/profile/personal-details/answer', (req, res) => {
  let nationality = req.session.data['nationality']

  let eea = ['Austrian', 'Belgian', 'Bulgarian', 'Croatian', 'Cypriot', 'Czech', 'Danish', 'Dutch', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Icelandic', 'Irish', 'Italian', 'Latvian', 'Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Maltese', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Slovak', 'Slovenian', 'Spanish', 'Swedish', 'Swiss', 'British']

  if (eea.includes(nationality)) {
    res.redirect('/profile')
  } else {
    res.redirect('/profile/personal-details/residency-status')
  }
})

// Application: Contact details
router.post('/profile/contact-details/address-answer', (req, res) => {
  let location = req.session.data['address-location']

  if (location === 'domestic') {
    res.redirect('/profile/contact-details/lookup-address')
  } else {
    res.redirect('/profile/contact-details/enter-address')
  }
})

// Application: Degrees
router.post('/profile/academic-qualifications/degree-provenance-answer', (req, res) => {
  let provenance = req.session.data['degree-provenance']

  if (provenance === 'domestic') {
    res.redirect('/profile/academic-qualifications/add-degree')
  } else {
    res.redirect('/profile/academic-qualifications/add-international-degree')
  }
})

router.get('/profile/academic-qualifications/add-degree', (req, res) => {
  res.render('profile/academic-qualifications/degree', {
    action: 'add',
    formAction: '/profile/academic-qualifications',
    title: 'Add degree',
    buttonText: 'Save and continue'
  })
})

router.get('/profile/academic-qualifications/add-international-degree', (req, res) => {
  res.render('profile/academic-qualifications/degree', {
    international: true,
    action: 'add',
    formAction: '/profile/academic-qualifications',
    title: 'Add international degree',
    buttonText: 'Save and continue'
  })
})

router.get('/profile/academic-qualifications/edit-degree', (req, res) => {
  res.render('profile/academic-qualifications/degree', {
    action: 'edit',
    formAction: '/profile/academic-qualifications/review',
    title: 'Edit degree',
    buttonText: 'Save changes'
  })
})

router.get('/profile/academic-qualifications/edit-international-degree', (req, res) => {
  res.render('profile/academic-qualifications/degree', {
    international: true,
    action: 'edit',
    formAction: '/profile/academic-qualifications/review',
    title: 'Edit international degree',
    buttonText: 'Save changes'
  })
})

// Application: GCSEs
router.get('/profile/academic-qualifications/add-maths-gcse', (req, res) => {
  res.render('profile/academic-qualifications/gcse', {
    action: 'add',
    formAction: '/profile/academic-qualifications/add-english-gcse',
    title: 'Add maths GCSE or equivalent',
    type: 'english-qualification',
    buttonText: 'Save and continue'
  })
})

router.get('/profile/academic-qualifications/edit-maths-gcse', (req, res) => {
  res.render('profile/academic-qualifications/gcse', {
    action: 'edit',
    formAction: '/profile/academic-qualifications/review',
    title: 'Edit maths GCSE or equivalent',
    type: 'english-qualification',
    buttonText: 'Save changes'
  })
})

router.get('/profile/academic-qualifications/add-english-gcse', (req, res) => {
  res.render('profile/academic-qualifications/gcse', {
    action: 'add',
    formAction: '/profile/academic-qualifications/add-science-gcse',
    title: 'Add English GCSE or equivalent',
    type: 'english-qualification',
    buttonText: 'Save and continue'
  })
})

router.get('/profile/academic-qualifications/edit-english-gcse', (req, res) => {
  res.render('profile/academic-qualifications/gcse', {
    action: 'edit',
    formAction: '/profile/academic-qualifications/review',
    title: 'Edit english GCSE or equivalent',
    type: 'english-qualification',
    buttonText: 'Save changes'
  })
})

router.get('/profile/academic-qualifications/add-science-gcse', (req, res) => {
  res.render('profile/academic-qualifications/gcse', {
    action: 'add',
    formAction: '/profile/academic-qualifications/add-qualification',
    title: 'Add science GCSE or equivalent',
    type: 'science-qualification',
    buttonText: 'Save and continue'
  })
})

router.get('/profile/academic-qualifications/edit-science-gcse', (req, res) => {
  res.render('profile/academic-qualifications/gcse', {
    action: 'edit',
    formAction: '/profile/academic-qualifications/review',
    title: 'Edit science GCSE or equivalent',
    type: 'science-qualification',
    buttonText: 'Save changes'
  })
})

// Application: Other qualifications
router.get('/profile/academic-qualifications/add-qualification', (req, res) => {
  res.render('profile/academic-qualifications/qualification', {
    action: 'add',
    formAction: '/profile/academic-qualifications',
    title: 'Add qualification',
    buttonText: 'Save and continue'
  })
})

router.get('/profile/academic-qualifications/edit-qualification', (req, res) => {
  res.render('profile/academic-qualifications/qualification', {
    action: 'edit',
    formAction: '/profile/academic-qualifications/review',
    title: 'Edit qualification',
    buttonText: 'Save changes'
  })
})

// Application: Work history
router.get('/profile/work-history/add-job', (req, res) => {
  res.render('profile/work-history/job', {
    action: 'add',
    title: 'Add job',
    buttonText: 'Save and continue'
  })
})

router.get('/profile/work-history/edit-job', (req, res) => {
  res.render('profile/work-history/job', {
    action: 'edit',
    title: 'Edit job',
    buttonText: 'Save changes'
  })
})

// Application: School experience
router.get('/profile/school-experience/add-role', (req, res) => {
  res.render('profile/school-experience/role', {
    action: 'add',
    title: 'Add role',
    buttonText: 'Save and continue'
  })
})

router.get('/profile/school-experience/edit-role', (req, res) => {
  res.render('profile/school-experience/role', {
    action: 'edit',
    title: 'Edit role',
    buttonText: 'Save changes'
  })
})

// Application: References
router.get('/profile/references/add-principle-referee', (req, res) => {
  res.render('profile/references/referee', {
    action: 'add',
    formAction: '/profile/references/add-secondary-referee',
    title: 'Add principle referee',
    type: 'principle',
    buttonText: 'Save and continue'
  })
})

router.get('/profile/references/edit-principle-referee', (req, res) => {
  res.render('profile/references/referee', {
    action: 'edit',
    formAction: '/profile/references/review',
    title: 'Edit principle referee',
    type: 'principle',
    buttonText: 'Save changes'
  })
})

router.get('/profile/references/add-secondary-referee', (req, res) => {
  res.render('profile/references/referee', {
    action: 'add',
    formAction: '/profile/references/review',
    title: 'Add secondary referee',
    type: 'secondary',
    buttonText: 'Save and continue'
  })
})

router.get('/profile/references/edit-secondary-referee', (req, res) => {
  res.render('profile/references/referee', {
    action: 'edit',
    formAction: '/profile/references/review',
    title: 'Edit secondary referee',
    type: 'secondary',
    buttonText: 'Save changes'
  })
})

module.exports = router
