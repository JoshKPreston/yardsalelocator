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
  distanceListings: [],
  // currentMarker: null
  infowindow: null
})

export function ClearAppState() {
  AppState.profile = {}
  AppState.userLocation = {
    latitude: null,
    longitude: null,
    distance: null,
    formattedAddress: null
  }
  AppState.listings = []
  AppState.currentListing = {}
  AppState.searchTags = []
  AppState.distanceListings = []
  AppState.markers = []
}

export const getters = reactive({
  listings: computed(() => AppState.listings.sort((a, b) => (a.distance < b.distance) ? 1 : -1))
})
