const utils = require('./../utils')

module.exports = router => {

  router.get('/applications/start', (req, res) => {

    res.render('applications/start')
  })


  router.get('/applications', (req, res) => {

    const applications = (req.session.data.applications ? Object.values(req.session.data.applications) : [] )

    const applicationsAwaitingDecisionOrReceivedOffer = applications.filter(a => (['Awaiting decision', "Offer received"].includes(a.status)))

    const numberOfApplicationsLeft = 4 - (applicationsAwaitingDecisionOrReceivedOffer.length)

    res.render('applications/index', {
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

    const providers = [
      'Alban Federation SCITT',
      'Ambition Institute',
      'Anglia Ruskin University',
      'Bluecoat SCITT Alliance Nottingham',
      'ARK Teacher Training',
      'Bath Spa University',
      'NELTA',
      'Best Practice Network',
      'Birmingham City University',
      'Bishop Challoner Training School',
      'Bishop Grosseteste University',
      'London District East SCITT',
      'Mid Essex Initial Teacher Training',
      'Bright Futures SCITT',
      'Bromley Schools’ Collegiate',
      'Cabot Learning Federation SCITT',
      'Canterbury Christ Church University',
      'Cheshire East SCITT',
      'Chiltern Training Group',
      'The National Modern Languages SCITT',
      'Norfolk Teacher Training Centre',
      'Scarborough Teaching Alliance',
      'SCITT in East London Schools (SCITTELS)',
      'Kingsbridge EIP SCITT',
      'Coventry University',
      'Mid Somerset Consortium for Teacher Training',
      'Exchange Teacher Training',
      'Astra SCITT',
      'EAST SCITT',
      'East Midlands Teacher Training Partnership',
      'Durham SCITT',
      'Edge Hill University',
      'Educate Group Initial Teacher Training',
      'Education South West',
      'West Essex SCITT',
      'e-Qualitas',
      'Essex and Thames SCITT',
      'Exceed SCITT',
      'University Centre Farnborough',
      'Future Teacher Training',
      'Goldsmiths, University of London',
      'GORSE SCITT',
      'AA Teamworks West Yorkshire SCITT',
      'Harris ITT',
      'Fareham and Gosport Primary SCITT',
      'Haybridge Alliance SCITT',
      'Tes Institute',
      'Inspiring Future Teachers',
      'Primary Catholic Partnership SCITT',
      'i2i Teaching Partnership SCITT',
      'Chepping View Primary Academy SCITT',
      'Inspiring Leaders',
      'The John Taylor SCITT',
      'King Edward’s Consortium',
      'King’s College London',
      'Kingston University',
      'Leeds Beckett University',
      'Leeds Trinity University',
      'Leicestershire Secondary SCITT',
      'Kent and Medway Training - KMT',
      'Liverpool Hope University',
      'Liverpool John Moores University',
      'London Metropolitan University',
      'London School of Jewish Studies (LSJS)',
      'Loughborough University',
      'Luminate Partnership for ITT',
      'Associated Merseyside Partnership SCITT',
      'Manchester Metropolitan University',
      'Barr Beacon SCITT',
      'The Cambridge Partnership',
      'Mersey Boroughs ITT Partnership',
      'Middlesex University',
      'Mulberry College of Teaching',
      'Newman University',
      'North Lincolnshire SCITT Partnership',
      'North Tyneside SCITT',
      'Northampton Teacher Training Partnership',
      'The Sheffield SCITT',
      'Nottingham Trent University',
      'Nottinghamshire Torch SCITT',
      '2Schools Consortium',
      'Oxford Brookes University',
      'Partnership London SCITT (PLS)',
      'Pioneers Partnership SCITT',
      'Portsmouth Primary SCITT',
      'Prestolee SCITT',
      'REAch Teach Primary Partnership',
      'Red Kite Teacher Training',
      'Oxfordshire Teacher Training',
      'University of Roehampton',
      'Royal Borough of Windsor & Maidenhead SCITT',
      'Sacred Heart Newcastle SCITT',
      'National Institute of Teaching',
      'Sheffield Hallam University',
      'Calderdale & Kirklees Teaching School',
      'Somerset SCITT Consortium',
      'Huddersfield Horizon SCITT',
      'Titan Partnership Ltd',
      'Bradford Birth to 19 SCITT',
      'St. Joseph’s College Stoke Secondary Partnership',
      'St Mary’s College',
      'St Mary’s University',
      'Staffordshire University',
      'Star Teachers SCITT',
      'Stockton Teacher Training Partnership',
      'Stourport SCITT',
      'Suffolk and Norfolk Secondary SCITT',
      'South Birmingham SCITT',
      'Surrey South Farnham SCITT',
      'Devon Primary SCITT',
      'Teach First',
      'Poole SCITT',
      'Teaching London: LDBS SCITT',
      'Teesside University ITT',
      'Colchester Teacher Training Consortium',
      'Arthur Terry SCITT',
      'Gloucestershire Initial Teacher Education Partnership',
      'Ripley ITT',
      'Buckingham Partnership',
      'The Cambridge Teaching Schools Network, CTSN SCITT',
      'Compton SCITT',
      'The Coventry SCITT',
      'Manchester Nexus SCITT',
      'Ashton on Mersey School SCITT',
      'The Tommy Flowers SCITT Milton Keynes',
      'Yorkshire Wolds Teacher Training',
      'The Grand Union Training Partnership',
      'TKAT SCITT',
      'London East Teacher Training Alliance',
      'University of Cambridge',
      'Lincolnshire SCITT',
      'Embrace SCITT',
      'Keele and North Staffordshire Teacher Education',
      'George Spencer Academy SCITT',
      'South West Teacher Training',
      'Sutton SCITT',
      'Cornwall School Centred Initial Teacher Training (Cornwall SCITT)',
      'Teach West London Teaching School Hub',
      'Bournemouth Poole & Dorset Teacher Training Partnership',
      'United Teaching National SCITT',
      'University College London (UCL)',
      'University of Bedfordshire',
      'University of Birmingham',
      'University of Brighton',
      'University of Bristol',
      'University of Buckingham',
      'University of Chester',
      'University of Chichester',
      'University of Derby',
      'University of East London',
      'University of Exeter',
      'University of Gloucestershire',
      'University of Hertfordshire',
      'University of Huddersfield',
      'University of Leicester',
      'University of Manchester',
      'Newcastle University',
      'University of Northampton',
      'University of Northumbria',
      'University of Nottingham',
      'University of Oxford',
      'University of Portsmouth',
      'University of Reading',
      'University of Sheffield',
      'University of Southampton',
      'Plymouth Marjon University',
      'University of Sunderland',
      'University of Warwick',
      'University of Winchester',
      'University of Wolverhampton',
      'University of Worcester',
      'University of York',
      'Wandsworth Primary Schools’ Consortium',
      'One Cumbria',
      'West Midlands Consortium',
      'Wildern Partnership',
      'The National Mathematics and Physics SCITT',
      'Xavier Teach SouthEast',
      'York St John University'
    ]

    const providerItems = providers
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

    if (providersWaitingOnDecision.includes(providerSelected)) {
      res.redirect(`/applications/${id}/provider-already-submitted`)
    } else if (providersInDraft.includes(providerSelected)) {
      res.redirect(`/applications/${id}/provider-already-selected`)
    } else {
      res.redirect(`/applications/${id}/course`)
    }

  })

  router.get('/applications/:id/course', (req, res) => {
    const { id } = req.params

    const courses = [
      {
        title: 'Art and Design (2NJL)',
        qualification: 'QTS full time'
      },
      {
        title: 'Biology (83SL)',
        qualification: 'QTS full time'
      },
      {
        title: 'Chemistry (8FYF)',
        qualification: 'QTS full time'
      },
      {
        title: 'Computing (20SY)',
        qualification: 'QTS full time'
      },
      {
        title: 'Design and Technology (1L0D)',
        qualification: 'QTS full time'
      },
      {
        title: 'English (4J7S)',
        qualification: 'QTS full time'
      },
      {
        title: 'History (2L5D)',
        qualification: 'QTS full time'
      },
      {
        title: 'Mathematics (8S0D)',
        qualification: 'QTS full time'
      },
      {
        title: 'Physics (1A6W)',
        qualification: 'QTS full time'
      },
      {
        title: 'Primary (7S9D)',
        qualification: 'QTS full time'
      }
    ]

    const courseItems = courses
      .sort((a, b) => (a.title.localeCompare(b.title)))
      .map(course => ({ text: course.title, value: course.title, hint: { text: course.qualification } }))

    res.render('applications/course', {
      id,
      courseItems
    })
  })

  router.get('/applications/:id/courses-other', (req, res) => {
    const { id } = req.params

    const courses = [
      {
        title: 'Art and Design (2NJL)',
        qualification: 'QTS full time'
      },
      {
        title: 'Biology (83SL)',
        qualification: 'QTS full time'
      },
      {
        title: 'Chemistry (8FYF)',
        qualification: 'QTS full time'
      },
      {
        title: 'Computing (20SY)',
        qualification: 'QTS full time'
      },
      {
        title: 'Design and Technology (1L0D)',
        qualification: 'QTS full time'
      },
      {
        title: 'English (4J7S)',
        qualification: 'QTS full time'
      },
      {
        title: 'History (2L5D)',
        qualification: 'QTS full time'
      },
      {
        title: 'Mathematics (8S0D)',
        qualification: 'QTS full time'
      },
      {
        title: 'Physics (1A6W)',
        qualification: 'QTS full time'
      },
      {
        title: 'Primary (7S9D)',
        qualification: 'QTS full time'
      }
    ]

    var courseItems = courses
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

  router.get('/applications/:id/personal-statement', (req, res) => {
    const { id } = req.params
    res.render('applications/personal_statement', {
      id
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
    const { id } = req.params
    res.render('applications/review', {
      id
    })
  })


  router.get('/applications/:id/delete', (req, res) => {
    const { id } = req.params
    res.render('applications/delete', {
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

    const submitNow = req.body.submitNow

    if (submitNow === 'yes') {
      req.session.data.applications[id].status = "Awaiting decision"
      req.session.data.applications[id].submittedAt = new Date()
      res.redirect('/applications')
    } else if (submitNow === 'no') {
      res.redirect('/applications')
    } else {
      res.redirect('/applications/' + id + "/review")
    }

  })

  router.post('/applications/:id/delete', (req, res) => {
    const { id } = req.params

    delete req.session.data.applications[id]

    res.redirect('/applications')
  })

  router.post('/applications/:id/decision', (req, res) => {
    const { id } = req.params
    const decision = req.body.decision
    const application = req.session.data.applications[id]

    if (decision === 'accept') {
      application.status = 'Conditions pending'
    } else if (decision == 'decline') {
      application.status = 'Offer declined'
    }

    res.redirect('/applications')
  })
}
