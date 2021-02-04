import { computed, reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  profile: {},
  userLocation: {
    latitude: null,
    longitude: null,
    distance: null,
    formattedAddress: null
  },
  listings: [],
  currentListing: {},
  searchTags: [],
  markers: [],
  // currentMarker: null
  infowindow: null
})

export const getters = reactive({
  listings: computed(() => AppState.listings.sort((a, b) => (a.distance < b.distance) ? 1 : -1))
})
