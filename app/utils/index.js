// Not sure why we need to load this again, here
const dotenv = require('dotenv')
dotenv.config()

const querystring = require('querystring')
const { DateTime } = require('luxon')
const NotifyClient = require('notifications-node-client').NotifyClient
const notify = new NotifyClient(process.env.NOTIFYAPIKEY)
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

  console.log('reloading session data from file')
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
  const startDay = (req.body[`${id}-start-date-day`] || '1').padStart(2, '0')
  const startMonth = (req.body[`${id}-start-date-month`]).padStart(2, '0')
  const startYear = req.body[`${id}-start-date-year`]
  data[id]['start-date'] = false

  if (startMonth && startYear) {
    data[id]['start-date'] = `${startYear}-${startMonth}-${startDay}`
  }

  // Create ISO 8601 end date
  const endDay = (req.body[`${id}-end-date-day`] || '1').padStart(2, '0')
  const endMonth = (req.body[`${id}-end-date-month`]).padStart(2, '0')
  const endYear = req.body[`${id}-end-date-year`]

  if (blankEqualsNow) {
    data[id]['end-date'] = 'now' // No date indicates today
  }

  if (endMonth && endYear) {
    data[id]['end-date'] = `${endYear}-${endMonth}-${endDay}`
  }
}

// Emails will only send if the email address has been whitelisted
const sendEmail = (req, template, personalisation) => {
  const email = req.session.data.account && req.session.data.account.email
  personalisation = personalisation || {}
  personalisation.url = req.get('origin') || `${req.protocol}://${req.get('host')}`

  if (email) {
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

const hasCompletedApplication = req => {
  const application = applicationData(req)

  if (
    module.exports.hasCompletedSection(application.choices) &&
    module.exports.hasCompletedSection(application.references) &&
    module.exports.hasCompletedSection(application.candidate) &&
    module.exports.hasCompletedSection(application['contact-details']) &&
    module.exports.hasCompletedSection(application['reasonable-adjustments']) &&
    module.exports.hasCompletedSection(application['work-history']) &&
    module.exports.hasCompletedSection(application['school-experience']) &&
    module.exports.hasCompletedSection(application.degree) &&
    module.exports.hasCompletedSection(application.gcse.maths) &&
    module.exports.hasCompletedSection(application.gcse.english) &&
    module.exports.hasCompletedSection(application.gcse.science) &&
    module.exports.hasCompletedSection(application['personal-statement']) &&
    module.exports.hasCompletedSection(application['subject-knowledge']) &&
    module.exports.hasCompletedSection(application.interview)
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
