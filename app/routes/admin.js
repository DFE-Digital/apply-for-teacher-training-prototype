const utils = require('./../utils')
const data = require('./../utils/data')

/**
 * Admin routes
 */
module.exports = router => {

  router.get('/admin/no-open-applications', (req, res) => {

    req.session.data.applications ||= {}
    let applications = req.session.data.applications

    const openApplications = Object.values(applications).filter(a => (['Awaiting decision', "Offer received", "Inactive"].includes(a.status)))

    for ( i=0; i<openApplications.length; i++ ) {
      openApplications[i].status = 'Unsuccessful'
    }

    res.redirect('/applications')
})

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
        graduationYear: '2012',
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
      additionalSupport: 'true',
      interviewNeeds: 'true',
      references: 'true',
      safeguarding: 'true',
      equalityAndDiversity: 'true'
    }

    // flag so we don't do TTA redirect
    data.autoPopulated = 'true'

    res.redirect('/details')
  })


  // This fills out every section of your details except contact details
  router.get('/admin/complete-details-no-contact', (req, res) => {
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
        graduationYear: '2012',
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
      choices: 'true',
      english: 'true',
      maths: 'true',
      science: 'true',
      otherQualifications: 'true',
      degree: 'true',
      workHistory: 'true',
      unpaidExperience: 'true',
      personalStatement: 'true',
      additionalSupport: 'true',
      interviewNeeds: 'true',
      references: 'true',
      safeguarding: 'true',
      equalityAndDiversity: 'true'
    }

    // flag so we don't do TTA redirect
    data.autoPopulated = 'true'

    res.redirect('/details')
  })


  // This fills out every section of your details except personal statement
  router.get('/admin/complete-details-no-ps', (req, res) => {
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
        graduationYear: '2012',
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
      additionalSupport: 'true',
      interviewNeeds: 'true',
      references: 'true',
      safeguarding: 'true',
      equalityAndDiversity: 'true'
    }

    // flag so we don't do TTA redirect
    data.autoPopulated = 'true'

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
      offersAwaitingDecision[0].rejectionFeedback = "Unfortunately, the course is now full."
    }

    res.redirect('/applications')
  })

    // This makes an application inactive
    router.get('/admin/receive-inactive', (req, res) => {

      let offersAwaitingDecision = Object.values(req.session.data.applications).filter(application => application.status === "Awaiting decision")

      if (offersAwaitingDecision.length > 0) {

        offersAwaitingDecision[0].status = "Inactive"
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

  // This pre-fills most of the applicaiton apart from the sections we want to test.
  router.get('/admin/add-application', (req, res) => {
    const timeNow = new Date().toISOString()
    const id = utils.generateRandomString()

    req.session.data.applications ||= {}
    let applications = req.session.data.applications

    const applicationsAwaitingDecisionOrReceivedOffer = Object.values(applications).filter(a => (['Awaiting decision', "Offer received"].includes(a.status)))
    const applicationAccepted = Object.values(applications).find(a => ['Conditions pending', 'Offer confirmed'].includes(a.status))
    const numberOfApplicationsLeft = 4 - (applicationsAwaitingDecisionOrReceivedOffer.length)


    if (numberOfApplicationsLeft > 0) {

      const providersAlreadyAppliedTo = Object.values(applications).filter(application =>
        (application.status == 'Awaiting decision' || application.status == 'Inactive' || application.status == 'Offer received')
      ).map(application => application.providerName)


      const providersNotYetAppliedTo = data.providers.filter(provider =>
        (!providersAlreadyAppliedTo.includes(provider))
      )


      const course = data.courses[Math.floor(Math.random() * data.courses.length)].title
      const providerName = providersNotYetAppliedTo[Math.floor(Math.random() * providersNotYetAppliedTo.length)]

      applications[id] = {
        status: 'Awaiting decision',
        submittedAt: timeNow,
        course: course,
        providerName: providerName,
        otherCourses: ['no']
      }
    }

    res.redirect('/applications')
  })


  router.get('/admin/setup-applications', (req, res) => {
    const timeNow = new Date().toISOString()

    req.session.data.applications = {}
    let applications = req.session.data.applications


    applications['L59DP'] = {
      status: 'Awaiting decision',
      submittedAt: timeNow,
      course: data.courses[1].title,
      providerName: data.providers[1],
      otherCourses: ['no']
    }

    applications['I61MD'] = {
      status: 'Inactive',
      submittedAt: timeNow,
      course: data.courses[1].title,
      providerName: data.providers[2],
      otherCourses: ['no']
    }

    applications['H746A'] = {
      status: 'Unsuccessful',
      submittedAt: timeNow,
      course: data.courses[1].title,
      providerName: data.providers[3],
      rejectionFeedback: "Unfortunately, the course is now full.",
      otherCourses: ['no']
    }

    applications['Z95LE'] = {
      status: 'Offer received',
      submittedAt: timeNow,
      course: data.courses[1].title,
      providerName: data.providers[4],
      otherCourses: ['no'],
      conditions: [
        { title: 'Fitness to train to teach check', status: 'Pending' },
        { title: 'Disclosure and barring service check', status: 'Pending' }
      ]
    }

    res.redirect('/applications')
  })

  // This marks all conditions as met
  router.get('/admin/meet-conditions', (req, res) => {
    let acceptedChoice
    if (req.session.data.choices) {
      acceptedChoice = Object.values(req.session.data.choices).find(choice => (choice.status === 'Conditions pending' || choice.status === 'Offer confirmed'))
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
