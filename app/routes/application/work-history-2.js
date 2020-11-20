const utils = require('./../../utils')

module.exports = router => {


  // Review page
  router.get('/application/:applicationId/work-history-2/review', (req, res) => {
    const application = utils.applicationData(req)
    const workHistory = application['work-history']
    const newId = utils.generateRandomString()

    res.render('application/work-history-2/review', {
      newId
    })
  })

  // Root path - show branching page if no data yet, otherwise the review page.
  router.get('/application/:applicationId/work-history-2', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)
    res.render('application/work-history-2/index')
  })

  // Answering the initial branching question
  router.post('/application/:applicationId/work-history-2/answer', (req, res) => {
    const { applicationId } = req.params
    const application = utils.applicationData(req)
    const workHistoryDecision = application['work-history-decision']



    if (workHistoryDecision === 'yes') {
      res.redirect(`/application/${applicationId}/work-history-2/review`)
    } else if (workHistoryDecision == "full-time-education") {
      res.redirect(`/application/${applicationId}/work-history-2/review`)
    } else {
      res.redirect(`/application/${applicationId}/work-history-2/missing`)
    }
  })


  router.get('/application/:applicationId/work-history-2/missing', (req, res) => {
    res.render('application/work-history-2/missing')
  })

  router.post('/application/:applicationId/work-history-2/missing', (req, res) => {
    const { applicationId } = req.params
    res.redirect(`/application/${applicationId}/work-history-2/review`)
  })

  router.get('/application/:applicationId/work-history-2/:id', (req, res) => {
    const { applicationId, id } = req.params
    res.render('application/work-history-2/add', {
      id
    })
  })

  // Adding a job
  router.post('/application/:applicationId/work-history-2/:id', (req, res) => {
    const { applicationId, id } = req.params

    const application = utils.applicationData(req)
    const workHistory = application['work-history']
    utils.saveIsoDate(req, workHistory, id)

    res.redirect(`/application/${applicationId}/work-history-2/review`)
  })

  // remove job page
  router.get('/application/:applicationId/work-history-2/:id/remove', (req, res) => {
    const { applicationId, id } = req.params

    const formaction = `/application/${applicationId}/work-history-2/${id}/remove`

    res.render('application/work-history-2/remove', {
      id,
      formaction
    })
  })


  // Remove a job
  router.post('/application/:applicationId/work-history-2/:id/remove', (req, res) => {
    const { applicationId, id } = req.params
    const application = utils.applicationData(req)

    delete application["work-history"][id]

    res.redirect(`/application/${applicationId}/work-history-2/review`)

  })


}
