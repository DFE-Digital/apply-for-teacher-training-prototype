// ;(function (global) {
//   'use strict'
//
//   const $ = global.jQuery
//   const APP = global.APP || {}
//   APP.Modules = APP.Modules || {}
//
//   APP.modules = {
//     find: function (container) {
//       container = container || $('body')
//
//       let modules
//       const moduleSelector = '[data-module]'
//
//       modules = container.find(moduleSelector)
//
//       // Container could be a module too
//       if (container.is(moduleSelector)) {
//         modules = modules.add(container)
//       }
//
//       return modules
//     },
//
//     start: function (container) {
//       const modules = this.find(container)
//
//       for (let i = 0, l = modules.length; i < l; i++) {
//         let module
//         const element = $(modules[i])
//         const type = camelCaseAndCapitalise(element.data('module'))
//         const started = element.data('module-started')
//
//         if (typeof APP.Modules[type] === 'function' && !started) {
//           module = new APP.Modules[type]()
//           module.start(element)
//           element.data('module-started', true)
//         }
//       }
//
//       // eg selectable-table to SelectableTable
//       function camelCaseAndCapitalise (string) {
//         return capitaliseFirstLetter(camelCase(string))
//       }
//
//       // http://stackoverflow.com/questions/6660977/convert-hyphens-to-camel-case-camelcase
//       function camelCase (string) {
//         return string.replace(/-([a-z])/g, function (g) {
//           return g.charAt(1).toUpperCase()
//         })
//       }
//
//       // http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
//       function capitaliseFirstLetter (string) {
//         return string.charAt(0).toUpperCase() + string.slice(1)
//       }
//     }
//   }
//
//   global.APP = APP
// })(window)
