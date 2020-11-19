<template>
  <div class="results container-fluid">
    <div class="row">
      <ListingComponent v-for="listing in listings" :key="listing" :listing-prop="listing" />
    </div>
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
