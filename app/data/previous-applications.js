// Copies dummy application and tweaks some fields
const application = JSON.parse(JSON.stringify(require('./application')))

application.submitted = '2020-03-29'
application.choices.ABCDE.status = 'Offer declined'
application.choices.FGHIJ.status = 'Application withdrawn'
application.choices.ZYXWV.status = 'Rejected'

module.exports = {
  12345: application
}
