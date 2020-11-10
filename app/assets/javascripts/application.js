/* global APP, $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  APP.modules.start()
  window.GOVUKFrontend.initAll()
})
