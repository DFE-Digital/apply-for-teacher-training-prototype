/* global $ */

;(function (global) {
  'use strict'

  var APP = global.APP || {}
  APP.Modules = APP.Modules || {}

  APP.Modules.Feedback = function () {
    this.start = function (element) {
      const feedback = $(element)[0]

      // Prompt question container
      // Show question with ‘Yes’ and ‘No’ answers
      const promptTemplate = document.getElementById('feedback-prompt-template')
      const promptClone = promptTemplate.content.cloneNode(true)
      feedback.prepend(promptClone)
      const promptContainer = document.getElementById('feedback-prompt')

      // Success message container
      // Show a thank-you message once feedback has been submitted
      const successTemplate = document.getElementById('feedback-success-template')
      const successClone = successTemplate.content.cloneNode(true)
      feedback.append(successClone)
      const successContainer = document.getElementById('feedback-success')

      // Success button
      const successButton = feedback.querySelector('.js-show-feedback-success')
      successButton.addEventListener('click', showSuccessMessage)

      function showSuccessMessage () {
        promptContainer.classList.add('govuk-visually-hidden')
        successContainer.setAttribute('aria-hidden', 'false')
      }

      // Form containers
      const formContainers = feedback.querySelectorAll('[aria-controls]')

      // Form close button
      const closeButtonTemplate = document.getElementById('feedback-close-button-template')
      const closeButtonClone = closeButtonTemplate.content.cloneNode(true)

      // Form toggling
      let formId
      let formContainer
      let formCloseToggle
      let formToggle
      let i
      for (i = 0; i < formContainers.length; i = i + 1) {
        formId = formContainers[i].getAttribute('aria-controls')
        formContainer = document.getElementById(formId)
        formContainer.setAttribute('tabindex', '-1')

        // Add close button to each form before fieldset (and after any error summary)
        const formFieldset = formContainer.querySelector('.govuk-fieldset')
        formContainer.insertBefore(closeButtonClone, formFieldset)
        formCloseToggle = formContainer.querySelector('.app-feedback__button--close')
      }

      function toggleForm (e) {
        e = e || window.event
        formToggle = e.target || e.srcElement
        if (formToggle.hasAttribute('aria-controls')) {
          formId = formToggle.getAttribute('aria-controls')
          formContainer = document.getElementById(formId)

          if (formContainer.getAttribute('aria-hidden') === 'true') {
            formToggle.setAttribute('aria-expanded', 'true')
            formCloseToggle.setAttribute('aria-expanded', 'true')
            formContainer.setAttribute('aria-hidden', 'false')
            promptContainer.classList.add('govuk-visually-hidden')
          } else {
            formContainer.setAttribute('aria-hidden', 'true')
            formCloseToggle.setAttribute('aria-expanded', 'false')
            formToggle.setAttribute('aria-expanded', 'false')
            promptContainer.classList.remove('govuk-visually-hidden')
          }
        }
      }

      feedback.addEventListener('click', toggleForm, false)
    }
  }

  global.APP = APP
})(window)
