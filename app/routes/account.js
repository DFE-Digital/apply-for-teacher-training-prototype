/**
 * Account routes
 */
module.exports = router => {
  router.get('/account/eligibility/answer', (req, res) => {
    const eligibileNationality = req.session.data['eligibile-nationality']
    const eligibileEquivalencies = req.session.data['eligibile-equivalencies']
    if (eligibileNationality === 'no' || eligibileEquivalencies === 'no') {
      res.redirect('/account/ineligible') // Show UCAS Apply information
    } else {
      res.redirect('/account/create-account') // Create an account
    }
  })
}
