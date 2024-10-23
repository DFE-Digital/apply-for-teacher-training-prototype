const utils = require('./../utils')
const data = require('./../utils/data')



module.exports = router => {

  router.get('/applications/start', (req, res) => {

    res.render('applications/start')
  })


  router.get('/applications', (req, res) => {

    const applications = (req.session.data.applications ? Object.values(req.session.data.applications) : [] )

    const applicationsAwaitingDecisionOrReceivedOffer = applications.filter(a => (['Awaiting decision', "Offer received"].includes(a.status)))

    const applicationAccepted = applications.find(a => ['Conditions pending', 'Offer confirmed'].includes(a.status))

    const numberOfApplicationsLeft = 4 - (applicationsAwaitingDecisionOrReceivedOffer.length)

    // const candidateInterface = {
    //   sortApplicationChoices: {
    //     one: "Offers received",
    //     two: "Unsubmitted applications",
    //     three: "Unsuccessful applications",
    //     four: "In progress",
    //     five: "Declined offers",
    //     six: "Withdrawn applications",
    //     ten: "Other applications"
    //   }
    // };


    res.render('applications/index', {
      applicationAccepted,
      numberOfApplicationsLeft
    })
  })

  // Branch based on whether they said they know which course to
  // apply to.
  router.post('/applications/course-known', (req, res) => {
    const courseKnown = req.body.courseKnown

    if (courseKnown === 'yes') {
      const id = utils.generateRandomString()

      req.session.data.applications ||= {}
      req.session.data.applications[id] = { status: 'Not sent' }

      res.redirect(`/applications/${id}/provider`)
    } else if (courseKnown === 'no') {
      res.redirect('/applications/find')
    } else {
      // return to question page
      res.redirect('/applications/start')
    }
  })

  router.get('/applications/:id/provider', (req, res) => {
    const { id } = req.params



    const providerItems = data.providers
      .sort((a, b) => (a.localeCompare(b)))
      .map(provider => ({ text: provider, value: provider }))

    res.render('applications/provider', {
      id,
      providerItems
    })
  })

  router.post('/applications/:id/provider', (req, res) => {
    const { id } = req.params

    const providerSelected = req.body.applications[id].providerName;

    let otherApplications = []
    if (req.session.data.applications){
      for (otherApplicationId of Object.keys(req.session.data.applications)) {
        if (id != otherApplicationId) {
          otherApplications.push(req.session.data.applications[otherApplicationId])
        }
      }
    }

    const providersWaitingOnDecision = otherApplications.filter(application => application.status == 'Awaiting decision').map(application => application.providerName)

    const providersInDraft = otherApplications.filter(application => application.status == 'Not sent').map(application => application.providerName)

  if (providersInDraft.includes(providerSelected)) {
      res.redirect(`/applications/${id}/provider-already-selected`)
    } else {
      res.redirect(`/applications/${id}/course`)
    }

  })

  router.get('/applications/:id/course', (req, res) => {
    const { id } = req.params

    const courseItems = data.courses
      .sort((a, b) => (a.title.localeCompare(b.title)))
      .map(course => ({ text: course.title, value: course.title, hint: { text: course.qualification } }))

    res.render('applications/course', {
      id,
      courseItems
    })
  })

  router.get('/applications/:id/school-placement(-second)?', (req, res) => {

    const { id } = req.params
    let priority = req.params[0]
    if ( priority) {
      priority = priority.substring(1)
    } else {
      priority = 'first'
    }

    let placementItems = data.placements
      .sort((a, b) => (a.name.localeCompare(b.name)))
      .map(placement => ({ text: placement.name, value: placement.name, hint: { text: placement.address } }))

    placementItems.unshift({'text': 'I have no preference', value: 'I have no preference'})

    res.render('applications/school-placement', {
      id,
      priority,
      placementItems
    })
  })

  router.get('/applications/:id/school-placement-preferences', (req, res) => {
    const { id } = req.params
    res.render('applications/school-placement-preferences', {
      id
    })
  })


  router.get('/applications/:id/courses-other', (req, res) => {
    const { id } = req.params

    var courseItems = data.courses
      .filter(course => course.title != req.session.data.applications[id].course)
      .sort((a, b) => (a.title.localeCompare(b.title)))
      .map(course => ({ text: course.title, value: course.title, hint: { text: course.qualification } }))

    courseItems.push({
        divider: "or"
      })

    courseItems.push({
      text: "No, I’m only interested in " + req.session.data.applications[id].course,
      value: "no"
      })

    res.render('applications/courses-other', {
      id,
      courseItems
    })
  })

  router.get('/applications/:id/interview-needs', (req, res) => {
    const { id } = req.params
    res.render('applications/interview-needs', {
      id
    })
  })

  router.get('/applications/:id/additional-information', (req, res) => {
    const { id } = req.params
    res.render('applications/additional-information', {
      id
    })
  })

  router.get('/applications/:id/review', (req, res) => {

    const applications = (req.session.data.applications ? Object.values(req.session.data.applications) : [] )
    const applicationsAwaitingDecisionOrReceivedOffer = applications.filter(a => (['Awaiting decision', "Offer received"].includes(a.status)))
    const applicationAccepted = applications.find(a => ['Conditions pending', 'Offer confirmed'].includes(a.status))
    const numberOfApplicationsLeft = 4 - (applicationsAwaitingDecisionOrReceivedOffer.length)
    const immigration = (req.session.data.immigration ? Object.values(req.session.data.immigration) : [] )

    const { id } = req.params
    res.render('applications/review', {
      id,
      numberOfApplicationsLeft,
      immigration
    })
  })

  router.get('/applications/:id/interruption-module', (req, res) => {
    const { id } = req.params
    const degree = req.session.data.degrees

    res.render('applications/interruption-module', {
    id,
    degree
    })
  })

  router.get('/applications/:id/review-application', (req, res) => {
    const { id } = req.params

    res.render('applications/review-application', {
    id
    })
  })

  router.get('/applications/:id/review-and-submit', (req, res) => {
    const { id } = req.params

    res.render('applications/review-and-submit', {
    id
    })
  })


  router.get('/applications/:id/delete', (req, res) => {
    const { id } = req.params
    res.render('applications/delete', {
      id
    })
  })

  router.get('/applications/:id/withdraw', (req, res) => {
    const { id } = req.params
    res.render('applications/withdraw', {
      id
    })
  })

  router.get('/applications/:id/withdraw-reason', (req, res) => {
    const { id } = req.params
    res.render('applications/withdraw-reason', {
      id
    })
  })

  router.get('/applications/:id/provider-already-selected', (req, res) => {
    const { id } = req.params
    res.render('applications/provider-already-selected', {
      id
    })
  })

  router.get('/applications/:id/provider-already-submitted', (req, res) => {
    const { id } = req.params
    res.render('applications/provider-already-submitted', {
      id
    })
  })

  router.get('/applications/:id/respond', (req, res) => {
    const { id } = req.params
    res.render('applications/respond', {
      id
    })
  })

  router.post('/applications/:id/submit', (req, res) => {
    const { id } = req.params
    const personalStatement = (req.session.data.personalStatement ? Object.values(req.session.data.personalStatement) : [] )
    const personalstatementl = personalStatement.length
    const degree = req.session.data.degrees
    const submitNow = req.body.submitNow
    const submitNowPost = req.body.submitNowPost

    const references = (req.session.data.references ? Object.values(req.session.data.references) : [])
    let referencesPersonalEmail = false

    // Request all the references
    for (const reference of references) {

      if ( ( reference.email.indexOf('gmail') > 1 || reference.email.indexOf('hotmail') > 1 ) && !( req.session.data.references[id].type == 'character') ) {
        referencesPersonalEmail = true
        break
      }
    }

// interruption module for personal
    if (submitNow == 'yes' && personalstatementl < 500) {
      res.redirect('/applications/'+ id + '/interruption-module')
    }
    else if (submitNow == 'yes' && degree.G3CL4.grade == "Third-class honours") {
      res.redirect('/applications/'+ id + '/interruption-module')
    }
    else if (submitNow == 'yes' && referencesPersonalEmail ) {
      res.redirect('/applications/'+ id + '/interruption-module')
    }
    else if (submitNowPost == 'yes') {
      req.session.data.applications[id].status = "Awaiting decision"
      req.session.data.applications[id].submittedAt = new Date()
      res.redirect('/applications')
    }
       // function for submitting an application
       else if (submitNow == 'yes') {
        // req.session.data.applications[id].status = "Awaiting decision"
        // req.session.data.applications[id].submittedAt = new Date()
        res.redirect('/applications/' + id + '/review-and-submit')
      }
    // function to save application as a draft
    else if (submitNow === 'no') {
      res.redirect('/applications')
    } else {
      res.redirect('/applications/' + id + "/review")
    }

  })

  // router.post('/applications/:id/submit', (req, res) => {
  //   const { id } = req.params
  //   const submitNow = req.body.submitNow
  //   req.session.data.applications[id].status = "Awaiting decision"
  //   req.session.data.applications[id].submittedAt = new Date()

  //   res.redirect('/applications')
  // })

  //function to remove application
  router.post('/applications/:id/delete', (req, res) => {
    const { id } = req.params

    delete req.session.data.applications[id]

    res.redirect('/applications')
  })

//function to withdraw application
  router.post('/applications/:id/withdraw', (req, res) => {
    const { id } = req.params

    req.session.data.applications[id].status = "Withdrawn"

    res.redirect('/applications/' + id + '/withdraw-reason')
  })

  router.post('/applications/:id/withdraw-reason', (req, res) => {
    const { id } = req.params
    const showWithdrawnBanner = true

    res.render('/applications/index', { showWithdrawnBanner, id })
  })

  router.post('/applications/:id/decision', (req, res) => {
    const { id } = req.params
    const decision = req.body.decision
    const application = req.session.data.applications[id]

    if (decision === 'accept') {

      res.redirect(`/applications/${id}/confirm`)

    } else if (decision == 'decline') {
      application.status = 'Offer declined'
      res.redirect(`/applications/${id}/decline-confirm`)
    } else {
      // Didn't select an answer
      res.redirect(`/applications/${id}/respond`)
    }

  })

  // Confirm declining an offer
  router.get('/applications/:id/decline-confirm', (req, res) => {
    const { id } = req.params
    res.render('applications/decline-confirm', {
      id
    })
  })

  router.post('/applications/:id/decline-confirm', (req, res) => {
    const { id } = req.params
    const showDeclineBanner = true

    res.render('/applications/index', { showDeclineBanner, id })
  })


  // Confirm accepting an offer (and references)
  router.get('/applications/:id/confirm', (req, res) => {
    const { id } = req.params
    res.render('applications/confirm', {
      id
    })
  })

  // Accepting an offer - triggers references
  router.post('/applications/:id/accept', (req, res) => {
    const { id } = req.params
    const decision = req.body.decision
    const application = req.session.data.applications[id]
    const now = new Date()
    const references = (req.session.data.references ? Object.values(req.session.data.references) : [])


    application.status = 'Conditions pending'


    // Request all the references
    for (const reference of references) {
      reference.status = 'Requested'

      const log = reference.log = reference.log || []
      log.push({
        note: 'Request sent',
        date: now.toISOString()
      })
    }

    // Decline or withdraw all other applications
    for (applicationId of Object.keys(req.session.data.applications)) {

      if (applicationId != id) {
        let application = req.session.data.applications[applicationId]

        if (application.status == 'Offer received') {
          application.status = 'Offer declined'
        } else if (application.status == 'Awaiting decision') {
          application.status = 'Application withdrawn'
        }
      }
    }

    res.redirect('/accepted')
  })
}
