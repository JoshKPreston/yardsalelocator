<template>
  <div id="map" class="App"></div>
</template>

<script>
import { logger } from '../utils/Logger'
import gmapsInit from '../utils/gmaps'
import { onMounted } from 'vue'
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
      AppState.userLocation.distance = JSON.parse(window.localStorage.getItem('distance'))
      // AppState.searchTags = JSON.parse(window.localStorage.getItem('searchTags'))
      await AppState.listings.forEach(listing => {
        listingService.getDistance(AppState.userLocation, listing)
      })
      try {
        const google = await gmapsInit()
        // const geocoder = new google.maps.Geocoder()
        // const map = new google.maps.Map(this.$el)
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: { lat: AppState.userLocation.latitude, lng: AppState.userLocation.longitude }
        })
        // map.setCenter({ lat: this.userLocation.latitude, lng: this.userLocation.longitude })
        // map.setZoom(10)

        // NOTE markers
        await AppState.listings.map(listing => new google.maps.Marker(
          {
            position: { lat: parseFloat(listing.lat), lng: parseFloat(listing.long) },
            map: map,
            infoWindow: '<h1> this is my info</h1>'
          }
        ))
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      // userLocation: computed(() => AppState.userLocation),
      // listings: computed(() => AppState.listings)
    }
  }
  // async mounted() {
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
  // try {
  //   const google = await gmapsInit()
  //   // const geocoder = new google.maps.Geocoder()
  //   const map = new google.maps.Map(this.$el)
  //   map.setCenter({ lat: this.userLocation.latitude, lng: this.userLocation.longitude })
  //   map.setZoom(10)

  //   // NOTE markers
  //   await this.listings.map(listing => new google.maps.Marker(
  //     {
  //       position: { lat: parseFloat(listing.lat), lng: parseFloat(listing.long) },
  //       map: map
  //     }
  //   ))

  // await AppState.listings
  //   .forEach(listing => {
  //     listing.map(new window.google.maps.Marker({
  //       position: { lat: listing.lat, lng: listing.long }
  //     }))
  //   })

  // NOTE GEOCODE
  // geocoder.geocode({ address: 'Austria' }, (results, status) => {
  //   if (status !== 'OK' || !results[0]) {
  //     throw new Error(status)
  //   }

  //   map.setCenter(results[0].geometry.location)
  //   map.fitBounds(results[0].geometry.viewport)
  // })

  // NOTE markers
  // const markers = locations
  //   .map(x => new google.maps.Marker({ ...x, map }))
  // } catch (error) {
  //   logger.error(error)
  // }
  // }
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
  height: 84vh;
}
</style>
