/* global $ */

;(function (global) {
  'use strict'

  var APP = global.APP || {}
  APP.Modules = APP.Modules || {}

  APP.Modules.Edge = function () {
    this.start = function (element) {
      element.on('click', 'a[href="#"], .js-edge', alertUser)

      function alertUser (e) {
        e.preventDefault()
        var target = $(e.target)
        var message = target.data('message') || 'Sorry, this hasn’t been built yet'

        window.alert(message)
      }
    }
  }

  global.APP = APP
})(window)
