const querystring = require('querystring')

const applicationData = (req) => {
  return req.session.data.applications[req.params.applicationId]
}

const capitaliseFirstLetter = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5).toUpperCase()
}

const getQueryString = (req) => {
  return querystring.stringify(req.query)
}

const saveIsoDate = (req, data, id) => {
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
  data[id]['end-date'] = 'now' // No date indicates today

  if (endMonth && endYear) {
    data[id]['end-date'] = `${endYear}-${endMonth}-${endDay}`
  }
}

const hasApplications = (req) => {
  return Object.values(req.session.data.applications).length > 0
}

const hasSubmittedApplications = (req) => {
  var applications = req.session.data.applications
  if (applications) {
    return Object.values(applications).map(a => a.status).includes('submitted')
  }
}

const hasStartedApplications = (req) => {
  var applications = req.session.data.applications
  if (applications) {
    return Object.values(applications).map(a => a.status).includes('started')
  }
}

const hasPrimaryChoices = (req) => {
  try {
    var choices = req.session.data.applications[req.params.applicationId].choices

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
  saveIsoDate,
  hasApplications,
  hasPrimaryChoices,
  hasSubmittedApplications,
  hasStartedApplications,
  toArray
}
