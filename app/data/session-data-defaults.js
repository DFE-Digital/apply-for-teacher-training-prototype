const application = require('./application')
const applicationApplyAgain = require('./application-apply-again')
const applicationWithChoices = require('./application-with-choices')
const applicationWithSingleChoice = require('./application-single-choice')
const applicationApplyAgainWithChoice = require('./application-apply-again-with-choice')


module.exports = {
  applications: {
    12345: application,
    12346: applicationApplyAgain,
    23456: applicationApplyAgainWithChoice,
    'ABCDE': applicationWithChoices,
    45678: applicationWithSingleChoice
  },
  find_url: 'http://search-and-compare-ui-pr-442.herokuapp.com',
  flags: {
    address_lookup: false,
    self_amend_email_address: false,
    self_amend_contact_details: false
  },
  visits_from_find: 0
}
