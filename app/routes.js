//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

require('./routes/account')(router)

require('./routes/details/index')(router)
require('./routes/details/contact-information')(router)
require('./routes/details/work-history')(router)
require('./routes/details/unpaid-experience')(router)
require('./routes/details/degree')(router)
require('./routes/details/gcse')(router)
require('./routes/details/other-qualifications')(router)
require('./routes/details/references')(router)
require('./routes/details/safeguarding')(router)
require('./routes/applications')(router)

require('./routes/accepted')(router)
require('./routes/admin')(router)
require('./routes/reference')(router)

// Reset application so the user can apply again
router.post('/application/apply-again', (req, res) => {
  // Remove previous course choices
  req.session.data.choices = {}

  req.session.data.completed.choices = 'false'

  res.redirect('/application')
})

// Submit application action
router.post('/application/submit', (req, res) => {

  req.session.data.submittedAt = (new Date()).toISOString()

  // Set status of each choice to 'Awaiting decision'
  const choices = req.session.data.choices
  if (choices) {
    for (const id of Object.keys(choices)) {
      choices[id].status = 'Awaiting decision'
    }
  }

  res.redirect('/survey')
})


// Submit application action
router.get('/sign-out', (req, res) => {

  req.session.data.account = {}


  res.redirect('/account')
})
