const generateRandomString = () => {
  return (Number(new Date())).toString(36).slice(-5).toUpperCase()
}

module.exports = {
  generateRandomString
}
