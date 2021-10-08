// Not sure why we need to load this again, here
const dotenv = require('dotenv')
dotenv.config()

const querystring = require('querystring')
const { DateTime } = require('luxon')
let notify

if (process.env.NOTIFYAPIKEY) {
  const NotifyClient = require('notifications-node-client').NotifyClient
  notify = new NotifyClient(process.env.NOTIFYAPIKEY)
}

const providers = require('./../data/providers')
const path = require('path')

const applicationData = (req) => {
  const applicationId = req.query.applicationId || req.params.applicationId
  return req.session.data.applications[applicationId]
}

const capitaliseFirstLetter = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const defaultSessionData = () => {
  const sessionDataDefaultsFile = path.join(__dirname, '/../data/session-data-defaults.js')
  const sessionDataDefaults = require(sessionDataDefaultsFile)

  // Return deep copy of session default so that it can always be restored.
  return JSON.parse(JSON.stringify(sessionDataDefaults))
}

const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5).toUpperCase()
}

const getQueryString = (req) => {
  return querystring.stringify(req.query)
}

const getProvider = (providerCode) => {
  return providers[providerCode]
}

const getCourse = (providerCode, courseCode) => {
  return providers[providerCode].courses[courseCode]
}

const saveIsoDate = (req, data, id, blankEqualsNow = true) => {
  // If no ID, we won’t have any dates to convert
  if (!id) {
    return
  }

  // Create ISO 8601 start date
  const startDay = (req.body[`${id}-startDate-day`] || '1').padStart(2, '0')
  const startMonth = (req.body[`${id}-startDate-month`]).padStart(2, '0')
  const startYear = req.body[`${id}-startDate-year`]
  data[id].startDate = false

  if (startMonth && startYear) {
    data[id].startDate = `${startYear}-${startMonth}-${startDay}`
  }

  // Create ISO 8601 end date
  const endDay = (req.body[`${id}-endDate-day`] || '1').padStart(2, '0')
  const endMonth = (req.body[`${id}-endDate-month`]).padStart(2, '0')
  const endYear = req.body[`${id}-endDate-year`]

  if (blankEqualsNow) {
    data[id].endDate = 'now' // No date indicates today
  }

  if (endMonth && endYear) {
    data[id].endDate = `${endYear}-${endMonth}-${endDay}`
  }
}

// Emails will only send if the email address has been whitelisted
const sendEmail = (req, template, personalisation) => {
  const email = req.session.data.account && req.session.data.account.email
  personalisation = personalisation || {}
  personalisation.url = req.get('origin') || `${req.protocol}://${req.get('host')}`

  if (email && (typeof notify !== 'undefined')) {
    notify.sendEmail(
      template,
      email,
      { personalisation }
    )
  }
}

const nowPlusDays = (days, format = 'yyyy-LL-dd') => {
  const date = DateTime.local().plus({ days: days })

  return DateTime.fromISO(date, {
    locale: 'en-GB'
  }).toFormat(format)
}

const hasApplications = (req) => {
  const { applications } = req.session.data
  return Object.values(applications).length > 0
}

const hasSubmittedApplications = (req) => {
  const { applications } = req.session.data
  const states = ['Submitted', 'Amending', 'Amended']
  if (applications) {
    const status = Object.values(applications).map(a => a.status)
    return states.some(state => status.includes(state))
  }
}

const hasStartedApplications = (req) => {
  const { applications } = req.session.data
  if (applications) {
    const status = Object.values(applications).map(a => a.status)
    return status.includes('started')
  }
}

const hasCompletedSection = section => {
  return section === 'true'
}

const hasCompletedApplication = req => {
  const { completed } = applicationData(req)

  if (
    module.exports.hasCompletedSection(completed.choices) &&
    module.exports.hasCompletedSection(completed.personalInformation) &&
    module.exports.hasCompletedSection(completed.contactInformation) &&
    module.exports.hasCompletedSection(completed.english) &&
    module.exports.hasCompletedSection(completed.maths) &&
    module.exports.hasCompletedSection(completed.science) &&
    module.exports.hasCompletedSection(completed.otherQualifications) &&
    module.exports.hasCompletedSection(completed.degree) &&
    module.exports.hasCompletedSection(completed.workHistory) &&
    module.exports.hasCompletedSection(completed.unpaidExperience) &&
    module.exports.hasCompletedSection(completed.personalStatement) &&
    module.exports.hasCompletedSection(completed.subjectKnowledge) &&
    module.exports.hasCompletedSection(completed.additionalSupport) &&
    module.exports.hasCompletedSection(completed.interviewNeeds) &&
    module.exports.hasCompletedSection(completed.safeguarding)
  ) {
    return true
  }

  return false
}

const hasPrimaryChoices = (req) => {
  const application = applicationData(req)

  try {
    const { choices } = application

    const result = Object.values(choices).map((a) => {
      const providerCode = a.providerCode
      const courseCode = a.courseCode
      const course = req.app.locals.providers[providerCode].courses[courseCode]
      return course.name.toLowerCase().includes('primary')
    })

    return result.includes(true)
  } catch (error) {
    return false
  }
}

const highestDegreeGrade = (req) => {

  const application = applicationData(req)
  const degrees = toArray(application.degree)

  const degreeGrades = degrees.map(degree => degree.grade)

  if (degreeGrades.includes("First-class honours")) {
    return "first"
  } else if (degreeGrades.includes("Upper second-class honours (2:1)")) {
    return "21"
  } else if (degreeGrades.includes("Lower second-class honours (2:2)")) {
    return "22"
  } else if (degreeGrades.includes("Third-class honours")) {
    return "third"
  } else if (degreeGrades.includes("Pass")) {
    return "pass"
  } else {
    return null
  }
}


const toArray = (obj) => {
  if (obj) {
    const arr = []
    for (const [key, value] of Object.entries(obj)) {
      value.id = key
      arr.push(value)
    }
    return arr
  } else {
    return []
  }
}

module.exports = {
  applicationData,
  capitaliseFirstLetter,
  generateRandomString,
  queryString: getQueryString,
  getProvider,
  getCourse,
  saveIsoDate,
  sendEmail,
  nowPlusDays,
  hasApplications,
  hasCompletedApplication,
  hasCompletedSection,
  hasPrimaryChoices,
  hasSubmittedApplications,
  hasStartedApplications,
  toArray,
  defaultSessionData,
  highestDegreeGrade
}
