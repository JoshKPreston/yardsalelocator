<template>
  <div class="results flex-grow-1 d-flex flex-column align-items-left container-fluid justify-content-center">
    <ListingComponent v-for="listing in listings" :key="listing" :listing-prop="listing" :location-prop="location" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { locationService } from '../services/LocationService'
import { listingService } from '../services/ListingService'
import ListingComponent from '../components/ListingComponent'
import { setAuth } from '../services/AxiosService'

export default {
  name: 'Results',
  setup() {
    onMounted(async() => {
      await setAuth()
      await locationService.getGeoLocation()
      await listingService.getAll()
    })
    return {
      location: computed(() => AppState.userLocation),
      listings: computed(() => AppState.listings)
    }
  },
  components: { ListingComponent }
}
</script>

<style scoped>

</style>
