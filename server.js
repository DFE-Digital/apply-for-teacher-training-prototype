// Core dependencies
const path = require('path')

// NPM dependencies
const dotenv = require('dotenv')
const express = require('express')
const flash = require('connect-flash')
const nunjucks = require('nunjucks')
const sessionInCookie = require('client-sessions')
const sessionInMemory = require('express-session')
const cookieParser = require('cookie-parser')
const addNunjucksFiltersWithAppContext = require('./app/utils/filters-with-app-context')

// Run before other code to make sure variables from .env are available
dotenv.config()

// Local dependencies
const middleware = [
  require('./lib/middleware/authentication/authentication.js'),
  require('./lib/middleware/extensions/extensions.js')
]
const config = require('./app/config.js')
const pkg = require('./package.json')
const routes = require('./app/routes.js')
const utils = require('./lib/utils.js')
const extensions = require('./lib/extensions/extensions.js')

const app = express()

// Set cookies for use in cookie banner.
app.use(cookieParser())
const handleCookies = utils.handleCookies(app)
app.use(handleCookies)

// Set up configuration variables
var releaseVersion = pkg.version
var env = (process.env.NODE_ENV || 'development').toLowerCase()
var useAutoStoreData = process.env.USE_AUTO_STORE_DATA || config.useAutoStoreData
var useCookieSessionStore = process.env.USE_COOKIE_SESSION_STORE || config.useCookieSessionStore
var useHttps = process.env.USE_HTTPS || config.useHttps
var gtmId = process.env.GOOGLE_TAG_MANAGER_TRACKING_ID

useHttps = useHttps.toLowerCase()

// Force HTTPS on production. Do this before using basicAuth to avoid
// asking for username/password twice (for `http`, then `https`).
var isSecure = (env === 'production' && useHttps === 'true')
if (isSecure) {
  app.use(utils.forceHttps)
  app.set('trust proxy', 1) // needed for secure cookies on heroku
}

middleware.forEach(func => app.use(func))

// Set up App
var appViews = extensions.getAppViews([
  path.join(__dirname, '/app/views/'),
  path.join(__dirname, '/lib/')
])

var nunjucksConfig = {
  autoescape: true,
  noCache: true,
  watch: false // We are now setting this to `false` (it's by default false anyway) as having it set to `true` for production was making the tests hang
}

if (env === 'development') {
  nunjucksConfig.watch = true
}

nunjucksConfig.express = app

var nunjucksAppEnv = nunjucks.configure(appViews, nunjucksConfig)

// Add Nunjucks filters
utils.addNunjucksFilters(nunjucksAppEnv)

// Add Nunjucks filters with access to app, req and res
addNunjucksFiltersWithAppContext(nunjucksAppEnv, app)

// Set views engine
app.set('view engine', 'njk')

// Middleware to serve static assets
app.use('/public', express.static(path.join(__dirname, '/public')))

// Serve govuk-frontend in from node_modules (so not to break pre-extenstions prototype kits)
app.use('/node_modules/govuk-frontend', express.static(path.join(__dirname, '/node_modules/govuk-frontend')))

// Support for parsing data in POSTs
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// Add global variable to determine if DoNotTrack is enabled.
// This indicates a user has explicitly opted-out of tracking.
// Therefore we can avoid injecting third-party scripts that do not respect this decision.
app.use(function (req, res, next) {
  // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT
  res.locals.doNotTrackEnabled = (req.header('DNT') === '1')
  next()
})

// Add variables that are available in all views
app.locals.gtmId = gtmId
app.locals.asset_path = '/public/'
app.locals.useAutoStoreData = (useAutoStoreData === 'true')
app.locals.useCookieSessionStore = (useCookieSessionStore === 'true')
app.locals.cookieText = config.cookieText
app.locals.releaseVersion = 'v' + releaseVersion
app.locals.serviceName = config.serviceName
app.locals.serviceSlug = pkg.name
// extensionConfig sets up variables used to add the scripts and stylesheets to each page.
app.locals.extensionConfig = extensions.getAppConfig()
app.locals.degree = require('./app/data/degree')()
app.locals.gcse = require('./app/data/gcse')()
app.locals.aLevel = require('./app/data/a-level')()
app.locals.asLevel = require('./app/data/as-level')()
app.locals.countries = require('./app/data/countries')
app.locals.nationalities = require('./app/data/nationalities')
app.locals.providers = require('./app/data/providers')
app.locals.previousApplications = require('./app/data/previous-applications')

// Session uses service name to avoid clashes with other prototypes
const sessionName = 'govuk-prototype-kit-' + (Buffer.from(config.serviceName, 'utf8')).toString('hex')
const sessionOptions = {
  secret: sessionName,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    secure: isSecure
  }
}

// Support session data in cookie or memory
if (useCookieSessionStore === 'true') {
  app.use(sessionInCookie(Object.assign(sessionOptions, {
    cookieName: sessionName,
    proxy: true,
    requestKey: 'session'
  })))
} else {
  app.use(sessionInMemory(Object.assign(sessionOptions, {
    name: sessionName,
    resave: false,
    saveUninitialized: false
  })))
}

app.use(flash())

// Automatically store all data users enter
if (useAutoStoreData === 'true') {
  app.use(utils.autoStoreData)
  utils.addCheckedFunction(nunjucksAppEnv)
}

// Prevent search indexing
app.use(function (req, res, next) {
  // Setting headers stops pages being indexed even if indexed pages link to them.
  res.setHeader('X-Robots-Tag', 'noindex')
  next()
})

app.get('/robots.txt', function (req, res) {
  res.type('text/plain')
  res.send('User-agent: *\nDisallow: /')
})

// Load routes (found in app/routes.js)
if (typeof (routes) !== 'function') {
  console.log(routes.bind)
  console.log('Warning: the use of bind in routes is deprecated - please check the Prototype Kit documentation for writing routes.')
  routes.bind(app)
} else {
  app.use('/', routes)
}

// Strip .html and .htm if provided
app.get(/\.html?$/i, function (req, res) {
  var path = req.path
  var parts = path.split('.')
  parts.pop()
  path = parts.join('.')
  res.redirect(path)
})

// Auto render any view that exists

// App folder routes get priority
app.get(/^([^.]+)$/, function (req, res, next) {
  utils.matchRoutes(req, res, next)
})

// Redirect all POSTs to GETs - this allows users to use POST for autoStoreData
app.post(/^\/([^.]+)$/, function (req, res) {
  res.redirect('/' + req.params[0])
})

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404)
  res.render('404')
})

// Display error
app.use(function (err, req, res, next) {
  console.error(err.message)
  res.status(err.status || 500)
  res.send(err.message)
})

console.log('\nGOV.UK Prototype Kit v' + releaseVersion)
console.log('\nNOTICE: the kit is for building prototypes, do not use it for production services.')

module.exports = app
