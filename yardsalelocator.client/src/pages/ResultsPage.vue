<template>
  <div class="results flex-grow-1 d-flex flex-column align-items-left container-fluid justify-content-center">
    <ListingComponent v-for="listing in listings" :key="listing" :listing-prop="listing" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { listingService } from '../services/ListingService'
import ListingComponent from '../components/ListingComponent'
import { setAuth } from '../services/AxiosService'

export default {
  name: 'Results',
  setup() {
    onMounted(async() => {
      setAuth()
      await listingService.getAll()
    })
    return {
      listings: computed(() => AppState.listings)
    }
  },
  components: { ListingComponent }
}
</script>

<style scoped>

</style>
