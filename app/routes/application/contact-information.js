const utils = require('../../utils')

module.exports = router => {

  // Address type answer branching
  router.all('/application/contact-information/where-do-you-live/answer', (req, res) => {

    const data = req.session.data
    if (data.livesInUk == 'yes') {
      res.redirect(`/application/contact-information/uk-address`)
    } else {
      res.redirect(`/application/contact-information/international-address`)
    }
  })
}
