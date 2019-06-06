const express = require('express')
const router = express.Router()

// Application: Personal details
router.post('/application/personal-details/answer', (req, res) => {
  let nationality = req.session.data['nationality']

  let eea = ['Austrian', 'Belgian', 'Bulgarian', 'Croatian', 'Cypriot', 'Czech', 'Danish', 'Dutch', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hungarian', 'Icelandic', 'Irish', 'Italian', 'Latvian', 'Liechtenstein citizen', 'Lithuanian', 'Luxembourger', 'Maltese', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Slovak', 'Slovenian', 'Spanish', 'Swedish', 'Swiss', 'British']

  if (eea.includes(nationality)) {
    res.redirect('/application')
  } else {
    res.redirect('/application/personal-details/residency-status')
  }
})

// Application: Contact details
router.post('/application/contact-details/address-answer', (req, res) => {
  let location = req.session.data['address-location']

  if (location === 'domestic') {
    res.redirect('/application/contact-details/lookup-address')
  } else {
    res.redirect('/application/contact-details/enter-address')
  }
})

// Application: Employment history
router.get('/application/employment-history/add-job', (req, res) => {
  res.render('application/employment-history/job', {
    action: 'add',
    title: 'Add job',
    buttonText: 'Save and continue'
  })
})

router.get('/application/employment-history/edit-job', (req, res) => {
  res.render('application/employment-history/job', {
    action: 'edit',
    title: 'Edit job',
    buttonText: 'Save changes'
  })
})

// Application: School experience
router.get('/application/school-experience/add-role', (req, res) => {
  res.render('application/school-experience/role', {
    action: 'add',
    title: 'Add role',
    buttonText: 'Save and continue'
  })
})

router.get('/application/school-experience/edit-role', (req, res) => {
  res.render('application/school-experience/role', {
    action: 'edit',
    title: 'Edit role',
    buttonText: 'Save changes'
  })
})

// Application: References
router.get('/application/references/add-principle-referee', (req, res) => {
  res.render('application/references/referee', {
    action: 'add',
    formAction: '/application/references/add-secondary-referee',
    title: 'Add principle referee',
    type: 'principle',
    buttonText: 'Save and continue'
  })
})

router.get('/application/references/edit-principle-referee', (req, res) => {
  res.render('application/references/referee', {
    action: 'edit',
    formAction: '/application/references/overview',
    title: 'Edit principle referee',
    type: 'principle',
    buttonText: 'Save changes'
  })
})

router.get('/application/references/add-secondary-referee', (req, res) => {
  res.render('application/references/referee', {
    action: 'add',
    formAction: '/application/references/overview',
    title: 'Add secondary referee',
    type: 'secondary',
    buttonText: 'Save and continue'
  })
})

router.get('/application/references/edit-secondary-referee', (req, res) => {
  res.render('application/references/referee', {
    action: 'edit',
    formAction: '/application/references/overview',
    title: 'Edit secondary referee',
    type: 'secondary',
    buttonText: 'Save changes'
  })
})

module.exports = router
