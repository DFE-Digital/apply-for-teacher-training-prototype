const dummyApplication = require('./dummy-application')

const testData = {
  12345: dummyApplication
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
    address_lookup: (process.env.MVP !== 'true'),
    automatic_breaks: process.env.MVP !== 'true',
    international_address: process.env.MVP !== 'true',
    international_qualifications: process.env.MVP !== 'true',
    nationality: process.env.MVP !== 'true',
    referee_types: process.env.MVP !== 'true',
    self_amend: process.env.MVP !== 'true',
    self_amend_contact_details: process.env.MVP !== 'true',
    self_withdraw: process.env.MVP !== 'true',
    interview_preferences: true
  },
  applications: (process.env.PRODUCTION === 'true') ? {} : testData
}
