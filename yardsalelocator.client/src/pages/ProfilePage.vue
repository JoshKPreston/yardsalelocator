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
      <form @submit.prevent="create(state.newListing)" class="form-row">
        <!-- address -->
        <div class="form-group col-12">
          <input
            :v-model="state.newListing.address"
            type="text"
            name="newListingAddress"
            id="newListingAddress"
            class="form-control"
            placeholder="Address"
            aria-describedby="helpId"
          />
        </div>
        <!-- start date -->
        <div class="form-group col-12">
          <input
            :v-model="state.newListing.startDate"
            type="date"
            name="newListingStartDate"
            id="newListingStartDate"
            class="form-control"
            aria-describedby="helpId"
          />
        </div>
        <!-- num of days open -->
        <div class="form-group col-12 pl-2">
          <div class="form-check form-check-inline">
            <label class="form-check-label">Days Open</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="newListingDaysOpenOne"
              value="option1"
            />
            <label class="form-check-label" for="newListingDaysOpenOne">1</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="newListingDaysOpenTwo"
              value="option2"
            />
            <label class="form-check-label" for="newListingDaysOpenTwo">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="newListingDaysOpenThree"
              value="option3"
            />
            <label class="form-check-label" for="newListingDaysOpenThree">3</label>
          </div>
        </div>
        <!-- img upload -->
        <div class="form-group col-12">
          <!-- <input
            type="file"
            name="newListingImgFileUpload"
            id="newListingImgFileUpload"
            class=""
            aria-describedby="helpId"
            accept="image/*"
          /> -->
          <!-- <div class="custom-file">
            <input type="file" class="custom-file-input" id="newListingImgFileUpload" name="newListingImgFileUpload" accept="image/*">
            <label class="custom-file-label" for="newListingImgFileUpload">Choose file...</label>
            <div class="invalid-feedback">
              Image file type only
            </div>
          </div> -->
          <div class="input-group mb-3">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="newListingImgFileUpload" accept="image/*">
              <label class="custom-file-label" for="newListingImgFileUpload" aria-describedby="newListingImgFileUploadAddon">Choose file</label>
            </div>
            <div class="input-group-append">
              <span class="input-group-text" id="newListingImgFileUploadAddon">Upload</span>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-3">
              <img src="" alt="img">
            </div>
            <div class="col-3">
              <img src="" alt="img">
            </div>
            <div class="col-3">
              <img src="" alt="img">
            </div>
          </div>
        </div>
        <!-- description -->
        <div class="form-group col-12">
          <textarea
            :v-model="state.newListing.description"
            rows="3"
            type="text"
            name="newListingDescription"
            id="newListingDescription"
            class="form-control"
            placeholder="Description"
            aria-describedby="helpId"
          >
          </textarea>
        </div>
        <div class="form-group col-12">
          <button type="submit" class="btn btn-primary btn-block">
            Submit
          </button>
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
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { listingService } from '../services/ListingService'
import { setAuth } from '../services/AxiosService'
import { logger } from '../utils/Logger'

export default {
  name: 'Profile',
  setup() {
    onMounted(async() => {
      setAuth()
      await listingService.getAll()
    })
    const state = reactive({
      newListing: {}
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      listings: computed(() => AppState.listings.filter(listing => listing.profile.email === AppState.profile.email)),
      // TODO need to finish passing the form to create new listing, sorry brain is fried it's 4am
      async create(newListing) {
        await listingService.getCoordinates(newListing.address)
        newListing.lat = AppState.userLocation.latitude
        newListing.long = AppState.userLocation.longitude
        logger.log(newListing)
        listingService.create(newListing)
      }
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
