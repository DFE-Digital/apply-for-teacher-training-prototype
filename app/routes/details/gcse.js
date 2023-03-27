const utils = require('./../../utils')

const passGrades = [
  'A*', 'A', 'B', 'C',
  'A*A*', 'A*A', 'AA', 'AB', 'BB', 'BC', 'CC', 'CD',
  '9', '8', '7', '6', '5', '4',
  '99', '98', '88', '87', '77', '76', '66', '65', '55', '54', '44', '43'
]

const enteredGrade = (gcse) => {
  return gcse.gradeSingle || gcse.gradeDouble ||
  gcse.gradeBiology || gcse.gradeChemistry || gcse.gradePhysics ||
  gcse.gradeEnglish || gcse.gradeLanguage || gcse.gradeLiterature || gcse.gradeStudies || gcse.gradeOther
}

const gcseData = (req) => {
  const data = req.session.data
  if (data.gcse && data.gcse[req.params.id]) {
    return data.gcse[req.params.id]
  }

  return false
}

/**
 * Application: GCSE or equivalent routes
 */
module.exports = router => {
  // Render GCSE review page
  // Note: Must be defined before next route declaration
  router.get('/details/gcse/:id/review', (req, res) => {
    const gcse = gcseData(req)
    const grade = enteredGrade(gcse)
    const hasElligibleGrade = passGrades.includes(grade)

    res.render('details/gcse/review', {
      grade,
      hasElligibleGrade,
      id: req.params.id
    })
  })

  // Render first page
  router.get('/details/gcse/:id', (req, res) => {
    const { id } = req.params

    res.render('details/gcse/index', {
      id
    })
  })

  // Render 'no qualification yet' page
  router.get('/details/gcse/:id/not-yet', (req, res) => {
    const { id } = req.params

    res.render('details/gcse/not-yet', {
      id
    })
  })

  // Routing for 'Are you currently studying for an {subject} qualification?'
  router.post('/details/gcse/:id/not-yet', (req, res) => {
    const { id } = req.params

    const answer = utils.applicationData(req).gcse[id].currentlyStudying
    let path
    if (answer === 'yes') {
      path = `/details/gcse/${id}/review`
    } else {
      path = `/details/gcse/${id}/equivalency`
    }

    res.redirect(path)
  })

  // Routing for 'Are you currently retaking your {subject} qualification?'
  router.post('/details/gcse/:id/currently-retaking', (req, res) => {
    const { id } = req.params

    const answer = req.session.data.gcse[id].currentlyRetaking
    let path
    if (answer === 'yes') {
      path = `/details/gcse/${id}/review`
    } else {
      path = `/details/gcse/${id}/equivalency`
    }

    res.redirect(path)
  })

  // Render equivalency page
  router.get('/details/gcse/:id/equivalency', (req, res) => {
    const { id } = req.params

    res.render('details/gcse/equivalency', {
      id
    })
  })

  // GCSE type answer branching
  router.post('/details/gcse/:id/answer', (req, res) => {
    const { id } = req.params
    // const { referrer } = req.query

    // let path
    // if (isInternational(req)) {
    //   path = `/details/gcse/${id}/country`
    // } else if (isMissing(req)) {
    //   path = `/details/gcse/${id}/not-yet`
    // } else {
    const path = `/details/gcse/${id}/grade`
    // }

    res.redirect(path)
  })

  // Render UK ENIC/grade/year pages
  router.all('/details/gcse/:id/:view(subject|country|grade|no-pass-grade|enic|year)', (req, res) => {
    const { id, view } = req.params

    res.render(`details/gcse/${view}`, {
      id
    })
  })
}
