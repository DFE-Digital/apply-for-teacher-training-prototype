module.exports = router => {
  // Address type answer branching
  router.all('/details/contact-information/where-do-you-live/answer', (req, res) => {
    const data = req.session.data
    if (data.livesInUk === 'yes') {
      res.redirect('/details/contact-information/uk-address')
    } else {
      res.redirect('/details/contact-information/international-address')
    }
  })
}
