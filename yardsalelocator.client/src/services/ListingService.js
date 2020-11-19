import { logger } from '../utils/Logger'
import { api, radarApi } from '../services/AxiosService'
import { AppState } from '../AppState'
class ListingService {
  async getAll() {
    try {
      const res = await api.get('api/listing')
      AppState.listings = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getDistance(origin, destination) {
    try {
      console.log(origin)
      const res = await radarApi.get('route/distance/?origin=' + origin.latitude + '%2C' + origin.longitude + '&destination=' + destination.lat + '%2C' + destination.long + '&modes=car&units=imperial')
      const index = AppState.listings.findIndex(l => l === destination)
      if (index >= 0) {
        AppState.listings[index].distance = res.data.routes.car.distance.text
      }
    } catch (error) {
      logger.error(error)
    }
  }

  // async getCoordinates(newAddress) {
  //   try {
  //     const res = await radarApi.get('geocode/forward?query=' + newAddress)
  //     AppState.userLocation = res.data
  //   } catch (error) {
  //     logger.error(error)
  //   }
  // }

  async getCoordinates(newAddress) {
    try {
      const res = await radarApi.get('search/autocomplete?query=' + newAddress)
      AppState.userLocation.latitude = res.data.addresses[0].latitude
      AppState.userLocation.longitude = res.data.addresses[0].longitude
      console.log(AppState.userLocation)
      // AppState.userLocation = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}
export const listingService = new ListingService()
