<template>
  <div class="results container-fluid justify-content-center ">
    <div class="row custom-height">
      <col-12 class="text-center w-100 align-self-center">
        <h2 class="">
          {{ listingDistance.length }} yard sales in your area!
        </h2>
      </col-12>
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

export default {
  name: 'Results',
  setup() {
    const state = reactive({
      feetCheck: null,
      userDistance: parseInt(AppState.userLocation.distance)
    })
    onMounted(async() => {
      await setAuth()
      await locationService.getGeoLocation()
      await listingService.getAll()
      AppState.searchTags = JSON.parse(window.localStorage.getItem('searchTags'))
    })
    return {
      state,
      location: computed(() => AppState.userLocation),
      // listings: computed(() => AppState.listings.sort((a, b) => (a.distance > b.distance) ? 1 : -1)),
      listings: computed(() => getters.listings),
      searchTags: computed(() => AppState.searchTags),
      listingDistance: computed(() => AppState.listings.filter(listing => listingService.feetCheck(listing) <= AppState.userLocation.distance))

    }
  },
  components: { MapComponent }
}
</script>

<style scoped>
.custom-height{
  height: 20vh;
}
</style>
