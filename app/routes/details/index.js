const utils = require('./../../utils')

module.exports = router => {

  router.get('/details', (req, res) => {

    const applications = (req.session.data.applications ? Object.values(req.session.data.applications) : [] )
    const numberOfApplicationsSubmitted = applications.filter(application => application.submittedAt).length

    res.render('details/index', {
      numberOfApplicationsSubmitted
    })
  })

}
