const querystring = require('querystring')

const applicationData = (req) => {
  return req.session.data.applications[req.params.applicationId]
}

const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5).toUpperCase()
}

const getQueryString = (req) => {
  return querystring.stringify(req.query)
}

const saveIsoDate = (req, data, id) => {
  // Create ISO 8601 start date
  const startDay = req.body[`${id}-start-date-day`] || '01'
  const startMonth = req.body[`${id}-start-date-month`]
  const startYear = req.body[`${id}-start-date-year`]
  data['start-date'] = false

  if (startMonth && startYear) {
    data['start-date'] = `${startYear}-${startMonth}-${startDay}`
  }

  // Create ISO 8601 end date
  const endDay = req.body[`${id}-end-date-day`] || '01'
  const endMonth = req.body[`${id}-end-date-month`]
  const endYear = req.body[`${id}-end-date-year`]
  data['end-date'] = false

  if (endMonth && endYear) {
    data['end-date'] = `${endYear}-${endMonth}-${endDay}`
  }
}

const hasSubmittedApplications = (req) => {
  var applications = req.session.data.applications
  return Object.values(applications).map(a => a.status).includes('submitted');
}

const hasStartedApplications = (req) => {
  var applications = req.session.data.applications
  return Object.values(applications).map(a => a.status).includes('started');
}

module.exports = {
  applicationData,
  generateRandomString,
  queryString: getQueryString,
  saveIsoDate,
  hasSubmittedApplications,
  hasStartedApplications
}
