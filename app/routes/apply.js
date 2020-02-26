module.exports = router => {
  // const dualRunningDefaultVarient = Math.floor(Math.random() * 3) + 1;
  const dualRunningDefaultVarient = 4

  router.get('/apply/:providerCode/:courseCode', (req, res) => {
    const variant = req.query.variant || dualRunningDefaultVarient
    const dualRunning = req.query.dualrunning
    const ineligible = req.query.ineligible
    const providerCode = req.params.providerCode
    const courseCode = req.params.courseCode

    res.render('apply/index', {
      formaction: `/apply/${providerCode}/${courseCode}/answer`,
      variant,
      dualRunning,
      ineligible,
      providerCode,
      courseCode
    })
  })

  router.get('/apply/from-find', (req, res) => {
    const providerCode = req.query.provider
    const courseCode = req.query.course

    // Detirmine variant based on providerCode
    const variant1Providers = ['H60', '2EX'] // Huddersfield
    const variant2Providers = ['L24', 'L26'] // Leeds
    const variant3Providers = ['S18', 'S97'] // Sheffield

    let variant
    if (variant1Providers.includes(providerCode)) {
      variant = 1
    }

    if (variant2Providers.includes(providerCode)) {
      variant = 2
    }

    if (variant3Providers.includes(providerCode)) {
      variant = 3
    }

    // Count this so we can act on the data
    // eg We show them a course that’s only on UCAS the second time around
    req.session.data.visits_from_find = req.session.data.visits_from_find + 1

    if (variant) {
      res.redirect(`/apply/${providerCode}/${courseCode}?dualrunning=true&variant=${variant}`)
    } else {
      res.redirect(`/apply/${providerCode}/${courseCode}?dualrunning=true`)
    }
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

      if (route === 'dfe') {
        res.redirect('/account/eligibility') // Check you can use this service
      } else if (route === 'dfe-returning') {
        res.redirect('/account/sign-in') // Sign in to continue
      }
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
