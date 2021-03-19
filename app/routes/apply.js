module.exports = router => {
  router.get('/apply/:providerCode/:courseCode', (req, res) => {
    const { courseCode, providerCode } = req.params
    const dualRunning = req.query.dualrunning
    const ineligible = req.query.ineligible

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
    req.session.data.visitsFromFind = req.session.data.visitsFromFind + 1

    res.redirect(`/apply/${providerCode}/${courseCode}?dualrunning=true`)
  })

  router.get('/apply/:providerCode/:courseCode/answer', (req, res) => {
    const { courseCode, providerCode } = req.params
    const route = req.session.data['apply-route']
    if (route === 'ucas') {
      res.redirect('https://2020.teachertraining.apply.ucas.com/apply/student/login.do') // Go to UCAS
    } else {
      // Copy course for reuse once an application is created
      req.session.data.course_from_find = {
        providerCode,
        courseCode
      }

      if (route === 'dfe') {
        res.redirect('/account/create-account')
      } else if (route === 'dfe-returning') {
        res.redirect('/account/sign-in')
      }
    }
  })

  router.get('/apply/:providerCode/:courseCode/:view', (req, res) => {
    const { courseCode, providerCode, view } = req.params

    res.render(`apply/${view}`, {
      providerCode,
      courseCode
    })
  })
}
