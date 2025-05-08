const got = require('got')

const gcpApiKey = process.env.GCP_API_KEY

const locationSuggestionsService = {
  async getLocationSuggestions (query) {
    // https://developers.google.com/maps/documentation/places/web-service/autocomplete
    const locationSuggestionsListResponse = await got(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&language=en&components=country:uk&key=${gcpApiKey}`).json()

    console.log('locationSuggestionsListResponse:', locationSuggestionsListResponse);

    if (locationSuggestionsListResponse.predictions) {
      return locationSuggestionsListResponse.predictions.map((prediction) => {
        return prediction.description.split(',').slice(0, -1).join(',')
      })
    } else {
      return []
    }
  },

  async getLocations (query) {
    // https://developers.google.com/maps/documentation/places/web-service/autocomplete
    const locationsListResponse = await got(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&language=en&components=country:uk&key=${gcpApiKey}`).json()

    console.log('locationsListResponse:', locationsListResponse);

    return locationsListResponse.predictions
  },

  async getLocation (query) {
    let locationSingleResponse

    console.log('query:', query);

    const getLocationPlaceId = (prediction) => {
      console.log('prediction:', prediction);
      const location = prediction[0]
      return location.place_id
    }

    const locationsListResponse = this.getLocations(query)
      .then(getLocationPlaceId)
      .then((placeId) => {
        console.log('placeId:', placeId);
        return got(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&language=en&components=country:uk&key=${gcpApiKey}`).json()
      })
      .then((place) => {
        console.log('place:', place);
        return place.result
      })

    return locationsListResponse
  }
}

module.exports = locationSuggestionsService
