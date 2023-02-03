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

    res.redirect("/application/work-history/review")
  })

  // Root path - show branching page if no data yet, otherwise the review page.
  router.get('/application/:applicationId/work-history', (req, res) => {
    res.render('application/work-history/index')
  })

  // Answering the initial branching question
  router.post('/application/:applicationId/work-history/answer', (req, res) => {
    const { applicationId } = req.params

    const { workHistoryDisclose } = req.body.applications[applicationId]

    if (workHistoryDisclose !== undefined) {
      res.redirect(`/application/${applicationId}/work-history/review?from=work-history-question`)
    } else {
      res.redirect(`/application/${applicationId}/work-history`)
    }
  })

  router.get('/application/work-history/break/:id', (req, res) => {
    const { id } = req.params

    res.render('application/work-history/break')
  })

  router.post('/application/:applicationId/work-history/break/:id', (req, res) => {
    const { applicationId, id } = req.params
    const { workHistory } = utils.applicationData(req)

    utils.saveIsoDate(req, workHistory, id, false)

    res.redirect(`/application/${applicationId}/work-history/review`)
  })

  router.get('/application/:applicationId/work-history/:id', (req, res) => {
    const { id } = req.params

    res.render('application/work-history/add', {
      id
    })
  })

  // Adding a job
  router.post('/application/:applicationId/work-history/:id', (req, res) => {
    const { applicationId, id } = req.params
    const { workHistory } = utils.applicationData(req)

    utils.saveIsoDate(req, workHistory, id, false)

    res.redirect(`/application/${applicationId}/work-history/review`)
  })

  // remove job page
  router.get('/application/:applicationId/work-history/:id/remove', (req, res) => {
    const { applicationId, id } = req.params
    const item = utils.applicationData(req).workHistory[id]
    const formaction = `/application/${applicationId}/work-history/${id}/remove`

    res.render('application/work-history/remove', {
      id,
      formaction,
      item
    })
  })

  // Remove a job
  router.post('/application/:applicationId/work-history/:id/remove', (req, res) => {
    const { applicationId, id } = req.params
    const application = utils.applicationData(req)

    delete application.workHistory[id]

    const numberOfJobsLeft = Object.entries(application.workHistory)
      .filter(function (job) {
        return job[1].id !== undefined
      }).length

    if (numberOfJobsLeft > 0) {
      res.redirect(`/application/${applicationId}/work-history/review`)
    } else {
      // Return to branching question if no jobs left
      res.redirect(`/application/${applicationId}/work-history`)
    }
  })
}
