<template>
  <div class="listing">
    <h1>{{ listing.description }}</h1>
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

</style>
