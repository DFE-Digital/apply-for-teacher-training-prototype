const utils = require('./../../utils')

module.exports = router => {
  // Generate new id and redirect to that qualification
  router.get('/application/other-qualifications/add', (req, res) => {
    const id = utils.generateRandomString()
    res.redirect(`/application/other-qualifications/${id}/type`)
  })

  // Render review page
  router.get('/application/other-qualifications/review', (req, res) => {
    const data = req.session.data

    if (data.qualificationsAdded === 'yes' && Object.keys(data.otherQualifications).length === 0) {
      // Redirect back to guard question if there are no qualifications but they didn't answer No to the guard question
      res.redirect('/application/other-qualifications')
    } else {
      res.render('application/other-qualifications/review')
    }
  })

  router.post('/application/other-qualifications/answer', (req, res) => {
    if (req.session.data.otherQualificationsAdded === 'yes') {
      res.redirect('/application/other-qualifications/add')
    } else {
      res.redirect('/application/other-qualifications/review')
    }
  })

  // Render type page
  router.get('/application/other-qualifications/:id/type', (req, res) => {
    const { id } = req.params
    res.render('application/other-qualifications/type', {
      id
    })
  })

  // Render delete page
  router.get('/application/other-qualifications/:id/delete', (req, res) => {
    const { id } = req.params
    res.render('application/other-qualifications/delete', {
      id
    })
  })

  // Delete a qualification
  router.post('/application/other-qualifications/:id/delete', (req, res) => {
    const { id } = req.params
    delete req.session.data.otherQualifications[id]
    res.redirect('/application/other-qualifications/review')
  })

  // Render details page
  router.get('/application/other-qualifications/:id/details', (req, res) => {
    const { id } = req.params

    res.render('application/other-qualifications/details', {
      id
    })
  })
}
