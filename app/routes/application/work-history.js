const utils = require('./../../utils')

module.exports = router => {
  // Review page
  router.get('/application/:applicationId/work-history/review', (req, res) => {
    const newId = utils.generateRandomString()

    const fromPage = req.query.from

    res.render('application/work-history/review', {
      newId,
      fromPage
    })
  })

  // Root path - show branching page if no data yet, otherwise the review page.
  router.get('/application/:applicationId/work-history', (req, res) => {
    res.render('application/work-history/index')
  })

  // Answering the initial branching question
  router.post('/application/:applicationId/work-history/answer', (req, res) => {
    const { applicationId } = req.params

    const answer = req.body.applications[applicationId]['work-history-decision']

    if (answer !== undefined) {
      res.redirect(`/application/${applicationId}/work-history/review?from=work-history-question`)
    } else {
      res.redirect(`/application/${applicationId}/work-history`)
    }
  })

  router.get('/application/:applicationId/work-history/break/:id', (req, res) => {
    const { id } = req.params
    const { start, end } = req.query

    res.render('application/work-history/break', {
      id,
      start,
      end
    })
  })

  router.post('/application/:applicationId/work-history/break/:id', (req, res) => {
    const { applicationId, id } = req.params

    const application = utils.applicationData(req)
    const workHistory = application['work-history']
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

    const application = utils.applicationData(req)
    const workHistory = application['work-history']
    utils.saveIsoDate(req, workHistory, id, false)

    res.redirect(`/application/${applicationId}/work-history/review`)
  })

  // remove job page
  router.get('/application/:applicationId/work-history/:id/remove', (req, res) => {
    const { applicationId, id } = req.params
    const item = utils.applicationData(req)['work-history'][id]
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

    delete application['work-history'][id]

    const numberOfJobsLeft = Object.entries(application['work-history'])
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
