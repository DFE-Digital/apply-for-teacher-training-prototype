
/**
 * Check you can use this service routes
 */
module.exports = router => {
  // Have you already started an application on UCAS?
  router.post('/check-you-can-use-this-service/application-on-ucas', (req, res) => {
    if (req.session.data.answer === 'yes') {
      res.redirect('/check-you-can-use-this-service/recommend-ucas')
    } else {
      res.redirect('/check-you-can-use-this-service/citizenship')
    }
  })

  // Are you a citizen of the UK or the EU?
  router.post('/check-you-can-use-this-service/citizenship', (req, res) => {
    if (req.session.data.answer === 'yes') {
      res.redirect('/check-you-can-use-this-service/qualifications')
    } else {
      res.redirect('/check-you-can-use-this-service/not-ready')
    }
  })

  // Did you gain all your qualifications at institutions based in the UK?
  router.post('/check-you-can-use-this-service/qualifications', (req, res) => {
    if (req.session.data.answer === 'yes') {
      res.redirect('/account/create-account')
    } else {
      res.redirect('/check-you-can-use-this-service/not-ready')
    }
  })
}
