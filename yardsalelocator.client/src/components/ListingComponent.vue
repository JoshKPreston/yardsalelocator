<template>
  <div class="listing-component col-12" v-if="listing.distance">
    {{ listing.address }}
    <p>Distance: {{ listing.distance }}</p>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { listingService } from '../services/ListingService'
import { AppState } from '../AppState'

export default {
  name: 'ListingComponent',
  props: {
    listingProp: Object
  },
  setup(props) {
    onMounted(async() => {
      await listingService.getDistance(AppState.userLocation, props.listingProp)
    })
    return {
      listing: computed(() => props.listingProp)
    }
  }
}
</script>

<style scoped>

</style>
