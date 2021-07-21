
// Copies dummy application and tweaks some fields
const internationalApplicationNoRightToStudyYet = JSON.parse(JSON.stringify(require('./application-international')))

internationalApplicationNoRightToStudyYet.candidate.residencyDisclose = 'I will need to apply for permission to work or study in the UK'
internationalApplicationNoRightToStudyYet.candidate.residency  = ''

applicationWhereNotMeetingMinimiumDegreeRequirement =  JSON.parse(JSON.stringify(require('./application')))

applicationWhereNotMeetingMinimiumDegreeRequirement.choices.ABCDE.degreeRequired = "21"
applicationWhereNotMeetingMinimiumDegreeRequirement.choices.FGHIJ.degreeRequired = "22"
applicationWhereNotMeetingMinimiumDegreeRequirement.choices.ZYXWV.degreeRequired = "third"
applicationWhereNotMeetingMinimiumDegreeRequirement.degree.abcde.grade = "Third-class honours"

module.exports = {
  applications: {
    12345: require('./application'),
    65432: require('./previous-applications'),
    12346: require('./application-apply-again'),
    23456: require('./application-apply-again-with-choice'),
    ABCDE: require('./application-with-choices'),
    45678: require('./application-single-choice'),
    GLOBE: require('./application-international'),
    21234: internationalApplicationNoRightToStudyYet,
    52614: applicationWhereNotMeetingMinimiumDegreeRequirement
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
