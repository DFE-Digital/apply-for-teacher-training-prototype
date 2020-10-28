const dummyApplication = require('./dummy-application')
const dummyDecoupledReferencesApplication = require('./dummy-decoupled-reference-application')

const testData = {
  12345: dummyApplication,
  ABCDE: dummyDecoupledReferencesApplication
}

module.exports = {
  applications: testData,
  find_url: 'http://search-and-compare-ui-pr-442.herokuapp.com',
  flags: {
    address_lookup: false,
    self_amend_email_address: false,
    self_amend_contact_details: false
  },
  visits_from_find: 0
}
