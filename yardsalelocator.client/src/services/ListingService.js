import { logger } from '../utils/Logger'
import { api, radarApi } from '../services/AxiosService'
import { AppState } from '../AppState'
class ListingService {
  async getAll() {
    try {
      const res = await api.get('api/listing')
      AppState.listings = res.data.map(d => { d.distance = '0'; return d })
    } catch (error) {
      logger.error(error)
    }
  }

  async getListing(id) {
    try {
      const res = await api.get('api/listing/' + id)
      AppState.currentListing = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getDistance(origin, destination) {
    try {
      // eslint-disable-next-line no-console
      // console.log(origin)
      // test
      const res = await radarApi.get('route/distance/?origin=' + origin.latitude + '%2C' + origin.longitude + '&destination=' + destination.lat + '%2C' + destination.long + '&modes=car&units=imperial')
      // destination.distance = res.data.routes.car.distance.text

      // console.log('Destination:', destination)
      // console.log('Listings:', AppState.listings)
      // console.log('ResData:', res.data.routes.car.distance.text)

      const index = AppState.listings.findIndex(listing => listing.id === destination.id)
      if (index >= 0) {
        AppState.listings[index].distance = res.data.routes.car.distance.text
      }
    } catch (error) {
      logger.error(error)
    }
  }

  async create(newListing) {
    try {
      const res = await api.post('api/listing', newListing)
      AppState.listings = [...AppState.listings, res.data]
    } catch (error) {
      logger.error(error)
    }
  }

  async editListing(id, editedListing) {
    try {
      await api.put('api/listing/' + id, editedListing)
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteListing(id) {
    try {
      await api.delete('api/listing/' + id)
      this.getAll()
    } catch (error) {
      logger.error(error)
    }
  }

  feetCheck(listing) {
    if (listing.distance && listing.distance.split(' ')[1] === 'ft') {
      return 1
    } else {
      return parseInt(listing.distance.split(' ')[0])
    }
  }
}
export const listingService = new ListingService()
