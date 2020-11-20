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
      // eslint-disable-next-line no-console
      // console.log(origin)
      const res = await radarApi.get('route/distance/?origin=' + origin.latitude + '%2C' + origin.longitude + '&destination=' + destination.lat + '%2C' + destination.long + '&modes=car&units=imperial')
      const index = AppState.listings.findIndex(l => l === destination)
      if (index >= 0) {
        AppState.listings[index].distance = res.data.routes.car.distance.text
      }
    } catch (error) {
      logger.error(error)
    }
  }

  async create(newListing) {
    try {
      const res = await api.post('', newListing)
      AppState.listings = [...AppState.listings, res.data]
    } catch (error) {
      logger.error(error)
    }
  }
}
export const listingService = new ListingService()
