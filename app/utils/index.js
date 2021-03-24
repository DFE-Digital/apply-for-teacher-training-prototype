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

const hasCompletedSection = key => {
  if (!key || key === null || Object.keys(key).length === 0) {
    return false
  }

  return true
}

// TODO: refactor this to check the "Completed" checkbox state for each
// section instead?
const hasCompletedApplication = req => {
  const application = applicationData(req)

  if (
    module.exports.hasCompletedSection(application.choices) &&
    module.exports.hasCompletedSection(application.references) &&
    module.exports.hasCompletedSection(application.candidate) &&
    module.exports.hasCompletedSection(application.contactInformation) &&
    module.exports.hasCompletedSection(application.additionalSupportDisclose) &&
    module.exports.hasCompletedSection(application.workHistory) &&
    module.exports.hasCompletedSection(application.unpaidExperienceDisclose) &&
    module.exports.hasCompletedSection(application.degree) &&
    module.exports.hasCompletedSection(application.gcse.maths) &&
    module.exports.hasCompletedSection(application.gcse.english) &&
    module.exports.hasCompletedSection(application.gcse.science) &&
    module.exports.hasCompletedSection(application.personalStatement) &&
    module.exports.hasCompletedSection(application.subjectKnowledge) &&
    module.exports.hasCompletedSection(application.interviewNeeds)
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

const toArray = (obj) => {
  if (obj) {
    const arr = []
    for (const [key, value] of Object.entries(obj)) {
      value.id = key
      arr.push(value)
    }
    return arr
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
  defaultSessionData
}
