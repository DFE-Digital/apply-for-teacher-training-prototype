/**
 * Admin routes
 */
module.exports = router => {
  // This fills out every section of your details
  router.get('/admin/complete-details', (req, res) => {
    const data = req.session.data

    // Set personal information
    data.firstName = 'Jane'
    data.lastName = 'Smith'
    data.dateOfBirth = {
      day: '1',
      month: '3',
      year: '1987'
    }
    data.nationalities = ['British']

    // Set contact information
    data.phoneNumber = '07700 900 982'
    data.livesInUk = 'yes'
    data.address = {
      line1: '1 Smith Street',
      line2: 'Someplace',
      town: 'Sometown',
      postalCode: 'S12 03L'
    }

    // Set choices
    data.choices = {
      TD37L8: {
        providerName: 'University of Chester',
        course: 'Physics (1A6W)'
      }
    }

    // Set GCSEs
    data.gcse = {
      maths: {
        id: 'maths',
        type: 'GCSE',
        gradeSingle: 'A*',
        year: '2004',
        country: 'United Kingdom'
      },
      english: {
        id: 'english',
        type: 'GCSE',
        exam: ['English Language', 'English Literature'],
        gradeLanguage: 'C',
        gradeLiterature: 'B',
        year: '2004',
        country: 'United Kingdom'
      },
      science: {
        id: 'science',
        type: 'GCSE',
        exam: 'Double (or combined) award',
        gradeDouble: 'A*A*',
        year: '2004',
        country: 'United Kingdom'
      }
    }

    // Set degree
    data.degrees = {
      G3CL4: {
        provenance: 'domestic',
        type: 'Bachelor of Arts',
        level: 'Bachelor',
        subject: 'Physics',
        institution: 'The University of Manchester',
        country: 'United Kingdom',
        startYear: '2009',
        graduationYear: '20012',
        completed: 'Yes',
        gradeGiven: 'yes',
        grade: 'Upper second-class honours (2:1)'
      }
    }

    // Set other qualifications
    data.otherQualificationsAdded = 'Yes'
    data.otherQualifications = {
      X1C3E: {
        id: 'X1C3E',
        type: 'A level',
        subject: 'English',
        grade: 'B',
        year: '2006'
      },
      Z4N6P: {
        id: 'Z4N6P',
        type: 'A level',
        subject: 'History',
        grade: 'C',
        year: '2006'
      },
      Y5L4P: {
        id: 'Y5L4P',
        type: 'A level',
        subject: 'Drama',
        grade: 'A',
        year: '2006'
      }
    }

    // Set work history
    data.workHistoryAdded = 'no-full-time-education'

    // Set unpaid expeerience
    data.unpaidExperienceAdded = 'no'

    // Set personal statement
    data.personalStatement = 'I’ve wanted to become a teacher since being inspired by passionate and brilliant teachers during my school years. There enthusiasm to get the best out of me and to be the best that I can has led me to applying to become a teacher.\n\nI studed English at GCSE and A level and gained not only high academic grades but also a love for the theatre that I want to pass on to the next generation.\n\nWhile volunteering as a teaching assistant I saw the skills needed to be a great teacher one of which is leadership. I am an adept leader and have shown this in several roles. I volunteered in two schools to get experience in different settings and assisted teachers in Key Stages 1 and 2.\n\nI enjoy reading and learning about contemporary ethics and society, considering how I can use this to benefit the students I teach. While in schools I have seen the rewards and challenges presented to teachers and think I have the qualities to make a difference.'

    // Set subject knowledge
    data.subjectKnowledge = 'I have a passion for literature and drama, and have studied these at A-level. I enjoy reading and regularly going to the theatre. I have also self-published 2 short stories.\n\nI believe I would be able to inspire children with a lifelong passion for reading.'

    // Set disability support
    data.additionalSupportNeeded = 'no'

    // Set interview needs
    data.interviewNeeds = 'no'

    // Set references
    data.references = {
      a714k: {
        type: 'academic',
        name: 'Janet Harper',
        email: 'janet@example.ac.uk',
        relationship: 'I’ve known them 4 years. They were my tutor.'
      },
      b235: {
        type: 'professional',
        name: 'Joseph Banks',
        email: 'joseph@company.com',
        relationship: 'I’ve known them 2 years. They were my manager.'
      }
    }

    // Set safeguarding
    data.safeguarding = 'no'

    // Set equality questions
    data.equalityMonitoring = {
      disabilities: ['none'],
      ethnicGroup: 'Prefer not to say',
      freeSchoolMeals: 'I do not know',
      sex: "Prefer not to say"
    }

    // Set completed sections
    data.completed = {
      personalInformation: 'true',
      contactInformation: 'true',
      choices: 'true',
      english: 'true',
      maths: 'true',
      science: 'true',
      otherQualifications: 'true',
      degree: 'true',
      workHistory: 'true',
      unpaidExperience: 'true',
      personalStatement: 'true',
      subjectKnowledge: 'true',
      additionalSupport: 'true',
      interviewNeeds: 'true',
      references: 'true',
      safeguarding: 'true',
      equalityMonitoring: 'true'
    }

    res.redirect('/details')
  })

  // This lets the candidate receive an offer on one choice
  router.get('/admin/receive-offer', (req, res) => {

    let offersAwaitingDecision = Object.values(req.session.data.applications).filter(application => application.status === "Awaiting decision")

    if (offersAwaitingDecision.length > 0) {

      offersAwaitingDecision[0].status = "Offer received"
      offersAwaitingDecision[0].conditions = [
        { title: 'Fitness to train to teach check', status: 'Pending' },
        { title: 'Disclosure and barring service check', status: 'Pending' }
      ]
    }

    res.redirect('/applications')
  })

  // This lets the candidate receive a rejection
  router.get('/admin/receive-rejection', (req, res) => {

    let offersAwaitingDecision = Object.values(req.session.data.applications).filter(application => application.status === "Awaiting decision")

    if (offersAwaitingDecision.length > 0) {

      offersAwaitingDecision[0].status = "Unsuccessful"
      offersAwaitingDecision[0].rejectionFeedback = "Test"
    }

    res.redirect('/applications')
  })

    // This makes an application inactive
    router.get('/admin/receive-inactive', (req, res) => {

      let offersAwaitingDecision = Object.values(req.session.data.applications).filter(application => application.status === "Awaiting decision")
  
      if (offersAwaitingDecision.length > 0) {
  
        offersAwaitingDecision[0].status = "Inactive"
        offersAwaitingDecision[0].rejectionFeedback = "You can add another application for a different training provider while you wait for a response on this application"
      }
  
      res.redirect('/applications')
    })

  // This pre-fills most of the applicaiton apart from the sections we want to test.
  router.get('/admin/receive-references', (req, res) => {
    const timeNow = new Date().toISOString()

    for (const reference of Object.values(req.session.data.references)) {
      if (!reference.log) { reference.log = [] }
      reference.status = 'Received by training provider'
      reference.log.push({ note: 'Reference received', date: timeNow })
    }

    res.redirect('/accepted')
  })

  // This marks all conditions as met
  router.get('/admin/meet-conditions', (req, res) => {
    let acceptedChoice
    if (req.session.data.choices) {
      acceptedChoice = Object.values(req.session.data.choices).find(choice => (choice.status === 'Pending conditions' || choice.status === 'Offer confirmed'))
    }

    if (acceptedChoice) {
      for (const condition of acceptedChoice.conditions) {
        condition.status = 'Met'
      }

      for (const skeCondition of acceptedChoice.skeConditions) {
        skeCondition.status = 'Completed'
      }
    }

    acceptedChoice.status = 'Offer confirmed'

    res.redirect('/accepted')
  })
}
