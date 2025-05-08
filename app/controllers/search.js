const locationSuggestionsService = require('../services/location-suggestions')
//const teacherTrainingService = require('../services/teacher-training')


/// ------------------------------------------------------------------------ ///
/// AUTOCOMPLETE ENDPOINTS
/// ------------------------------------------------------------------------ ///

exports.location_suggestions_json = async (req, res) => {
  req.headers['Access-Control-Allow-Origin'] = true

  let locationSuggestionListResponse
  locationSuggestionListResponse = await locationSuggestionsService.getLocationSuggestions(req.query.query)

  res.json(locationSuggestionListResponse)
}

exports.provider_suggestions_json = async (req, res) => {
  req.headers['Access-Control-Allow-Origin'] = true

  let providerSuggestionListResponse
  providerSuggestionListResponse = await teacherTrainingService.getProviderSuggestions(req.query.query)

  let providers = providerSuggestionListResponse.data

  if (providers.length) {
    providers = providers.map(providerResource => {
      return providerResource.attributes
    })
  }

  // Results
  const results = await Promise.all(providers)

  results.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })

  res.json(results)
}
