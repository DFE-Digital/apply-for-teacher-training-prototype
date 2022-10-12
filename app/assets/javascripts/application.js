// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

document.addEventListener('DOMContentLoaded', function () {
  window.GOVUKFrontend.initAll()
})

function setupFeedbackButtons () {
  var feedbackButtons = document.querySelectorAll('*[data-feedback]')

  for (feedbackButton of feedbackButtons) {
    feedbackButton.addEventListener('click', function (event) {
      var feedbackElement = event.target.parentElement

      var feedback = event.target.getAttribute('data-feedback')

      if (feedback == 'Yes') {
        feedbackElement.innerHTML = 'You said that this feedback is helpful.'
      } else {
        feedbackElement.innerHTML = 'You said that this feedback is not helpful.'
      }

      event.preventDefault()
    })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  setupFeedbackButtons()
})
