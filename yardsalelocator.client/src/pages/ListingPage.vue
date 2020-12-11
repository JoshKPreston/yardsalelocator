<template>
  <div class="listing container-fluid text-light">
    <div v-if="listing.isOpen" class="row justify-content-center align-items-center bg-success p-2 text-center">
      <div class="col-12">
        <span>
          Yard Sale is open!
        </span>
      </div>
    </div>
    <div v-else class="row justify-content-center align-items-center p-2 bg-warning text-center">
      <div class="col-12">
        <span>
          Yard Sale is not open yet...
        </span>
      </div>
    </div>
    <div v-if="listing.startDate" class="row justify-content-center align-items-center p-2 text-white text-center">
      <div class="col-12">
        <span>
          {{ new Date(listing.startDate).toLocaleDateString() }} - {{ new Date(listing.expireAt).toLocaleDateString() }}
        </span>
      </div>
    </div>
    <div v-if="listing.img" class="row justify-content-center align-items-center">
      <img class="img-fluid custom-img-size" :src="listing.img" alt="img">
    </div>
    <div class="row justify-content-around align-items-center p-3">
      <div v-if="listing.address" class="col-10">
        <span>{{ listing.address.substring(0, listing.address.indexOf(',')) }}</span><br>
        <span>{{ listing.address.substring(listing.address.indexOf(',') + 1, listing.address.length) }}</span>
        <span v-if="listing.distance">{{ listing.distance }}</span>
      </div>
      <div class="col-2 d-flex justify-content-start align-items-center">
        <a class="d-block p-1 text-nowrap" :href="'https://www.google.com/maps/dir/' + userLocation.latitude + ',' + userLocation.longitude + '/' + listing.lat + ',' + listing.long">
          <i class="fas fa-paper-plane fa-2x text-success"></i>
        </a>
      </div>
    </div>
    <div class="row justify-content-start align-items-center p-3 bg-info text-dark">
      <div class="col-12">
        <span>{{ listing.description }}</span>
      </div>
    </div>
    <div class="row justify-content-start align-items-center p-3">
      <div class="col-2">
        <span>Tags:</span>
      </div>
      <div class="col-10 d-flex justify-content-start align-items-center">
        <span class="text-light mr-2" v-for="(tag, index) in listing.tags" :key="tag">
          {{ tag }}<span v-if="index != Object.keys(listing.tags).length - 1">,</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { listingService } from '../services/ListingService'
import { useRoute } from 'vue-router'
import { setAuth } from '../services/AxiosService'
import { locationService } from '../services/LocationService'
export default {
  name: 'Listing',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      await setAuth()
      await locationService.getGeoLocation()
      await listingService.getListing(route.params.listingId)
      AppState.userLocation.distance = JSON.parse(window.localStorage.getItem('distance'))
    })
    return {
      listing: computed(() => AppState.currentListing),
      userLocation: computed(() => AppState.userLocation)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  // img {
  //   max-width: 20vh;
  // }
  .custom-img-size {
    background-size: contain;
  }
</style>
