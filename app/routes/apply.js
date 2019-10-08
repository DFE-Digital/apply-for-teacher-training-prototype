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

  router.get('/apply/:providerCode/:courseCode/answer', (req, res) => {
    const providerCode = req.params.providerCode
    const courseCode = req.params.courseCode

    const route = req.session.data['apply-route']
    if (route === 'ucas') {
      res.redirect('https://2020.teachertraining.apply.ucas.com/apply/student/login.do')
    } else {
      res.redirect(`/apply/${providerCode}/${courseCode}/eligibility`)
    }
  })

  router.get('/apply/:providerCode/:courseCode/eligibility', (req, res) => {
    const providerCode = req.params.providerCode
    const courseCode = req.params.courseCode

    res.render('apply/eligibility', {
      formaction: `/apply/${providerCode}/${courseCode}/eligibility/answer`,
      providerCode,
      courseCode
    })
  })

  router.get('/apply/:providerCode/:courseCode/eligibility/answer', (req, res) => {
    const providerCode = req.params.providerCode
    const courseCode = req.params.courseCode

    const eligibileNationality = req.session.data['eligibile-nationality']
    const eligibileEquivalencies = req.session.data['eligibile-equivalencies']
    if (eligibileNationality === 'no' || eligibileEquivalencies === 'no') {
      res.redirect(`/apply/${providerCode}/${courseCode}/?ineligible=true`) // Show UCAS apply information
    } else {
      res.redirect('/') // Apply for teacher training service
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
