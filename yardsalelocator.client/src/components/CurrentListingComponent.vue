<template>
  <div class="current-listing-component row justify-content-start border-top p-3" v-if="listing.profile.id === profile.id">
    <!-- <div v-if="parseInt(listing.distance.split(' ')[0]) > distance"> -->
    <div class="col-12" @click="getListing()">
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
import router from '../router'
import { profileService } from '../services/ProfileService'
/* eslint-disable vue/require-default-prop */

export default {
  name: 'CurrentListingComponent',
  props: {
    listingProp: Object,
    locationProp: Object
  },
  setup(props) {
    onMounted(async() => {
      await profileService.getProfile()
      await listingService.getDistance(props.locationProp, props.listingProp)
      AppState.userLocation.distance = JSON.parse(window.localStorage.getItem('distance'))
    })
    return {
      profile: computed(() => AppState.profile),
      listing: computed(() => props.listingProp),
      location: computed(() => props.locationProp),
      distance: computed(() => AppState.userLocation.distance),
      async getListing() {
        await listingService.getListing(props.listingProp.id)
        router.push({ name: 'Listing', params: { listingId: props.listingProp.id } })
      },
      feetCheck() {
        if (props.listingProp.distance.split(' ')[1] === 'ft') {
          return 1
        } else {
          return parseInt(props.listingProp.distance.split(' ')[0])
        }
      }
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
