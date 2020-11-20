<template>
  <div class="listing-component row justify-content-start border-top p-3" v-if="listing.distance && (parseInt(listing.distance.split(' ')[0]) < distance)">
    <!-- <div v-if="parseInt(listing.distance.split(' ')[0]) > distance"> -->
    <div class="col-12">
      <li>
        {{ listing.address }}
      </li>
      <li>
        Distance: {{ listing.distance }}
      </li>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { listingService } from '../services/ListingService'
import { AppState } from '../AppState'
/* eslint-disable vue/require-default-prop */

export default {
  name: 'ListingComponent',
  props: {
    listingProp: Object,
    locationProp: Object
  },
  setup(props) {
    onMounted(async() => {
      await listingService.getDistance(props.locationProp, props.listingProp)
      AppState.userLocation.distance = JSON.parse(window.localStorage.getItem('distance'))
    })
    return {
      listing: computed(() => props.listingProp),
      location: computed(() => props.locationProp),
      distance: computed(() => AppState.userLocation.distance)
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
