
// Copies dummy application and tweaks some fields
const internationalApplicationNoRightToStudyYet = JSON.parse(JSON.stringify(require('./application-international')))
internationalApplicationNoRightToStudyYet.candidate.immigration = 'Not yet'
internationalApplicationNoRightToStudyYet.candidate.immigrationStatusDetails = ''

const applicationWhereNotMeetingMinimiumDegreeRequirement = JSON.parse(JSON.stringify(require('./application')))
applicationWhereNotMeetingMinimiumDegreeRequirement.choices.ABCDE.degreeRequired = '21'
applicationWhereNotMeetingMinimiumDegreeRequirement.choices.FGHIJ.degreeRequired = '22'
applicationWhereNotMeetingMinimiumDegreeRequirement.choices.ZYXWV.degreeRequired = 'third'
applicationWhereNotMeetingMinimiumDegreeRequirement.degree.abcde.grade = 'Third-class honours'

const applicationWhereStudyingForGcse = JSON.parse(JSON.stringify(require('./application')))
applicationWhereStudyingForGcse.gcse.english.type = 'not-yet'
applicationWhereStudyingForGcse.gcse.english.currentlyStudying = 'yes'
applicationWhereStudyingForGcse.gcse.english.missing = 'I am currently studying for a GCSE English part-time.'

const applicationWithNoGcse = JSON.parse(JSON.stringify(require('./application')))
applicationWithNoGcse.gcse.english.type = 'not-yet'
applicationWithNoGcse.gcse.english.currentlyStudying = 'no'
applicationWithNoGcse.gcse.english.missing = 'I have been working in publishing for 10 years, and can demonstrate my English through an equivalency test'

const applicationForTesting = JSON.parse(JSON.stringify(require('./application')))
applicationForTesting.degree = {}
applicationForTesting.gcse = {}
applicationForTesting.otherQualifications = {}
applicationForTesting.completed.degree = ''
applicationForTesting.completed.english = ''
applicationForTesting.completed.maths = ''
applicationForTesting.completed.science = ''
applicationForTesting.completed.otherQualifications = ''
applicationForTesting.otherQualificationsDisclose = null

applicationForTesting.choices.ABCDE.courseCode = 'X100'
applicationForTesting.choices.ABCDE.providerCode = 'S31'

applicationForTesting.choices.FGHIJ.courseCode = 'G822'
applicationForTesting.choices.FGHIJ.providerCode = '222'

applicationForTesting.choices.ZYXWV.courseCode = '2C9N'
applicationForTesting.choices.ZYXWV.providerCode = 'S95'


applicationForTestingWithNoPersonalDetails = JSON.parse(JSON.stringify(applicationForTesting))
applicationForTestingWithNoPersonalDetails.completed.personalInformation = ''
delete applicationForTestingWithNoPersonalDetails.candidate

module.exports = {
  applications: {
    12345: require('./application'),
    65432: require('./previous-applications'),
    12346: require('./application-apply-again'),
    23456: require('./application-apply-again-with-choice'),
    ABCDE: require('./application-with-choices'),
    45678: require('./application-single-choice'),
    GLOBE: require('./application-international'),
    WORLD: require('./application-international-with-choices'),
    21234: internationalApplicationNoRightToStudyYet,
    52614: applicationWhereNotMeetingMinimiumDegreeRequirement,
    21235: applicationWhereStudyingForGcse,
    21236: applicationWithNoGcse,
    test1: applicationForTesting,
    test2: applicationForTestingWithNoPersonalDetails
  },
  findUrl: 'https://www.find-postgraduate-teacher-training.service.gov.uk',
  flags: {
    addressLookup: false,
    selfAmendEmailAddress: false,
    selfAmendContactDetails: false
  },
  visitsFromFind: 0,
  previousApplications: {}
}
