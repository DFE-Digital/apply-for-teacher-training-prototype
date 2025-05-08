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
      req.session.data.applications[id] = { status: 'Draft' }

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

    const providersInDraft = otherApplications.filter(application => application.status == 'Draft').map(application => application.providerName)

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

  router.get('/applications/:id/school-placement', (req, res) => {

    const { id } = req.params

    let placementItems = data.placements
      .sort((a, b) => (a.name.localeCompare(b.name)))
      .map(placement => ({ text: placement.name, value: placement.name, hint: { text: placement.address } }))

    res.render('applications/school-placement', {
      id,
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

  router.get('/candidate-pool', (req, res) => {
    res.render( 'candidate-pool/index' )
  })

  router.get('/candidate-pool/opt-in', (req, res) => {
    res.render( 'candidate-pool/opt-in' )
  })

  router.get('/applications/:id/review-application', (req, res) => {
    const { id } = req.params

    res.render('applications/review-application', {
    id
    })
  })


  router.get('/candidate-pool/locations', (req, res) => {

    const postCode = ( req.session.data.address && req.session.data.address.postalCode ) ? req.session.data.address.postalCode : 'SE1 1AA'
    req.session.data.candidatePool = req.session.data.candidatePool || {};
    req.session.data.candidatePool.locations = req.session.data.candidatePool.locations || []

    // add home location
    if ( ( !req.session.data.candidatePool || !req.session.data.candidatePool.locations.length ) && req.session.data.livesInUk == "yes" ) {

      req.session.data.candidatePool.locations.push({
        location: postCode,
        distance: 10,
        type: 'home'
      })

    }

    // add course locations
    if ( ( req.session.data.candidatePool.locations.length == 1 || ( req.session.data.candidatePool.locations.length == 0 && req.session.data.livesInUk == "no" ) ) || req.session.data.candidatePool.locationsAddNew == "true" ) {

      // todo - this will re-add any you've already removed
      let postcodePart = postCode.substring( 0, postCode.indexOf(' ') )
      let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

      for ( id in req.session.data.applications ) {

        // check if this application location is already in the locations list
        if ( !req.session.data.candidatePool.locations.some(item => item.course === id) ) {
          req.session.data.candidatePool.locations.push({
            location: postcodePart + ' '+ Math.floor(Math.random() * 10) + letters.charAt(Math.floor(Math.random() * 25 )) + letters.charAt(Math.floor(Math.random() * 25 )) + ' (' + req.session.data.applications[id].providerName + ')',
            distance: 10,
            course: id
          })
        }

      }
    }

    res.render( 'candidate-pool/locations/index' )
  })


  router.get('/candidate-pool/locations/:id/remove', (req, res) => {
    const { id } = req.params

    res.render('candidate-pool/locations/remove', {
      id
      })
  })

  router.get('/candidate-pool/locations/:id/change', (req, res) => {
    const { id } = req.params

    res.render('candidate-pool/locations/change', {
      id
      })
  })



  router.post('/candidate-pool/locations/:id/remove', (req, res) => {
    const { id } = req.params
    req.session.data.candidatePool.locations[id].removed = 'true'

    res.redirect('/candidate-pool/locations')

  })


  router.post('/candidate-pool/locations/:id/change', (req, res) => {
    const { id } = req.params

    req.session.data.candidatePool.locations[id].location = req.body['location-update']
    req.session.data.candidatePool.locations[id].distance = req.body['distance-update']

    res.redirect('/candidate-pool/locations')

  })

  router.post('/candidate-pool/locations/add', (req, res) => {

    req.session.data.candidatePool.locations.push({
      location: req.body['location-update'],
      distance: req.body['distance-update']
    })

    res.redirect('/candidate-pool/locations')

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

    // Request all the references
    for (const reference of references) {
      if ( ( reference.email.indexOf('gmail') > 1 || reference.email.indexOf('hotmail') > 1 ) && !( reference.type == 'character') ) {
        req.session.data.referencesPersonalEmail = true
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
    else if (submitNow == 'yes' && req.session.data.referencesPersonalEmail ) {
      res.redirect('/applications/'+ id + '/interruption-module')
    }
    else if (submitNowPost == 'yes') {
      req.session.data.applications[id].status = "Awaiting decision"
      req.session.data.applications[id].submittedAt = new Date()
      req.session.data.candidatePool = req.session.data.candidatePool || {};
      if ( !req.session.data.candidatePool.optedIn ) {
        res.redirect('/candidate-pool')
      } else {
        const showSubmitBanner = true
        res.render('/applications/index', { showSubmitBanner, id })
      }
    } else if (submitNow == 'yes' ) {
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


  router.post('/candidate-pool/opt-in', (req, res) => {
    const { id } = req.params
    let candidatePool = req.body.candidatePool['optedIn']

    if ( candidatePool == 'true' ) {
      res.redirect('/candidate-pool/locations' )

    } else {
      const showPoolBanner = true
      res.render('/applications/index', { showPoolBanner, id })
    }
  })

  router.post('/candidate-pool/locations', (req, res) => {
    res.redirect('/candidate-pool/check' )

  })

  router.post('/candidate-pool/check', (req, res) => {
    const showPoolBanner = true
    res.render('/applications/index', { showPoolBanner })
  })


//function to withdraw application
  router.post('/applications/:id/withdraw', (req, res) => {
    const { id } = req.params
    let reason = req.body.reason

    res.redirect('/applications/' + id + '/withdraw-' + reason )
  })

  router.get('/applications/:id/withdraw-confirm', (req, res) => {
    const { id } = req.params
    res.render('applications/withdraw-confirm', {
      id
    })
  })

  router.post('/applications/:id/withdraw-confirm', (req, res) => {
    const { id } = req.params
    const showWithdrawnBanner = true

    //moved this, check it's working
    req.session.data.applications[id].status = "Withdrawn"

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

  router.get('/applications/:id/withdraw-different-provider', (req, res) => {
    const { id } = req.params
    res.render('applications/withdraw-different-provider', { id } )
  })

  router.get('/applications/:id/withdraw-update', (req, res) => {
    const { id } = req.params
    res.render('applications/withdraw-update', { id } )
  })

  router.get('/applications/:id/withdraw-future', (req, res) => {
    const { id } = req.params
    res.render('applications/withdraw-future', { id } )
  })

  router.get('/applications/:id/withdraw-change-mind', (req, res) => {
    const { id } = req.params
    res.render('applications/withdraw-change-mind', { id } )
  })

  // Confirm declining an offer
  router.get('/applications/:id/decline-confirm', (req, res) => {
    const { id } = req.params
    res.render('applications/decline-confirm', {
      id
    })
  })

  router.get('/applications/:id/withdraw-other', (req, res) => {
    const { id } = req.params
    req.session.data.applications[id].reason = "Other"

    if ( req.session.data.moreDetail ) {
      req.session.data.applications[id].moreDetail = req.session.data.moreDetail
    }

    res.render('applications/withdraw-confirm', { id } )
  })

  router.post('/applications/:id/withdraw-update', (req, res) => {
    const { id } = req.params
    req.session.data.applications[id].reason = "I am going to change or update my application with this training provider"
    req.session.data.applications[id].reasonDetail = req.body['reason-update']

    if ( req.body.personal ) {
      req.session.data.applications[id].personal = req.body.personal
    }
    if ( req.body.moreDetail ) {
      req.session.data.applications[id].moreDetail = req.body.moreDetail
    }

    res.render('applications/withdraw-confirm', { id } )
  })

  router.post('/applications/:id/withdraw-future', (req, res) => {
    const { id } = req.params
    req.session.data.applications[id].reason = "I plan to apply for teacher training in the future"
    req.session.data.applications[id].reasonDetail = req.body['reason-future']

    if ( req.body.personal ) {
      req.session.data.applications[id].personal = req.body.personal
    }
    if ( req.body.personalMoreDetail ) {
      req.session.data.applications[id].personalMoreDetail = req.body.personalMoreDetail
    }
    if ( req.body.moreDetail ) {
      req.session.data.applications[id].moreDetail = req.body.moreDetail
    }

    res.render('applications/withdraw-confirm', { id } )
  })

  router.post('/applications/:id/withdraw-change-mind', (req, res) => {
    const { id } = req.params
    req.session.data.applications[id].reason = "I do not want to train to teach anymore"
    req.session.data.applications[id].reasonDetail = req.body['reason-change-mind']

    if ( req.body.personal ) {
      req.session.data.applications[id].personal = req.body.personal
    }
    if ( req.body.personalMoreDetail ) {
      req.session.data.applications[id].personalMoreDetail = req.body.personalMoreDetail
    }
    if ( req.body.moreDetail ) {
      req.session.data.applications[id].moreDetail = req.body.moreDetail
    }

    res.render('applications/withdraw-confirm', { id } )
  })

  router.post('/applications/:id/withdraw-different-provider', (req, res) => {
    const { id } = req.params
    req.session.data.applications[id].reason = "I am going to apply (or have applied) to a different training provider"
    req.session.data.applications[id].reasonDetail = req.body['reason-different-provider']

    if ( req.body.personal ) {
      req.session.data.applications[id].personal = req.body.personal
    }
    if ( req.body.personalMoreDetail ) {
      req.session.data.applications[id].personalMoreDetail = req.body.personalMoreDetail
    }
    if ( req.body.moreDetail ) {
      req.session.data.applications[id].moreDetail = req.body.moreDetail
    }

    res.render('applications/withdraw-confirm', { id } )
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


  router.post('/applications/adviser', (req, res) => {

    if ( req.session.data.adviser == "true" ) {

      res.redirect('/applications/adviser-subject')
    } else {

      res.redirect('/details')
    }
  })

  router.post('/applications/adviser-subject', (req, res) => {

    const showAdviserBanner = true

    res.render('/details/index', { showAdviserBanner })

  })

}
