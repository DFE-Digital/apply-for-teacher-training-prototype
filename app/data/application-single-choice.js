// Copies dummy application and tweaks some fields
const application = JSON.parse(JSON.stringify(require('./application')))

application.choices = {
  ABCDE: application.choices.ABCDE
}

module.exports = application
