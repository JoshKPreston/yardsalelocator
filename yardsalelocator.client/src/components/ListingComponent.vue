<template>
  <div class="listing-component row justify-content-start border-top p-3" v-if="listing.distance">
    <div class="col-12">
      <li>
        {{ listing.address }}
      </li>
      <li>
        Distance: {{ listing.distance }}
      </li>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { listingService } from '../services/ListingService'
// import { AppState } from '../AppState'
/* eslint-disable vue/require-default-prop */

export default {
  name: 'ListingComponent',
  props: {
    listingProp: Object
  },
  setup(props) {
    onMounted(async() => {
      state.userLocation = JSON.parse(window.localStorage.getItem('userLocation'))
      await listingService.getDistance(state.userLocation, props.listingProp)
    })
    const state = reactive({
      userLocation: {}
    })
    return {
      state,
      listing: computed(() => props.listingProp)
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
