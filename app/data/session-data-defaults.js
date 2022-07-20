
// Copies dummy application and tweaks some fields
const internationalApplicationNoRightToStudyYet = JSON.parse(JSON.stringify(require('./application-international')))
internationalApplicationNoRightToStudyYet.candidate.immigration = 'No'

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

const applicationWithDegreeSectionNotStarted = JSON.parse(JSON.stringify(require('./application')))
applicationWithDegreeSectionNotStarted.completed.degree = null
applicationWithDegreeSectionNotStarted.degree = {}

const applicationWithFoundationDegreeOnly = JSON.parse(JSON.stringify(require('./application')))
applicationWithFoundationDegreeOnly.completed.degree = null
applicationWithFoundationDegreeOnly.degree = {
  abcde: {
    id: 'abcde',
    provenance: 'domestic',
    type: 'Foundation of Arts',
    level: 'Foundation',
    subject: 'Art History',
    org: 'The University of Edinburgh',
    country: 'United Kingdom',
    yearStart: '2006',
    yearEnd: '2009',
    completed: 'Yes',
    grade: 'Lower second-class honours (2:2)'
  }
}


const applicationWithReceivedReferences = JSON.parse(JSON.stringify(require('./application')))
applicationWithReceivedReferences.references.first.status = 'Reference received'
applicationWithReceivedReferences.references.second.status = 'Reference received'
applicationWithReceivedReferences.references.third.status = 'Requested'

module.exports = {
  applications: {
    12345: require('./application'),
    65432: require('./previous-applications'),
    12346: require('./application-apply-again'),
    23456: require('./application-apply-again-with-choice'),
    ABCDE: require('./application-with-choices'),
    45678: require('./application-single-choice'),
    84659: applicationWithReceivedReferences,
    GLOBE: require('./application-international'),
    WORLD: require('./application-international-with-choices'),
    DEGREE: applicationWithDegreeSectionNotStarted,
    FOUNDATION: applicationWithFoundationDegreeOnly,
    21234: internationalApplicationNoRightToStudyYet,
    52614: applicationWhereNotMeetingMinimiumDegreeRequirement,
    21235: applicationWhereStudyingForGcse,
    21236: applicationWithNoGcse
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
