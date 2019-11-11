const utils = require('./../utils')

function createNewApplication (req) {
  var code = req.app.locals.urStudy || utils.generateRandomString()
  var data = req.session.data

  if (typeof data.applications === 'undefined') {
    data.applications = {}
  }

  if (typeof data.applications[code] === 'undefined') {
    data.applications[code] = {
      status: 'started'
    }
  }

  return code
}

function createDummyApplication (status, decisions) {
  return {
    application: {
      status: status,
      choices: {
        ABCDE: {
          courseCode: '3DMD',
          providerCode: 'G50',
          locationName: 'School name',
          locationAddress: 'Road, City, SW1 1AA',
          status: (decisions) ? decisions[0] : false
        },
        ZYXWV: {
          courseCode: 'Q3X1',
          providerCode: 'B78',
          locationName: 'Academy name',
          locationAddress: 'Road, City, SW2 1AA',
          status: (decisions) ? decisions[1] : false
        }
      }
    }
  }
}

/**
 * Application routes
 */
module.exports = router => {
  router.all('/applications', (req, res) => {
    const { state } = req.query
    const phase = req.query.phase || req.session.data.phase

    // Mock different application states if we ask for a state
    let applications
    switch (state) {
      case 'submitted': {
        applications = createDummyApplication('submitted')
        break
      }

      case 'amending': {
        applications = createDummyApplication('amending')
        break
      }

      case 'amended': {
        applications = createDummyApplication('amended')
        break
      }

      case 'pending-decisions': {
        applications = createDummyApplication('submitted', ['pending', 'pending'])
        break
      }

      case 'outstanding-decision': {
        applications = createDummyApplication('submitted', ['offer', 'pending'])
        break
      }

      case 'has-decisions': {
        applications = createDummyApplication('submitted', ['offer', 'rejected'])
        break
      }

      case 'has-accepted': {
        applications = createDummyApplication('submitted', ['accepted', 'rejected'])
        break
      }
    }

    if (phase && state) {
      // Populate session data with stateful application
      req.session.data.applications = applications
      res.render('applications/index', {
        phase,
        state
      })
    } else if (utils.hasSubmittedApplications(req)) {
      res.render('applications/index', {
        phase
      })
    } else if (utils.hasStartedApplications(req)) {
      res.redirect('/application/started')
    } else {
      res.redirect('/application/start')
    }
  })

  // Generate new applicationID and redirect to that application
  router.get('/application/start', (req, res) => {
    var code = createNewApplication(req)
    req.session.data.applications[code].welcomeFlow = true

    if (req.session.data.course_from_find) {
      // If coming from Find, go straight to course selection
      res.redirect(`/application/${code}/choices/add`)
    } else {
      // Otherwise, give some context about the Apply pilot
      res.redirect(`/application/${code}/before-you-start`)
    }
  })

  router.get('/application/start/choice', (req, res) => {
    var code = createNewApplication(req)
    res.redirect(`/application/${code}/choices/add`)
  })

  router.all('/application/started', (req, res) => {
    var applications = req.session.data.applications
    var applicationId = Object.entries(applications).filter(a => a[1].status === 'started')[0][0]
    if (applicationId) {
      res.redirect('/application/' + applicationId)
    }
  })

  // Render application page
  router.all('/application/:applicationId', (req, res) => {
    req.session.data.applications[req.params.applicationId].welcomeFlow = false
    res.render('application/index')
  })

  // Render review page
  router.get('/application/:applicationId/review', (req, res) => {
    res.render('application/review')
  })

  router.post('/application/:applicationId/review', (req, res) => {
    // If updating jobs or roles, ensure dates are saved using ISO 8601 format
    const id = req.query.update
    const applicationData = utils.applicationData(req)
    const workHistory = applicationData['work-history']
    const schoolExperience = applicationData['school-experience']
    const referer = req.get('referer')

    if (id && referer.includes('work-history')) {
      utils.saveIsoDate(req, workHistory, id)
    }

    if (id && referer.includes('school-experience')) {
      utils.saveIsoDate(req, schoolExperience, id)
    }

    res.render('application/review')
  })

  // Render submitted page
  router.all('/application/:applicationId/submitted', (req, res) => {
    const { phase } = req.query

    res.render('application/submitted', {
      phase
    })
  })

  require('./application/choices')(router)
  require('./application/personal-details')(router)
  require('./application/contact-details')(router)
  require('./application/work-history')(router)
  require('./application/school-experience')(router)
  require('./application/disability')(router)
  require('./application/vocation')(router)
  require('./application/degree')(router)
  require('./application/gcse')(router)
  require('./application/other-qualifications')(router)
  require('./application/personal-statement')(router)
  require('./application/subject-knowledge')(router)
  require('./application/interview')(router)
  require('./application/references')(router)
  require('./application/equality-monitoring')(router)
  require('./application/confirmation')(router)
  require('./application/edit')(router)
  require('./application/decision')(router)

  // Render provided view, or index template for that view if not found
  router.all('/application/:applicationId/:view', (req, res) => {
    const referrer = req.query.referrer

    res.render(
      `application/${req.params.view}`,
      {},
      (error, html) => {
        if (error && error.message.includes('template not found')) {
          res.render(`application/${req.params.view}/index`, {
            referrer
          })
        } else {
          res.send(html)
        }
      }
    )
  })
}
