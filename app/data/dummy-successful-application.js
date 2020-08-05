// Copies dummy application and tweaks some fields
var dummySuccessfulApplication = JSON.parse(JSON.stringify(require('./dummy-application')))

// Status
dummySuccessfulApplication.status = 'completed'

// Choices
dummySuccessfulApplication.choices.ABCDE.status = 'Offer accepted'
dummySuccessfulApplication.choices.FGHIJ.status = 'Offer declined'
dummySuccessfulApplication.choices.ZYXWV.status = 'Offer declined'

// References
dummySuccessfulApplication.referees.first.status = 'Reference given'
dummySuccessfulApplication.referees.second.status = 'Reference given'

module.exports = dummySuccessfulApplication
