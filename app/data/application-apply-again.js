// Copies dummy application and tweaks some fields
const applicationApplyAgain = JSON.parse(JSON.stringify(require('./application')))

// Custom Apply 2 fields
applicationApplyAgain.apply2 = true
applicationApplyAgain.previousApplications = ['65432']

// No choices yet
applicationApplyAgain.choices = {}
applicationApplyAgain.completed.choices = false
applicationApplyAgain.completed.personalStatement = false

module.exports = applicationApplyAgain
