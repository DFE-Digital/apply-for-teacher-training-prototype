/* globals $ */
;(function (global) {
  'use strict'

  var GOVUK = global.GOVUK || {}
  GOVUK.Modules = GOVUK.Modules || {}

  // Clear values from any hidden conditional inputs on form submission
  GOVUK.Modules.ClearHidden = function () {
    this.start = element => {
      function getClosest (elem, selector) {
        for (; elem && elem !== document; elem = elem.parentNode) {
          if (elem.matches(selector)) return elem
        }
        return null
      };

      const form = getClosest($(element).get(0), 'form')
      console.log('form', form)

      form.addEventListener('submit', function (e) {
        e.preventDefault()

        const textInputs = form.querySelectorAll('input[type=text]')
        for (const textInput of textInputs) {
          const conditional = getClosest(textInput, '.govuk-radios__conditional') || getClosest(textInput, '.govuk-checkboxes__conditional')
          const controller = this.querySelector(`[aria-controls=${conditional.id}]`)
          console.log('controller', controller)

          if (!controller.checked) {
            textInput.value = ''
          }

          this.submit()
        }
      })
    }
  }

  global.GOVUK = GOVUK
})(window)
