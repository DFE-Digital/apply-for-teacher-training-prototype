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

      form.addEventListener('submit', function (e) {
        e.preventDefault()

        const inputs = form.querySelectorAll('input, textarea')
        for (const input of inputs) {
          const conditional = getClosest(input, '.govuk-radios__conditional') || getClosest(input, '.govuk-checkboxes__conditional')
          console.log('conditional', conditional)
          if (conditional && conditional.id) {
            const controller = this.querySelector(`[aria-controls=${conditional.id}]`)

            if (!controller.checked) {
              input.value = ''
            }
          }

          this.submit()
        }
      })
    }
  }

  global.GOVUK = GOVUK
})(window)
