const utils = require('./../../utils')

module.exports = router => {
  // Generate new id and redirect to that qualification
  router.get('/details/other-qualifications/add', (req, res) => {
    const id = utils.generateRandomString()
    res.redirect(`/details/other-qualifications/${id}/type`)
  })

     // Unpaid experience review page
     router.get('/details/other-qualifications/review', (req, res) => {

      req.session.data.references ||= {}
      const applications = (req.session.data.applications ? Object.values(req.session.data.applications) : [] )
      const applicationsAwaitingDecisionOrReceivedOffer = applications.filter(a => (['Awaiting decision', "Offer received"].includes(a.status)))
      const numberOfApplicationsLeft = 4 - (applicationsAwaitingDecisionOrReceivedOffer.length)
  
      res.render(`details/other-qualifications/review`, {
        id: req.params.id,
        numberOfApplicationsLeft
      })
    })

  // Render review page
  router.get('/details/other-qualifications/review', (req, res) => {
    const data = req.session.data

    if (data.qualificationsAdded === 'yes' && Object.keys(data.otherQualifications).length === 0) {
      // Redirect back to guard question if there are no qualifications but they didn't answer No to the guard question
      res.redirect('/details/other-qualifications')
    } else {
      res.render('details/other-qualifications/review')
    }
  })

  router.post('/details/other-qualifications/answer', (req, res) => {
    if (req.session.data.otherQualificationsAdded === 'yes') {
      res.redirect('/details/other-qualifications/add')
    } else {
      res.redirect('/details/other-qualifications/review')
    }
  })

  // Render type page
  router.get('/details/other-qualifications/:id/type', (req, res) => {
    const { id } = req.params
    res.render('details/other-qualifications/type', {
      id
    })
  })

  // Render delete page
  router.get('/details/other-qualifications/:id/delete', (req, res) => {
    const { id } = req.params
    res.render('details/other-qualifications/delete', {
      id
    })
  })

  // Delete a qualification
  router.post('/details/other-qualifications/:id/delete', (req, res) => {
    const { id } = req.params
    delete req.session.data.otherQualifications[id]
    res.redirect('/details/other-qualifications/review')
  })

  // Render details page
  router.get('/details/other-qualifications/:id/details', (req, res) => {
    const { id } = req.params

    res.render('details/other-qualifications/details', {
      id
    })
  })
}
