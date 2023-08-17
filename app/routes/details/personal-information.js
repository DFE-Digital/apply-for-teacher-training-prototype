const utils = require('../../utils')

module.exports = router => {
  // First page
  router.get('/details/:applicationId/personal-information', (req, res) => {
    const { referrer } = req.query

    res.render('details/personal-information/index', {
      referrer
    })
  })
// nationality answer branching
  router.all('/details/personal-information/nationality/answer', (req, res) => {
    const data = req.session.data
    if (data.nationalities == 'Other') {
      res.redirect('/details/personal-information/immigration')
    }
     else {
      res.redirect('/details/personal-information/review')
    }
  })

  //immigration answer branching
  router.all('/details/personal-information/immigration/answer', (req, res) => {
    const data = req.session.data
    if (data.immigration == 'Yes') {
      res.redirect('/details/personal-information/immigration-status')
    }
     else {
      res.redirect('/details/personal-information/review')
    }
  })

   // Render review page after immigration status question
  router.post('/details/personal-information/immigration-status', (req, res) => {
    const data = req.session.data

    res.redirect(`/details/personal-information/review`)
  })

  // Update immigration status
  router.post('/details/:applicationId/personal-information/immigration-status', (req, res) => {
    const { applicationId } = req.params

    res.redirect(`/details/${applicationId}/personal-information/review`)
  })

  // Render other personal information pages
  router.get('/details/:applicationId/personal-information/:view', (req, res) => {
    const { view } = req.params
    const { referrer } = req.query

    res.render(`application/personal-information/${view}`, {
      referrer
    })
  })
}
