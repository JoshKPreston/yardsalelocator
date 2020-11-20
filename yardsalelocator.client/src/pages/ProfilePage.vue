<template>
  <div
    class="profile-page flex-grow-1 d-flex flex-column align-items-center container-fluid justify-content-center"
  >
    <div class="row flex-grow-1 align-items-center border-top w-100">
      <div class="col-12 d-flex justify-content-start">
        <h5 class="m-0">
          Welcome {{ profile.name }}
        </h5>
      </div>
    </div>
    <div
      class="row flex-grow-1 align-items-center border-top w-100"
      data-toggle="collapse"
      href="#currentListings"
      role="button"
      aria-expanded="false"
      aria-controls="currentListings"
    >
      <div class="col-1 d-flex justify-content-start">
        <span class="d-block"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
      </div>
      <div class="col-10 d-flex justify-content-start">
        <h5 class="m-0">
          Current Listing
        </h5>
      </div>
    </div>
    <div
      id="currentListings"
      class="current-listings row justify-content-start align-items-center w-100 collapse"
    >
      <ListingComponent
        v-for="listing in listings"
        :key="listing"
        :listing-prop="listing"
      />
    </div>
    <div
      class="row flex-grow-1 align-items-center border-top w-100"
      data-toggle="collapse"
      href="#newListing"
      role="button"
      aria-expanded="false"
      aria-controls="newListing"
    >
      <div class="col-1 d-flex justify-content-start">
        <span class="d-block"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
      </div>
      <div class="col-10 d-flex justify-content-start">
        <h5 class="m-0">
          Post New Listing
        </h5>
      </div>
    </div>
    <div
      id="newListing"
      class="post-new-listing row justify-content-start align-items-center w-100 collapse"
    >
      <form @submit.prevent="postNewListing()" class="form-row">
        <div class="form-group col-12">
          <input
            type="text"
            name="newListingAddress"
            id="newListingAddress"
            class="form-control"
            placeholder="Address"
            aria-describedby="helpId"
          />
        </div>
        <div class="form-group col-12">
          <input
            type="text"
            name="newListingStartDate"
            id="newListingStartDate"
            class="form-control"
            placeholder="Start date"
            aria-describedby="helpId"
          />
        </div>

        <div class="form-group col-12 pl-2">
          <div class="form-check form-check-inline">
            <label class="form-check-label">Days Open</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">1</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label class="form-check-label" for="inlineRadio3">3</label>
          </div>
        </div>
      </form>
    </div>
    <div
      class="row flex-grow-1 align-items-center border-top w-100"
      data-toggle="collapse"
      href="#history"
      role="button"
      aria-expanded="false"
      aria-controls="history"
    >
      <div class="col-1 d-flex justify-content-start">
        <span class="d-block"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
      </div>
      <div class="col-10 d-flex justify-content-start">
        <h5 class="m-0">
          History
        </h5>
      </div>
    </div>
    <div
      id="history"
      class="history row justify-content-start align-items-center w-100 collapse"
    >
      this is the history div data toggle
    </div>
    <!-- <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p> -->
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { listingService } from '../services/ListingService'
import { setAuth } from '../services/AxiosService'

export default {
  name: 'Profile',
  setup() {
    onMounted(async() => {
      setAuth()
      await listingService.getAll()
    })
    return {
      profile: computed(() => AppState.profile),
      listings: computed(() => AppState.listings.filter(listing => listing.profile.email === AppState.profile.email))
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
div[aria-expanded="true"] .fa-caret-right {
  transition: 0.2s transform ease-in-out;
  transform: rotate(90deg);
}
div[aria-expanded="false"] .fa-caret-right {
  transition: 0.2s transform ease-in-out;
}
</style>
