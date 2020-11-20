import { reactive } from 'vue'

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
  currentListing: {}
})
