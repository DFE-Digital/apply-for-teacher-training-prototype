const utils = require('./../utils')

function createNewApplication (req) {
  const code = utils.generateRandomString()
  const data = req.session.data

  if (typeof data.applications === 'undefined') {
    data.applications = {}
  }

  if (typeof data.applications[code] === 'undefined') {
    data.applications[code] = {
      status: 'started',
      apply2: false,
      completed: {},
      choices: {},
      references: {},
      candidate: {},
      contactInformation: {},
      additionalSupportDisclose: null,
      additionalSupport: {},
      safeguardingDisclose: null,
      safeguarding: null,
      degree: {},
      otherQualifications: {},
      gcse: {
        maths: {},
        english: {},
        science: {}
      },
      subjectKnowledge: null,
      interviewNeedsDisclose: null,
      interviewNeeds: null,
      personalStatement: null,
      workHistory: {},
      unpaidExperience: {}
    }
  }

  return code
}

/**
 * Application routes
 */
module.exports = router => {
//   router.get('/application/start/choice', (req, res) => {
//     const code = createNewApplication(req)
//     res.redirect(`/application/${code}/choices/add`)
//   })
//
//   router.all('/application/started', (req, res) => {
//     const { applications } = req.session.data
//     const applicationId = Object.entries(applications).filter(a => a[1].status === 'started')[0][0]
//     if (applicationId) {
//       res.redirect('/application/' + applicationId)
//     }
//   })
//
// //   // Render application page
//   router.all('/application/:applicationId', (req, res) => {
//     const showCopiedBanner = req.query.copied
//     const { applicationId } = req.params
//     const application = utils.applicationData(req)
//
//     res.render('application/index', {
//       showCopiedBanner,
//       closed: req.query.closed,
//       findNotOpen: req.query.findNotOpen,
//       cycleNotOpen: req.query.cycleNotOpen,
//       applicationId,
//       application
//     })
//   })

  // Reset application so the user can apply again
  router.post('/application/apply-again', (req, res) => {

    // Remove previous course choices
    req.session.data.choices = {}

    req.session.data.completed.choices = 'false'

    res.redirect('/application')
  })


  // Submit application action
  router.post('/application/submit', (req, res) => {
    // Set status of each choice to 'Awaiting decision'
    const choices = req.session.data.choices
    if (choices) {
      for (id of Object.keys(choices)) {
        choices[id].status = 'Awaiting decision'
      }
    }

    res.redirect('/survey')
  })

  // Render course-specific submitted page
  router.all('/application/:applicationId/submitted/:choiceId', (req, res) => {
    const { referrer } = req.query
    const { choiceId } = req.params

    res.render('application/submitted', {
      referrer,
      choiceId
    })
  })

//   // Render submitted page
//   router.all('/application/:applicationId/submitted', (req, res) => {
//     const { referrer } = req.query
//
//     res.render('application/submitted', {
//       referrer
//     })
//   })

  require('./application/choices')(router)
  // require('./application/personal-information')(router)
  require('./application/contact-information')(router)
  // require('./application/english-language')(router)
  require('./application/work-history')(router)
  require('./application/unpaid-experience')(router)
  // require('./application/additional-support')(router)
  // require('./application/safeguarding')(router)
  require('./application/degree')(router)
  require('./application/gcse')(router)
  require('./application/other-qualifications')(router)
  // require('./application/personal-statement')(router)
  // require('./application/subject-knowledge')(router)
  // require('./application/interview-needs')(router)
  require('./application/references')(router)
  // require('./application/review')(router)
  // require('./application/equality-monitoring')(router)
  // require('./application/confirmation')(router)
  require('./application/dashboard')(router)
  // require('./application/decision')(router)

  // Render provided view, or index template for that view if not found
//   router.all('/application/:applicationId/:view', (req, res) => {
//     const { referrer } = req.query
//
//     res.render(
//       `application/${req.params.view}`,
//       {},
//       (error, html) => {
//         if (error && error.message.includes('template not found')) {
//           res.render(`application/${req.params.view}/index`, {
//             referrer
//           })
//         } else {
//           res.send(html)
//         }
//       }
//     )
//   })
}
