module.exports = {
  applications: {
    12345: require('./application'),
    65432: require('./previous-applications'),
    12346: require('./application-apply-again'),
    23456: require('./application-apply-again-with-choice'),
    ABCDE: require('./application-with-choices'),
    45678: require('./application-single-choice'),
    GLOBE: require('./application-international')
  },
  findUrl: 'http://search-and-compare-ui-pr-442.herokuapp.com',
  flags: {
    addressLookup: false,
    selfAmendEmailAddress: false,
    selfAmendContactDetails: false
  },
  visitsFromFind: 0,
  previousApplications: {}
}
