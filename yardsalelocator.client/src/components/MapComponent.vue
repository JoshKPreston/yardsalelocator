<template>
  <div class="App" />
</template>

<script>
import { logger } from '../utils/Logger'
import gmapsInit from '../utils/gmaps'
import { computed, onMounted } from 'vue'
import { setAuth } from '../services/AxiosService'
import { locationService } from '../services/LocationService'
import { listingService } from '../services/ListingService'
import { AppState } from '../AppState'

export default {
  name: 'App',
  setup() {
    onMounted(async() => {
      await setAuth()
      await locationService.getGeoLocation()
      await listingService.getAll()
    })
    return {
      userLocation: computed(() => AppState.userLocation)
    }
  },
  async mounted() {
    // const locations = [
    //   {
    //     position: {
    //       lat: 48.160910,
    //       lng: 16.383330
    //     }
    //   },
    //   {
    //     position: {
    //       lat: 48.174270,
    //       lng: 16.329620
    //     }
    //   }
    // ]
    try {
      const google = await gmapsInit()
      // const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(this.$el)
      map.setCenter({ lat: this.userLocation.latitude, lng: this.userLocation.longitude })
      map.setZoom(12)
      // geocoder.geocode(, (results, status) => {
      //   if (status !== 'OK' || !results[0]) {
      //     throw new Error(status)
      //   }

      //   map.setCenter(results[0].geometry.location)
      //  map.fitBounds(results[0].geometry.viewport)
      // })

      // const markers = locations
      //   .map(x => new google.maps.Marker({ ...x, map }))
    } catch (error) {
      logger.error(error)
    }
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.App {
  width: 100vw;
  height: 100vh;
}
</style>