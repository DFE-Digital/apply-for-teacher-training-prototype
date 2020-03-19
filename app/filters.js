const { DateTime } = require('luxon')
const humanizeDuration = require('humanize-duration')
const marked = require('marked')
const providers = require('./data/providers')

module.exports = (env) => {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  const filters = {}

  /**
   * Convert str to date
   * @type {String} str
   * @type {String} format
   */
  filters.date = (str, format = 'yyyy-LL-dd') => {
    if (str) {
      const date = (str === 'now') ? DateTime.local() : str

      const datetime = DateTime.fromISO(date, {
        locale: 'en-GB'
      }).toFormat(format)

      return datetime
    }
  }

  /**
   * Add days to date
   * @type {Integer} days
   * @type {String} format
   */
  filters.nowPlusDays = (days, format = 'yyyy-LL-dd') => {
    const date = DateTime.local().plus({ days: days })

    return DateTime.fromISO(date, {
      locale: 'en-GB'
    }).toFormat(format)
  }

  /**
   * Convert milliseconds to readable duration
   * @type {String} str
   */
  filters.duration = (int) => {
    if (!isNaN(int)) {
      const duration = humanizeDuration(int, {
        delimiter: ' and ',
        largest: 2,
        round: true,
        units: ['y', 'mo']
      })

      return duration
    }
  }

  /**
   * Filter array by value
   * @type {Array} arr
   * @type {String} searchString
   *
   */
  filters.includes = (arr, searchString) => {
    if (arr) {
      if (arr.includes(searchString)) {
        return true
      }
    }
  }

  /**
   * Convert Markdown to HTML
   * @type {String} str
   * @type {String} value
   *
   */
  filters.markdown = (str, value) => {
    if (str) {
      return marked(str)
    }
  }

  /**
   * Split string into an array
   * @type {String} str
   *
   */
  filters.split = (str) => {
    if (str && !Array.isArray(str)) {
      return str.split()
    }

    return str
  }

  /**
   * Convert object to array
   * @type {Object} obj
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

  /**
   * Get course information
   * @type {String} providerCode
   * @type {String} courseCode
   */
  filters.getCourse = (providerCode, courseCode) => {
    return providers[providerCode].courses[courseCode]
  }

  filters.providerCode = (providerAndCode) => {
    const regExp = /\(([^)]+)\)$/
    return regExp.exec(providerAndCode)[1]
  }

  filters.statusClass = (status) => {
    switch (status) {
      // States that currently use the default tag style
      // - 'Enrolled'
      // - 'Conditions met'
      // - 'Conditions not met'
      // - 'Completed'

      // Application phases
      case 'Submitted':
        return 'govuk-tag--grey'
      case 'Pending':
        return 'govuk-tag--blue'
      case 'Offer withdrawn':
        return 'govuk-tag--red'
      case 'Application withdrawn':
        return 'govuk-tag--orange'
      case 'Declined':
        return 'govuk-tag--orange'
      case 'Rejected':
        return 'govuk-tag--red'
      case 'Accepted':
        return 'govuk-tag--blue'
      case 'Offer':
        return 'govuk-tag--turquoise'

      // Reference statuses
      case 'Awaiting response':
        return 'govuk-tag--blue'
      case 'Reference given':
        return 'govuk-tag--green'
    }
  }

  return filters
}
