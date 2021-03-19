// Copies dummy application and tweaks some fields
const application = JSON.parse(JSON.stringify(require('./application')))

application.submitted = '2020-03-29'

if (application.choices.ABCDE) {
  application.choices.ABCDE.status = 'Unsuccessful'
  application.choices.ABCDE.feedback = {
    qualityOfApplication: {
      personalStatement: "Your rationale for wanting to teach was strong but your personal statement did not demonstrate that you understand the rewards and challenges of teaching. There were a number of spelling and grammar errors throughout the application."
    }
  }
}

if (application.choices.FGHIJ) {
  application.choices.FGHIJ.status = 'Unsuccessful'
}

if (application.choices.ZYXWV) {
  application.choices.ZYXWV.status = 'Unsuccessful'
}

module.exports = application
