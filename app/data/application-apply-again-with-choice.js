// Copies dummy application and tweaks some fields
const applicationApplyAgainWithChoice = JSON.parse(JSON.stringify(require('./application')))

// Custom Apply 2 fields
applicationApplyAgainWithChoice.apply2 = true
applicationApplyAgainWithChoice.previousApplications = ['12345']

// No choices yet
applicationApplyAgainWithChoice.choices = {'ABCDE': applicationApplyAgainWithChoice.choices['ABCDE']}

module.exports = applicationApplyAgainWithChoice
