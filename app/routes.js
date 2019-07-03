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
// Redirect to add :qualification page using a generated ID
router.get('/profile/qualifications/:category/add', (req, res) => {
  const category = req.params.category
  let id = generateRandomString()

  res.redirect(`/profile/qualifications/${category}/add/${id}`)
})

// Render (add/edit) :qualification page
router.get('/profile/qualifications/:category/:action/:id', (req, res) => {
  const category = req.params.category

  res.render(`profile/qualifications/${category}`, {
    action: req.params.action,
    id: req.params.id
  })
})

// Redirect to (add/edit) qualification details based on its provenance
router.post('/profile/qualifications/:category/:action/:id/answer', (req, res) => {
  const category = req.params.category
  const action = req.params.action
  const id = req.params.id
  let provenance = req.session.data['qualifications'][id]['provenance']

  if (category === 'degree') {
    if (provenance === 'domestic') {
      res.redirect(`/profile/qualifications/uk-degree/${action}/${id}`)
    } else {
      res.redirect(`/profile/qualifications/international-degree/${action}/${id}`)
    }
  }

  if (category === 'gcse') {
    res.redirect(`/profile/qualifications/gcse-subject/${action}/${id}`)
  } else if (provenance === 'international') {
    res.redirect(`/profile/qualifications/gcse-equivalent/${action}/${id}`)
  } else { // If qualification missing, go to next step
    res.redirect(`/profile/qualifications/gcse/${id}/next`)
  }
})

// Render (add/edit) :qualification details page
router.get('/profile/qualifications/:category/:action/:id', (req, res) => {
  const category = req.params.category

  if (category.includes('degree')) {
    res.render('profile/qualifications/degree-details', {
      action: req.params.action,
      id: req.params.id,
      international: (category === 'international-degree')
    })
  }

  if (category.includes('gcse')) {
    res.render('profile/qualifications/gcse-details', {
      action: req.params.action,
      id: req.params.id,
      international: (category === 'gcse-equivalent')
    })
  }
})

// Redirect to next step based on required qualifications already entered
router.post('/profile/qualifications/:qualification/next/:id', (req, res) => {
  const id = req.params.id
  const qualification = req.params.qualification

  let maths = req.session.data['qualifications']['maths']
  let english = req.session.data['qualifications']['english']
  let science = req.session.data['qualifications']['science']
  let path = 'review'

  if (qualification === 'degree') {
    if (maths !== true) {
      path = 'gcse/add/maths'
    }
  }

  if (qualification === 'gcse') {
    if (id === 'maths' && english !== true) {
      path = 'gcse/add/english'
    }

    if (id === 'english' && science !== true) {
      path = 'gcse/add/science'
    }
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

// Application: References
router.get('/profile/references/referee/:action/:id', (req, res) => {
  res.render('profile/references/referee', {
    action: req.params.action,
    id: req.params.id
  })
})

module.exports = router
