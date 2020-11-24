<template>
  <div class="listing-component col-12 d-flex justify-content-start border-top p-3" v-if="listing.distance && (feetCheck() < distance) && (state.match.length > 0 || !searchTags.length)">
    <!-- <div v-if="parseInt(listing.distance.split(' ')[0]) > distance"> -->
    <div class="row" @click="getListing()">
      <div class="col-2">
        <img :src="listing.img" alt="img" v-if="listing.img">
      </div>
      <div class="col-10">
        <ul class="text-dark">
          <li>
            {{ listing.address }}
          </li>
          <li>
            Distance: {{ listing.distance }}
          </li>
          <li v-if="state.match.length > 0">
            Matching Tags: {{ state.match }}
          </li>
          <li v-if="listing.isOpen" class="text-success">
            open
          </li>
          <li v-if="!listing.isOpen" class="text-danger">
            closed
          </li>
        </ul>
      </div>
      <!-- <li class="col-2" v-if="listing.tags.length > 0">
        Listing Tags: {{ tags }}
      </li> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { listingService } from '../services/ListingService'
import { AppState } from '../AppState'
import router from '../router'
/* eslint-disable vue/require-default-prop */

export default {
  name: 'ListingComponent',
  props: {
    listingProp: Object,
    locationProp: Object,
    tagProp: Object
  },
  setup(props) {
    const state = reactive({
      match: AppState.searchTags.filter(t => props.listingProp.tags.includes(t))
    })
    onMounted(async() => {
      await listingService.getDistance(props.locationProp, props.listingProp)
      AppState.userLocation.distance = JSON.parse(window.localStorage.getItem('distance'))
    })
    return {
      state,
      listing: computed(() => props.listingProp),
      tags: computed(() => props.listingProp.tags),
      location: computed(() => props.locationProp),
      // bugs: computed(() => AppState.bugs.sort((a, b) => (a.updatedAt > b.updatedAt) ? 1 : -1))
      distance: computed(() => AppState.userLocation.distance),
      searchTags: computed(() => props.tagProp),
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
      // checkTags() {
      //   state.match =
      // }
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
  }
  img {
    max-height: 50px;
  }
</style>
