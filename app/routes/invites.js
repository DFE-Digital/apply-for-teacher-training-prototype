/**
 * Account routes
 */
module.exports = router => {

  router.get('/candidate-pool/:id/invite', (req, res) => {
    const { id } = req.params

    res.render('candidate-pool/invite/index', {
      id
    })
  })

  router.post('/candidate-pool/:id/invite', (req, res) => {
    const { id } = req.params
    const invite = req.session.data.invites[id]
    const inviteResponse = req.body.inviteResponse

    if ( inviteResponse == "true" ) {
      req.session.data.applications ||= {}
      req.session.data.applications[id] = { status: 'Draft', providerName: invite.providerName, course: invite.course, placement: "Bath Spa University" }
      invite.status = "Accepted"

      res.redirect(`/applications/${id}/review-application`)
    } else {

      res.redirect(`/candidate-pool/${id}/invite/decline`)
    }
  })

  router.get('/candidate-pool/:id/invite/decline', (req, res) => {
    const { id } = req.params

    res.render('candidate-pool/invite/decline', {
      id
    })
  })

  router.post('/candidate-pool/:id/invite/decline', (req, res) => {
    const { id } = req.params
    const invite = req.session.data.invites[id]
    const showDeclineBanner = 'declined'

    invite.status = "Declined"
    invite.reason = req.body.declineReason

    res.render(`/candidate-pool/sharing`, { showDeclineBanner })
  })


}
