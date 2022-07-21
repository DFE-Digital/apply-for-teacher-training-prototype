const utils = require('../utils')

/**
 * Admin routes
 */
module.exports = router => {
  // Clear all data in session if you open /admin/clear-data
  router.post('/admin/clear-data', function (req, res) {
    req.session.data = {}

    res.render('admin/clear-data-success')
  })

  // Show feature flags
  router.get('/admin/flags', (req, res) => {
    res.render('admin/flags', {
      flags: req.session.data.flags
    })
  })

  // This pre-fills most of the applicaiton apart from the sections we want to test.
  router.get('/admin/prefill', (req, res) => {
    const applicationId = req.query.applicationId
    var application = utils.applicationData(req)

    if (!application.completed) { application.completed = {} }

    // Set choices
    application.choices = {
      TD37L8: {
        courseCode: '2MH9',
        providerCode: '1DR',
        locationName: 'Hillcrest Academy',
        locationAddress: 'Cowper Street, Leeds. LS7 4DR',
        studyMode: 'Full time',
        type: 'PGCE with QTS full time',
        length: '1 year',
        starts: '2022-09',
        status: 'Awaiting decision',
        degreeRequired: 'degree',
        isSalaried: false
      }
    }
    application.completed.choices = 'true'

    // Set additional support
    application.additionalSupportDisclose = 'No'
    application.completed.additionalSupport = 'true'

    application.interviewNeedsDisclose =  'No'
    application.completed.interviewNeeds = 'true'

    // Set GCSE
    application.completed.english = 'true'
    application.completed.science = 'true'
    application.completed.maths = 'true'
    application.gcse = {
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
    application.degree = {
      G3CL4: {
        id: 'kq19m',
        provenance: 'domestic',
        type: 'Bachelor of Arts',
        level: 'Bachelor',
        subject: 'Physics',
        org: 'The University of Manchester',
        country: 'United Kingdom',
        yearStart: '2009',
        yearEnd: '20012',
        completed: 'Yes',
        grade: 'Upper second-class honours (2:1)'
      }
    }
    application.completed.degree = 'true'

    // Set other qualifications
    application.otherQualificationsDisclose = 'Yes'
    application.otherQualifications = {
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
    application.completed.otherQualifications = 'true'

    // Set personal statement
    application.personalStatement = 'I’ve wanted to become a teacher since being inspired by passionate and brilliant teachers during my school years. There enthusiasm to get the best out of me and to be the best that I can has led me to applying to become a teacher.\n\nI studed English at GCSE and A level and gained not only high academic grades but also a love for the theatre that I want to pass on to the next generation.\n\nWhile volunteering as a teaching assistant I saw the skills needed to be a great teacher one of which is leadership. I am an adept leader and have shown this in several roles. I volunteered in two schools to get experience in different settings and assisted teachers in Key Stages 1 and 2.\n\nI enjoy reading and learning about contemporary ethics and society, considering how I can use this to benefit the students I teach. While in schools I have seen the rewards and challenges presented to teachers and think I have the qualities to make a difference.'
    application.completed.personalStatement = 'true'

    // Set subject knowledge
    application.subjectKnowledge = 'I have a passion for literature and drama, and have studied these at A-level. I enjoy reading and regularly going to the theatre. I have also self-published 2 short stories.\n\nI believe I would be able to inspire children with a lifelong passion for reading.'
    application.completed.subjectKnowledge = 'true'

    // Set work history and unpaid experience
    application.workHistoryDisclose = 'No, I have always been in full time education'
    application.completed.workHistory = 'true'
    application.unpaidExperienceDisclose = 'No'
    application.completed.unpaidExperience = 'true'

    res.redirect(`/application/${applicationId}`)
  })
}
