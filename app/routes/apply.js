module.exports = router => {
  router.get('/apply/:providerCode/:courseCode', (req, res) => {
    const dualRunning = req.query.dualrunning
    const providerCode = req.params.providerCode
    const courseCode = req.params.courseCode

    res.render('apply/index', {
      formaction: `/apply/${providerCode}/${courseCode}/answer`,
      dualRunning,
      providerCode,
      courseCode
    })
  })

  router.get('/apply/:providerCode/:courseCode/answer', (req, res) => {
    const route = req.session.data['apply-route']
    const providerCode = req.params.providerCode
    const courseCode = req.params.courseCode

    if (route === 'ucas') {
      res.redirect('https://2019.teachertraining.apply.ucas.com/apply/student/login.do')
    } else {
      res.redirect(`/apply/${providerCode}/${courseCode}/before-you-start`)
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
