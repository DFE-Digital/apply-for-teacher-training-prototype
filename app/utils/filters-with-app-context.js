const getKeypath = require('keypather/get')
const providers = require('../data/providers')
const utils = require('./../utils')

// Add Nunjucks filters with access to app, req and res
module.exports = (nunjucksAppEnv, app) => {
  app.use((req, res, next) => {
    const applicationId = () => {
      return req.params.applicationId
    }

    const getApplicationValue = (sections) => {
      var path = ['applications', applicationId()]
      sections = sections || []
      path.push(...sections)
      return getKeypath(req.session.data, path.map(s => `["${s}"]`).join(''))
    }

    // Add name, value, id, idPrefix and checked attributes to GOVUK form inputs
    // Generate the attributes based on the application ID and the section they’re in
    nunjucksAppEnv.addFilter('decorateApplicationAttributes', (obj, sections) => {
      sections = sections || []
      const storedValue = getApplicationValue(sections)

      if (obj.items !== undefined) {
        obj.items = obj.items.map(item => {
          var checked = ''
          if (typeof item.value === 'undefined') {
            item.value = item.text
          }

          // If data is an array, check it exists in the array
          if (Array.isArray(storedValue)) {
            if (storedValue.indexOf(item.value) !== -1) {
              checked = 'checked'
            }
          } else {
            // The data is just a simple value, check it matches
            if (storedValue === item.value) {
              checked = 'checked'
            }
          }

          item.checked = checked
          return item
        })

        obj.idPrefix = sections.join('-')
      } else {
        obj.value = storedValue
      }

      obj.id = sections.join('-')
      obj.name = `applications[${applicationId()}]${sections.map(s => `[${s}]`).join('')}`
      return obj
    })

    // Check if something is set in the current application
    nunjucksAppEnv.addFilter('ifSetForApplication', (sections) => {
      return !!getApplicationValue(sections)
    })

    // Retrieve the value of something in the current application
    // Designed as a replacement to `data[thing][thing]`
    nunjucksAppEnv.addGlobal('applicationValue', (sections) => {
      if (sections && !Array.isArray(sections)) {
        sections = [sections]
      }

      return getApplicationValue(sections)
    })

    nunjucksAppEnv.addFilter('getCourse', providerCode => {
      const application = utils.applicationData(req)
      const applicationCourses = utils.toArray(application.courses)
      const provider = providers[providerCode]
      for (const applicationCourse of applicationCourses) {
        if (applicationCourse.providerCode === providerCode) {
          const providerCourses = utils.toArray(provider.courses)
          for (const providerCourse of providerCourses) {
            if (providerCourse.code === applicationCourse.courseCode) {
              return providerCourse
            }
          }
        }
      }
    })

    nunjucksAppEnv.addGlobal('hasSubmittedApplications', () => {
      return utils.hasSubmittedApplications(req)
    })

    nunjucksAppEnv.addGlobal('hasStartedApplications', () => {
      return utils.hasStartedApplications(req)
    })

    nunjucksAppEnv.addGlobal('hasPrimaryCourses', () => {
      return utils.hasPrimaryCourses(req)
    })

    next()
  })
}
