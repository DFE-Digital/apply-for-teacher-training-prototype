// Copies dummy application and tweaks some fields
const applicationApplyAgain = JSON.parse(JSON.stringify(require('./application')))

// Custom Apply 2 fields
applicationApplyAgain.apply2 = true
applicationApplyAgain.previousApplications = ['12345']

// No choices yet
applicationApplyAgain.choices = {}

module.exports = applicationApplyAgain
