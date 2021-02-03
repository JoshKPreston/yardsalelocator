<template>
  <div class="results container-fluid justify-content-center">
    <div class="row">
      <div class="col-12 custom-height text-center w-100 align-self-center text-white">
        <h5 v-if="distanceListings.length">
          {{ distanceListings.length }} yard sales in your area!
        </h5>
      </div>
    </div>
    <!-- <div class="row align-items-center">
      <ListingComponent v-for="listing in listings"
                        :key="listing"
                        :listing-prop="listing"
                        :location-prop="location"
                        :tag-prop="searchTags"
      />
    </div> -->
    <div class="row align-items-center">
      <MapComponent />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState, getters } from '../AppState'
import { locationService } from '../services/LocationService'
import { listingService } from '../services/ListingService'
// import ListingComponent from '../components/ListingComponent'
import MapComponent from '../components/MapComponent'
import { setAuth } from '../services/AxiosService'
import router from '../router'

export default {
  name: 'Results',
  setup() {
    const state = reactive({
      feetCheck: null,
      userDistance: parseInt(AppState.userLocation.distance)
    })
    onMounted(async() => {
      if (JSON.parse(window.localStorage.getItem('latitude'))) {
        AppState.userLocation.latitude = JSON.parse(window.localStorage.getItem('latitude'))
        AppState.userLocation.longitude = JSON.parse(window.localStorage.getItem('longitude'))
      } else {
        await setAuth()
        await locationService.getGeoLocation()
      }
      AppState.userLocation.distance = await JSON.parse(window.localStorage.getItem('distance'))
      AppState.searchTags = await JSON.parse(window.localStorage.getItem('searchTags'))
      await listingService.getAll()
      AppState.searchTags = JSON.parse(window.localStorage.getItem('searchTags'))
    })
    return {
      state,
      location: computed(() => AppState.userLocation),
      // listings: computed(() => AppState.listings.sort((a, b) => (a.distance > b.distance) ? 1 : -1)),
      listings: computed(() => getters.listings),
      searchTags: computed(() => AppState.searchTags),
      // listingDistance: computed(() => AppState.listings.filter(listing => listingService.feetCheck(listing) <= AppState.userLocation.distance)),
      listingDistance: computed(() => AppState.listings),
      distanceListings: computed(() => AppState.distanceListings),
      viewListing(id) {
        router.push({ name: 'Listing', params: { listingId: id } })
      }

    }
  },
  components: { MapComponent }
}
</script>

<style scoped>
.custom-height {
  height: 5vh;
}
</style>
