<template>
  <div
    class="profile-page flex-grow-1 d-flex flex-column align-items-center container-fluid "
  >
    <div class="row height-custom align-items-center border-top w-100">
      <div class="col-12 d-flex justify-content-center">
        <div>
          <h1 class="m-0">
            Welcome
          </h1>
          <p class="text-center">
            {{ profile.name }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="row height-custom align-items-center border-top w-100"
      data-toggle=""
      href="#currentListings"
      role="button"
      aria-expanded="false"
      aria-controls="currentListings"
      v-if="listings.length > 0"
    >
      <div class="col-1 d-flex justify-content-start">
        <span class="d-block"></span>
      </div>
      <div class="col-10 d-flex justify-content-start">
        <h5 class="m-0">
          Current Listing
        </h5>
      </div>
    </div>

    <div
      id="currentListings"
      class="current-listings row justify-content-start align-items-center w-100"
    >
      <b><CurrentListingComponent
        v-for="listing in listings"
        :key="listing"
        :listing-prop="listing"
        :location-prop="location"
      />
      </b>
      <div v-if="listings[0]" class="w-100 d-flex justify-content-between align-items-center pl-3">
        <button :class="listings[0].isOpen ? 'btn btn-warning btn-block' : 'btn btn-success'" @click.prevent="toggleOpen">
          {{ listings[0].isOpen ? 'Close Yard Sale' : 'Open Yard Sale' }}
        </button>
        <div class="m-3 d-flex">
          <div
            class=""
            data-toggle="collapse"
            href="#editListing"
            role="button"
            aria-expanded="false"
            aria-controls="editListing"
          >
            <i class="fas fa-edit fa-2x mr-2"></i>
          </div>
          <i class="fas fa-trash fa-2x text-danger" @click.prevent="deleteListing">
          </i>
        </div>
      </div>
      <!-- <button class="btn btn-success btn-block" v-if="!listings[0].isOpen">
        Open Yard Sale
      </button>
      <button class="btn btn-danger btn-block" v-else>
        Close Yard Sale
      </button> -->
    </div>
    <div id="editListing" class="collapse">
      <form @submit.prevent="createListing()" class="form-row">
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
              :value="1"
              v-model="state.newListing.daysOpen"
            />
            <label class="form-check-label" for="newListingDaysOpenOne">1</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="newListingDaysOpenTwo"
              :value="2"
              v-model="state.newListing.daysOpen"
            />
            <label class="form-check-label" for="newListingDaysOpenTwo">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="newListingDaysOpenThree"
              :value="3"
              v-model="state.newListing.daysOpen"
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
            v-model="state.newListing.description"
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
          <button type="submit"
                  class="btn btn-primary btn-block"
                  data-toggle="collapse"
                  href="#newListing"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div
      class="row align-items-center border-top w-100 height-custom border-bottom"
      data-toggle="collapse"
      href="#newListing"
      role="button"
      aria-expanded="false"
      aria-controls="newListing"
      v-if="listings.length === 0"
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
      <form @submit.prevent="createListing()" class="form-row">
        <!-- address -->
        <div class="form-group col-12">
          <input
            v-model="state.newListing.address"
            type="text"
            name="newListingAddress"
            id="newListingAddress"
            class="form-control"
            placeholder="Address, City, Zip"
            aria-describedby="helpId"
          />
        </div>
        <!-- start date -->
        <div class="form-group col-12">
          <input
            v-model="state.newListing.startDate"
            type="date"
            name="newListingStartDate"
            id="newListingStartDate"
            class="form-control"
            aria-describedby="helpId"
          />
        </div>
        <div class="form-group col-12 pl-2">
          <TagInputComponent />
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
              :value="1"
              v-model="state.newListing.daysOpen"
            />
            <label class="form-check-label" for="newListingDaysOpenOne">1</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="newListingDaysOpenTwo"
              :value="2"
              v-model="state.newListing.daysOpen"
            />
            <label class="form-check-label" for="newListingDaysOpenTwo">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="newListingDaysOpenThree"
              :value="3"
              v-model="state.newListing.daysOpen"
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
              <input @change="onFileSelected" type="file" class="custom-file-input" id="newListingImgFile" accept="image/*">
              <label class="custom-file-label" for="newListingImgFile" aria-describedby="newListingImgFileAddon">Choose file</label>
            </div>
            <div class="input-group-append">
              <span @click="onUpload" class="input-group-text" id="newListingImgFileAddon">Upload</span>
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
            v-model="state.newListing.description"
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
          <button type="submit"
                  class="btn btn-primary btn-block"
                  data-toggle="collapse"
                  href="#newListing"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <!-- <div
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
    </div> -->
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
import { FirebaseStorage } from '../firebase'
import { computed, onMounted, reactive } from 'vue'
import { setAuth } from '../services/AxiosService'
import { locationService } from '../services/LocationService'
import { listingService } from '../services/ListingService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default {
  name: 'Profile',
  setup() {
    onMounted(async() => {
      await setAuth()
      await locationService.getGeoLocation()
      await listingService.getAll()
    })
    const state = reactive({
      storageRef: FirebaseStorage.ref(),
      imgFile: [],
      newListing: {
        address: '',
        startDate: Date,
        daysOpen: 1,
        tags: AppState.searchTags,
        isOpen: false,
        description: '',
        imgUrl: ''
      }
    })
    return {
      state,
      location: computed(() => AppState.userLocation),
      profile: computed(() => AppState.profile),
      listings: computed(() => AppState.listings.filter(listing => listing.profile.email === AppState.profile.email)),
      // TODO need to finish passing the form to create new listing, sorry brain is fried it's 4am
      async createListing() {
        await locationService.getCoordinates(state.newListing.address)
        state.newListing.lat = AppState.userLocation.latitude
        state.newListing.long = AppState.userLocation.longitude
        state.newListing.address = AppState.userLocation.formattedAddress
        logger.log(state.newListing)
        await listingService.create(state.newListing)
        // router.push({name: 'Listing', params: {id: }})
        listingService.getAll()
      },
      async toggleOpen() {
        if (this.listings[0].isOpen) {
          await listingService.editListing(this.listings[0].id, { isOpen: false })
          this.listings[0].isOpen = false
        } else {
          await listingService.editListing(this.listings[0].id, { isOpen: true })
          this.listings[0].isOpen = true
        }
      },
      async deleteListing() {
        await listingService.deleteListing(this.listings[0].id)
      },
      onFileSelected(e) {
        logger.log(e)
        state.imgFile = e.target.files
      },
      async onUpload() {
        // const imageRefFileName = state.storageRef.child(state.newListing.imgFile)
        const imageRefFilePath = await state.storageRef.child('images/' + state.imgFile[0].name)
        // const file = document.getElementById('newListingImgFile').files[0]
        // const metadata = {
        //   contentType: 'image/*'
        // }

        // const uploadTask =
        await imageRefFilePath.put(state.imgFile[0]).then(snapshot => {
          logger.log(snapshot)
          logger.log('Uploaded file!')
        })

        state.newListing.imgUrl = await imageRefFilePath.getDownloadURL()
        logger.log('imgUrl: ' + state.newListing.imgUrl)
        // uploadTask.on(FirebaseStorage.TaskEvent.STATE_CHANGED)

        // gs://yard-sale-locator-82b72.appspot.com
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
.height-custom{
  height: 10vh;
}
</style>
