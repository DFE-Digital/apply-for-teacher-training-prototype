// import { DateTime } from 'luxon'
const { DateTime } = require('luxon')

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  const filters = {}

  /**
   * Convert object to array
   * @type {String} str
   *
  */
  filters.date = (str, format) => {
    if (str) {
      var date = DateTime.fromISO(str, {
        locale: 'en-GB'
      }).toFormat(format)

      return date
    }
  }

  /**
   * Convert object to array
   * @type {Object} obj
   *
  */
  filters.toArray = (obj) => {
    if (obj) {
      const arr = []
      for (const [key, value] of Object.entries(obj)) {
        value.id = key
        arr.push(value)
      }
      return arr
    }
  }

  return filters
}
