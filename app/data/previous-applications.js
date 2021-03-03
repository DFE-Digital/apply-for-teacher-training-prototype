// Copies dummy application and tweaks some fields
const application = JSON.parse(JSON.stringify(require('./application')))

application.submitted = '2020-03-29'

if (application.choices.ABCDE) {
  application.choices.ABCDE.status = 'Offer declined'
}

if (application.choices.FGHIJ) {
  application.choices.FGHIJ.status = 'Application withdrawn'
}

if (application.choices.ZYXWV) {
  application.choices.ZYXWV.status = 'Rejected'
}

module.exports = {
  12345: application
}
