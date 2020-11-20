
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { radarApi } from './AxiosService'

class LocationService {
  // async getLocation(state) {
  //   if (!state.advancedSearch.address) {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(this.showPosition)
  //     } else {
  //       document.getElementById('geo-location').innerText = 'Geolocation is not supported by this browser.'
  //     }
  //   } else {
  //     try {
  //       await listingService.getCoordinates(state.advancedSearch.address)
  //     } catch (error) {
  //       logger.error(error)
  //     }
  //   }
  // }
  getGeoLocation() {
    logger.log(AppState.userLocation)
    if (AppState.userLocation.latitude === null || AppState.userLocation.longitude === null) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      } else {
        document.getElementById('geo-location').innerText = 'Geolocation is not supported by this browser.\nPlease enter an address.'
      }
    }
  }

  showPosition(position) {
    AppState.userLocation.latitude = position.coords.latitude
    AppState.userLocation.longitude = position.coords.longitude
    logger.log(AppState.userLocation)
  }

  async getCoordinates(newAddress) {
    try {
      const res = await radarApi.get('search/autocomplete?query=' + newAddress)
      AppState.userLocation.latitude = res.data.addresses[0].latitude
      AppState.userLocation.longitude = res.data.addresses[0].longitude
      AppState.userLocation.distance = newAddress.distance
      // AppState.userLocation.distance = newAddress.distance
      // eslint-disable-next-line no-console
      console.log(AppState.userLocation)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const locationService = new LocationService()
