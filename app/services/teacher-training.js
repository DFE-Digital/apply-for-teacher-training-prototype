const _ = require('lodash')
const got = require('got')
const qs = require('qs')
const CacheService = require('../services/cache.js')
const data = require('../data/session-data-defaults')

// const ttl = 60 * 60 * 24 * 30 // cache for 30 days
const ttl = 0
const cache = new CacheService(ttl) // Create a new cache service instance

const getSortBy = (sortBy) => {
  let sort

  // course name z to a
  if (parseInt(sortBy) === 1) {
    sort = '-name,provider.provider_name'
  }
  // provider name a to z
  else if (parseInt(sortBy) === 2) {
    sort = 'provider.provider_name,name'
  }
  // provider name z to a
  else if (parseInt(sortBy) === 3) {
    sort = '-provider.provider_name,name'
  }
  // distance
  else if (parseInt(sortBy) === 4) {
    sort = 'distance'
  }
  // course name a to z (default)
  else {
    sort = 'name,provider.provider_name'
  }

  return sort
}

const teacherTrainingService = {
  // https://api.publish-teacher-training-courses.service.gov.uk/docs/api-reference.html#recruitment_cycles-year-courses-get
  async getCourses (filter, page = 1, perPage = 20, sortBy = 0) {
    const query = {
      filter,
      include: 'provider,accredited_body',
      page,
      per_page: perPage,
      sort: getSortBy(sortBy)
    }

    const key = `courseListResponse_${data.cycle}-${page}-${perPage}-${JSON.stringify(query)}`
//console.log( `${data.apiEndpoint}/recruitment_cycles/${data.cycle}/courses?${qs.stringify(query)}` );
    const courseListResponse = await cache.get(key, async () => await got(`${data.apiEndpoint}/recruitment_cycles/${data.cycle}/courses?${qs.stringify(query)}`).json())
    return courseListResponse
  },

  // https://api.publish-teacher-training-courses.service.gov.uk/docs/api-reference.html#recruitment_cycles-year-providers-provider_code-courses-course_code-get
  async getCourse (providerCode, courseCode) {
    try {
      const query = {
        include: 'provider'
      }

      const key = `courseSingleResponse_${data.cycle}-${providerCode}-${courseCode}-${JSON.stringify(query)}`
      const courseSingleResponse = await cache.get(key, async () => await got(`${data.apiEndpoint}/recruitment_cycles/${data.cycle}/providers/${providerCode}/courses/${courseCode}?${qs.stringify(query)}`).json())

      const providerResource = courseSingleResponse.included.find(item => item.type === 'providers')
      const provider = providerResource.attributes
      courseSingleResponse.data.attributes.provider = provider

      return courseSingleResponse
    } catch (error) {
      console.error(error)
    }
  },

  // https://api.publish-teacher-training-courses.service.gov.uk/docs/api-reference.html#recruitment_cycles-year-providers-provider_code-courses-course_code-locations-get
  async getCourseLocations (providerCode, courseCode) {
    const query = {
      include: 'course,location_status,provider'
    }

    const key = `courseLocationListResponse_${data.cycle}-${providerCode}-${courseCode}-${JSON.stringify(query)}`
    const courseLocationListResponse = await cache.get(key, async () => await got(`${data.apiEndpoint}/recruitment_cycles/${data.cycle}/providers/${providerCode}/courses/${courseCode}/locations?${qs.stringify(query)}`).json())
    return courseLocationListResponse
  },

  // https://api.publish-teacher-training-courses.service.gov.uk/docs/api-reference.html#provider_suggestions-get
  async getProviderSuggestions (query) {
    const key = `providerSuggestionListResponse_${query}`
    const providerSuggestionListResponse = await cache.get(key, async () => await got(`${data.apiEndpoint}/provider_suggestions?query=${query}`).json())
    return providerSuggestionListResponse
  },

  // https://api.publish-teacher-training-courses.service.gov.uk/docs/api-reference.html#recruitment_cycles-year-providers-get
  async getProviders (filter, page = 1, perPage = 20, sortBy = 0) {
    let sort = 'name'
    if (sortBy === 1) {
      sort = '-name'
    }

    const query = {
      filter,
      include: 'recruitment_cycle',
      page,
      per_page: perPage,
      sort
    }

    const key = `providerListResponse_${data.cycle}-${page}-${perPage}-${JSON.stringify(query)}`
    const providerListResponse = await cache.get(key, async () => await got(`${data.apiEndpoint}/recruitment_cycles/${data.cycle}/providers?${qs.stringify(query)}`).json())
    return providerListResponse
  },

  // https://api.publish-teacher-training-courses.service.gov.uk/docs/api-reference.html#recruitment_cycles-year-providers-provider_code-get
  async getProvider (providerCode) {
    const key = `providerSingleResponse_${providerCode}`
    const providerSingleResponse = await cache.get(key, async () => await got(`${data.apiEndpoint}/recruitment_cycles/${data.cycle}/providers/${providerCode}`).json())
    return providerSingleResponse.data.attributes
  },

  // https://api.publish-teacher-training-courses.service.gov.uk/docs/api-reference.html#recruitment_cycles-year-providers-provider_code-courses-get
  async getProviderCourses (providerCode, filter, page = 1, perPage = 20, sortBy = 0) {
    const query = {
      filter,
      include: 'provider,accredited_body',
      page,
      per_page: perPage,
      sort: getSortBy(sortBy)
    }

    const key = `providerCourseListResponse_${data.cycle}-${providerCode}-${page}-${perPage}-${JSON.stringify(query)}`
    const providerCourseListResponse = await cache.get(key, async () => await got(`${data.apiEndpoint}/recruitment_cycles/${data.cycle}/providers/${providerCode}/courses?${qs.stringify(query)}`).json())
    return providerCourseListResponse
  },

  // https://api.publish-teacher-training-courses.service.gov.uk/docs/api-reference.html#recruitment_cycles-year-providers-provider_code-locations-get
  async getProviderLocations (providerCode) {
    const query = {
      include: 'provider,recruitment_cycle'
    }

    const key = `providerLocationListResponse_${data.cycle}-${providerCode}-${JSON.stringify(query)}`
    const providerLocationListResponse = await cache.get(key, async () => await got(`${data.apiEndpoint}/recruitment_cycles/${data.cycle}/providers/${providerCode}/locations?${qs.stringify(query)}`).json())
    return providerLocationListResponse
  }
}

module.exports = teacherTrainingService
