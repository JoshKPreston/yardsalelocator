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
      const res = await radarApi.get('route/distance/?origin=' + origin.latitude + '%2C' + origin.longitude + '&destination=' + destination.lat + '%2C' + destination.long + '&modes=car&units=imperial')
      console.log(res.data.routes.car.distance.text)
      const index = AppState.listings.findIndex(l => l === destination)
      AppState.listings[index].distance = res.data.routes.car.distance.text
      // listing.distance = res.data.routes.car.distance.text
      // AppState.listingsDistance = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}
export const listingService = new ListingService()
