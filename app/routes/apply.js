module.exports = router => {
  router.get('/apply/:providerCode/:courseCode', (req, res) => {
    const dualRunning = req.query.dualrunning
    const ineligible = req.query.ineligible
    const providerCode = req.params.providerCode
    const courseCode = req.params.courseCode

    res.render('apply/index', {
      formaction: `/apply/${providerCode}/${courseCode}/answer`,
      dualRunning,
      ineligible,
      providerCode,
      courseCode
    })
  })

  router.get('/apply/from-find', (req, res) => {
    const providerCode = req.query.provider
    const courseCode = req.query.course

    // Count this so we can act on the data
    // eg We show them a course that’s only on UCAS the second time around
    req.session.data.visits_from_find = req.session.data.visits_from_find + 1

    res.redirect(`/apply/${providerCode}/${courseCode}?dualrunning=true`)
  })

  router.get('/apply/:providerCode/:courseCode/answer', (req, res) => {
    const providerCode = req.params.providerCode
    const courseCode = req.params.courseCode
    const route = req.session.data['apply-route']
    if (route === 'ucas') {
      res.redirect('https://2020.teachertraining.apply.ucas.com/apply/student/login.do') // Go to UCAS
    } else {
      // Copy course for reuse once an application is created
      req.session.data.course_from_find = {
        providerCode,
        courseCode
      }

      res.redirect('/account/eligibility') // Go to Apply
    }
  })

  router.get('/apply/:providerCode/:courseCode/:template', (req, res) => {
    const providerCode = req.params.providerCode
    const courseCode = req.params.courseCode

    res.render(`apply/${req.params.template}`, {
      providerCode,
      courseCode
    })
  })
}
