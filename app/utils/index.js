const querystring = require('querystring')

const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5).toUpperCase()
}

const applicationData = (req) => {
  return req.session.data.applications[req.params.applicationId]
}

const getQueryString = (req) => {
  return querystring.stringify(req.query)
}

module.exports = {
  generateRandomString,
  applicationData,
  queryString: getQueryString
}
