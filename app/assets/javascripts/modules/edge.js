/* global $ */

;(function (global) {
  'use strict'

  const APP = global.APP || {}
  APP.Modules = APP.Modules || {}

  APP.Modules.Edge = function () {
    this.start = function (element) {
      element.on('click', 'a[href="#"], .js-edge', alertUser)

      function alertUser (e) {
        e.preventDefault()
        const target = $(e.target)
        const message = target.data('message') || 'Sorry, this hasn’t been built yet'

        window.alert(message)
      }
    }
  }

  global.APP = APP
})(window)
