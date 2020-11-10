/* global $ */

;(function (global) {
  'use strict'

  const APP = global.APP || {}
  APP.Modules = APP.Modules || {}

  APP.Modules.Feedback = function () {
    this.start = function (element) {
      const feedback = $(element)[0]

      // If following methods not supported, fall back to non-enhanced component
      if (
        !window.addEventListener ||
        !window.DOMTokenList ||
        !window.HTMLTemplateElement
      ) {
        return
      }

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
        successContainer.hidden = false
      }

      // Form containers
      const formContainers = feedback.querySelectorAll('[aria-controls]')

      // Form close button
      const closeButtonTemplate = document.getElementById('feedback-close-button-template')

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

        // Add close button to form
        const closeButtonClone = closeButtonTemplate.content.cloneNode(true)
        formContainer.prepend(closeButtonClone)
        formCloseToggle = formContainer.querySelector('.app-feedback__button--close')
        formCloseToggle.setAttribute('aria-controls', formId)
        console.log('formCloseToggle', formCloseToggle)

        // Remove form from accessibility tree by default
        formContainer.hidden = true
      }

      function toggleForm (e) {
        e = e || window.event
        formToggle = e.target || e.srcElement
        if (formToggle.hasAttribute('aria-controls')) {
          formId = formToggle.getAttribute('aria-controls')
          formContainer = document.getElementById(formId)

          if (formContainer.hidden) {
            formToggle.setAttribute('aria-expanded', 'true')
            formCloseToggle.setAttribute('aria-expanded', 'true')
            formContainer.hidden = false
            promptContainer.classList.add('govuk-visually-hidden')
          } else {
            formCloseToggle.setAttribute('aria-expanded', 'false')
            formToggle.setAttribute('aria-expanded', 'false')
            formContainer.hidden = true
            promptContainer.classList.remove('govuk-visually-hidden')
          }
        }
      }

      feedback.addEventListener('click', toggleForm, false)
    }
  }

  global.APP = APP
})(window)
