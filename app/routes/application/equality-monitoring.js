const journeys = require('./../../utils/journeys')
const utils = require('./../../utils')

const hasDisclosedEthnicity = (req) => {
  const application = utils.applicationData(req)

  if (application['equality-monitoring']) {
    const answer = application['equality-monitoring']['ethnic-group']
    return answer !== 'Prefer not to say'
  }
}

const hasDisclosedDisability = (req) => {
  const application = utils.applicationData(req)

  if (application['equality-monitoring'] && application['equality-monitoring']['disability-status']) {
    const answer = application['equality-monitoring']['disability-status']
    return answer === 'Yes'
  }
}

const questionPaths = (req) => {
  const { applicationId } = req.params
  const basePath = `/application/${applicationId}/equality-monitoring`

  const paths = [
    basePath,
    `${basePath}/sex`,
    // `${basePath}/sexual-orientation`,
    `${basePath}/disability-status`,
    ...(hasDisclosedDisability(req) ? [`${basePath}/disabilities`] : []),
    `${basePath}/ethnic-group`,
    ...(hasDisclosedEthnicity(req) ? [`${basePath}/ethnic-background`] : []),
    `${basePath}/household-earner-occupation-at-14`,
    `${basePath}/free-school-meals`,
    `${basePath}/review`
  ]

  return journeys.nextAndBackPaths(paths, req)
}

/**
 * Application: Equality monitoring routes
 */
module.exports = router => {
  router.get('/application/:applicationId/equality-monitoring/:view?', (req, res) => {
    const { applicationId } = req.params
    const basePath = `/application/${applicationId}/equality-monitoring`
    const { referrer } = req.query
    const referrerPath = referrer ? `?referrer=${referrer}` : ''
    const view = req.params.view || 'index'
    const paths = questionPaths(req)
    let formaction = referrer || paths.next

    if (view === 'index') {
      formaction = `${basePath}/answer${referrerPath}`
    }

    if (view === 'ethnic-group') {
      formaction = `${basePath}/ethnic-group/answer${referrerPath}`
    }

    if (view === 'disability-status') {
      formaction = `${basePath}/disability-status/answer${referrerPath}`
    }

    if (view === 'ethnic-background') {
      formaction = `${basePath}/household-earner-occupation-at-14${referrerPath}`
    }

    if (view === 'household-earner-occupation-at-14') {
      formaction = `${basePath}/free-school-meals${referrerPath}`
    }

    res.render(`application/equality-monitoring/${view}`, {
      formaction,
      paths,
      referrer
    })
  })

  // Ethnic group answer branching
  router.post('/application/:applicationId/equality-monitoring/ethnic-group/answer', (req, res) => {
    const { applicationId } = req.params
    const basePath = `/application/${applicationId}/equality-monitoring`
    const { referrer } = req.query

    let path
    if (hasDisclosedEthnicity(req)) {
      path = `${basePath}/ethnic-background`
    } else {
      path = referrer || `${basePath}/household-earner-occupation-at-14`
    }

    res.redirect(`${path}?${utils.queryString(req)}`)
  })

  // Disability answer branching
  router.post('/application/:applicationId/equality-monitoring/disability-status/answer', (req, res) => {
    const { applicationId } = req.params
    const basePath = `/application/${applicationId}/equality-monitoring`
    const { referrer } = req.query

    let path
    if (hasDisclosedDisability(req)) {
      path = `${basePath}/disabilities`
    } else {
      path = referrer || `${basePath}/ethnic-group`
    }

    res.redirect(`${path}?${utils.queryString(req)}`)
  })
}
