// Copies dummy application and tweaks some fields
const application = JSON.parse(JSON.stringify(require('./application')))

// No completed sections yet
module.exports = {
  status: 'started',
  welcomeFlow: false,
  apply2: false,
  account: {
    email: 'janina.doe@example.com'
  },
  choices: {
    ABCDE: application.choices.ABCDE
  },
  references: []
}
