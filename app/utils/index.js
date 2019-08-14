const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5).toUpperCase()
}

const applicationData = (req) => {
  return req.session.data.applications[req.params.applicationId]
}

module.exports = {
  generateRandomString,
  applicationData
}
