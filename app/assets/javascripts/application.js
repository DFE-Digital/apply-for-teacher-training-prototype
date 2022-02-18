// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

document.addEventListener('DOMContentLoaded', function () {
  window.GOVUKFrontend.initAll()
})
