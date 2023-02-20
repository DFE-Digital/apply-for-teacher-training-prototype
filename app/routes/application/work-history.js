const utils = require('./../../utils')

module.exports = router => {
  // Review page
  router.get('/application/work-history/review', (req, res) => {
    const newId = utils.generateRandomString()

    res.render('application/work-history/review', {
      newId
    })
  })

  // Add a job
  router.get('/application/work-history/job/add', (req, res) => {
    const newId = utils.generateRandomString()
    res.render(`application/work-history/job/${newId}`)
  })

  // Add a break
  router.get('/application/work-history/break/add', (req, res) => {
    const newId = utils.generateRandomString()
    res.redirect(`/application/work-history/break/${newId}`)
  })

  // Job details page
  router.get('/application/work-history/job/:id', (req, res) => {
    const { id } = req.params
    res.render('application/work-history/job', {
      id
    })
  })

  // remove job page
  router.get('/application/work-history/job/:id/delete', (req, res) => {
    const { id } = req.params

    res.render('application/work-history/delete-job', {
      id
    })
  })

  // remove job page
  router.post('/application/work-history/job/:id/delete', (req, res) => {
    const { id } = req.params

    delete req.session.data.workHistory[id]

    res.redirect('/application/work-history/review')
  })
}
