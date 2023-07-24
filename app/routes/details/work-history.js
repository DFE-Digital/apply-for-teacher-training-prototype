const utils = require('./../../utils')

module.exports = router => {
  // Review page
  router.get('/details/work-history/review', (req, res) => {
    const newId = utils.generateRandomString()
    const applications = (req.session.data.applications ? Object.values(req.session.data.applications) : [] )
    const applicationsAwaitingDecisionOrReceivedOffer = applications.filter(a => (['Awaiting decision', "Offer received"].includes(a.status)))
    const numberOfApplicationsLeft = 4 - (applicationsAwaitingDecisionOrReceivedOffer.length)

    res.render('details/work-history/review', {
      newId,
      id: req.params.id,
      numberOfApplicationsLeft
    })
  })

  // Add a job
  router.get('/details/work-history/job/add', (req, res) => {
    const newId = utils.generateRandomString()
    res.render(`details/work-history/job/${newId}`)
  })

  // Add a break
  router.get('/details/work-history/break/add', (req, res) => {
    const newId = utils.generateRandomString()
    res.redirect(`/details/work-history/break/${newId}`)
  })

  // Job details page
  router.get('/details/work-history/job/:id', (req, res) => {
    const { id } = req.params
    res.render('details/work-history/job', {
      id
    })
  })

  // remove job page
  router.get('/details/work-history/job/:id/delete', (req, res) => {
    const { id } = req.params

    res.render('details/work-history/delete-job', {
      id
    })
  })

  // remove job page
  router.post('/details/work-history/job/:id/delete', (req, res) => {
    const { id } = req.params

    delete req.session.data.workHistory[id]

    res.redirect('/details/work-history/review')
  })
}
