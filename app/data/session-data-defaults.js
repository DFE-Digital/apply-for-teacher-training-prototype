
// Copies dummy application and tweaks some fields
const internationalApplicationNoRightToStudyYet = JSON.parse(JSON.stringify(require('./application-international')))
internationalApplicationNoRightToStudyYet.candidate.residencyDisclose = 'I will need to apply for permission to work or study in the UK'
internationalApplicationNoRightToStudyYet.candidate.residency = ''

const applicationWhereNotMeetingMinimiumDegreeRequirement = JSON.parse(JSON.stringify(require('./application')))
applicationWhereNotMeetingMinimiumDegreeRequirement.choices.ABCDE.degreeRequired = '21'
applicationWhereNotMeetingMinimiumDegreeRequirement.choices.FGHIJ.degreeRequired = '22'
applicationWhereNotMeetingMinimiumDegreeRequirement.choices.ZYXWV.degreeRequired = 'third'
applicationWhereNotMeetingMinimiumDegreeRequirement.degree.abcde.grade = 'Third-class honours'


applicationWhereStudyingForGcse =  JSON.parse(JSON.stringify(require('./application')))

applicationWhereStudyingForGcse.gcse.english.type = 'not-yet'
applicationWhereStudyingForGcse.gcse.english.currentlyStudying = 'yes'
applicationWhereStudyingForGcse.gcse.english.missing = 'I am currently studying for a GCSE English part-time.'

applicationWithNoGcse =  JSON.parse(JSON.stringify(require('./application')))

applicationWithNoGcse.gcse.english.type = 'not-yet'
applicationWithNoGcse.gcse.english.currentlyStudying = 'no'
applicationWithNoGcse.gcse.english.missing = 'I have been working in publishing for 10 years, and can demonstrate my English through an equivalency test'

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
