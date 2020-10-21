/* global $ */

;(function (global) {
  'use strict'

  var GOVUK = global.GOVUK || {}
  GOVUK.Modules = GOVUK.Modules || {}

  GOVUK.Modules.Feedback = function () {
    this.start = function (element) {
      const feedback = $(element)[0]
      const toggles = feedback.querySelectorAll('[aria-controls]')
      const toggleQuestion = document.getElementById('feedback-question')

      let toggleID
      let toggleContent
      let i
      let target
      for (i = 0; i < toggles.length; i = i + 1) {
        toggleID = toggles[i].getAttribute('aria-controls')
        toggleContent = document.getElementById(toggleID)
        toggleContent.setAttribute('tabindex', '-1')
      }

      function toggle (ev) {
        ev = ev || window.event
        target = ev.target || ev.srcElement
        if (target.hasAttribute('aria-controls')) {
          toggleID = target.getAttribute('aria-controls')
          toggleContent = document.getElementById(toggleID)

          if (toggleContent.getAttribute('aria-hidden') === 'true') {
            toggleContent.setAttribute('aria-hidden', 'false')
            target.setAttribute('aria-expanded', 'true')
            toggleQuestion.setAttribute('aria-hidden', 'true')
            toggleQuestion.setAttribute('aria-expanded', 'false')
          } else {
            toggleContent.setAttribute('aria-hidden', 'true')
            target.setAttribute('aria-expanded', 'false')
            toggleQuestion.setAttribute('aria-hidden', 'false')
            toggleQuestion.setAttribute('aria-expanded', 'true')
          }
        }
      }

      feedback.addEventListener('click', toggle, false)
    }
  }

  global.GOVUK = GOVUK
})(window)
