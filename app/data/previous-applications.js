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

// Add some A-levels.
application.completed.otherQualifications = ['true']
application.otherQualificationsDisclose = 'Yes'
application.otherQualifications = {
  abcde: {
    type: "A level",
    subject: "English language",
    grade: "B",
    year: "2006"
  },
  fghij: {
    type: "A level",
    subject: "English literature",
    grade: "A",
    year: "2006"
  },
  klmno: {
    type: "A level",
    subject: "Drama and Theatre studies",
    grade: "C",
    year: "2006"
  }
}

if (application.choices.FGHIJ) {
  application.choices.FGHIJ.status = 'Unsuccessful'
}

if (application.choices.ZYXWV) {
  application.choices.ZYXWV.status = 'Unsuccessful'
}

module.exports = application
