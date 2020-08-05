const dummyApplication = require('./dummy-application')
const dummyApply2Application = require('./dummy-apply-2-application')
const dummySuccessfulApplication = require('./dummy-successful-application')

const dummyApplications = {
  12345: dummyApplication,
  ABCDE: dummyApply2Application,
  VWXYZ: dummySuccessfulApplication
}

module.exports = {
  visits_from_find: 0,
  // course_from_find: {
  //   courseCode: "X130",
  //   providerCode: "T92"
  // },
  find_url: 'http://search-and-compare-ui-pr-442.herokuapp.com',
  flags: {
    add_another: false,
    address_lookup: false,
    automatic_breaks: process.env.MVP !== 'true',
    self_amend_email_address: false,
    self_amend_contact_details: false,
    interview_preferences: true
  },
  // applications: (process.env.PRODUCTION === 'true') ? {} : testData
  applications: dummyApplications
}
