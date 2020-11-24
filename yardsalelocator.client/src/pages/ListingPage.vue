<template>
  <div class="listing flex-grow-1 d-flex flex-column align-items-center container-fluid">
    <h3>{{ listing.address }}</h3>
    <h3>{{ listing.distance }}</h3>
    <img class="img-fluid custom-img-size" :src="listing.img" alt="img">
    <h3>{{ listing.description }}</h3>
    <small>{{ listing.tags }}</small>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { listingService } from '../services/ListingService'
import { useRoute } from 'vue-router'
export default {
  name: 'Listing',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      await listingService.getListing(route.params.listingId)
    })
    return {
      listing: computed(() => AppState.currentListing)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  // img {
  //   max-width: 100px;
  // }
  .custom-img-size {
    background-size: contain;
  }
</style>
