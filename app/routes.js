//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


require('./routes/account')(router)
require('./routes/application')(router)
