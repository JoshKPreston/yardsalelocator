<template>
  <div class="profile-page container-fluid text-light">
    <!-- <div class="row height-custom align-items-center w-100">
      <div class="col-12 d-flex justify-content-center">
        <div>
          <h3 class="m-0">
            Welcome
          </h3>
          <p class="text-center">
            {{ profile.name }}
          </p>
        </div>
      </div>
    </div> -->
    <div class="row height-custom align-items-center p-3" v-if="listings.length > 0">
      <div class="col-12 d-flex justify-content-start">
        <h5 class="m-0">
          Current Listing
        </h5>
      </div>
    </div>

    <div
      id="currentListings"
      class="current-listings row justify-content-start align-items-center"
    >
      <CurrentListingComponent
        v-for="listing in listings"
        :key="listing"
        :listing-prop="listing"
        :location-prop="location"
      />
      <div v-if="listings[0]" class="w-100 d-flex justify-content-between align-items-center pl-3">
        <button :class="listings[0].isOpen ? 'btn btn-warning btn-block' : 'btn btn-success btn-block'" @click.prevent="toggleOpen">
          {{ listings[0].isOpen ? 'Close Yard Sale' : 'Open Yard Sale' }}
        </button>
        <div class="m-3 d-flex">
          <!-- <div
            class=""
            data-toggle="collapse"
            href="#editListing"
            role="button"
            aria-expanded="false"
            aria-controls="editListing"
          > -->
          <!-- <i class="fas fa-edit fa-2x mr-2"></i> -->
          <!-- </div> -->
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
    <!-- // NOTE edit -->
    <!-- <div id="editListing" class="collapse">
      <form @submit.prevent="createListing()" class="form-row">
        num of days open
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
        </div> -->
    <!-- img upload -->
    <!-- <div class="form-group col-12"> -->
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
    <!-- // NOTE this is the outer form
          <div class="input-group mb-3">
            <div class="custom-file">
              <input @change="onFileSelected" type="file" class="custom-file-input" id="newListingImgFileUpload" accept="image/*">
              <label class="custom-file-label" for="newListingImgFileUpload" aria-describedby="newListingImgFileUploadAddon">{{ state.imgFile[0].name }}</label>
            </div>
            <div class="input-group-append">
              <span @click="onUpload" class="input-group-text" id="newListingImgFileUploadAddon">Upload</span>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-3">
              <img class="img-fluid" :src="state.newListing.img" alt="img">
            </div>
          </div>
        </div> -->
    <!-- description -->
    <!-- <div class="form-group col-12">
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
    </div> -->
    <!-- // NOTE new listing form -->
    <div
      class="row justify-content-center align-items-center height-custom"
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
      class="post-new-listing row align-items-center collapse"
    >
      <form @submit.prevent="createListing()" class="form-row p-3">
        <!-- address -->
        <div class="form-group col-12 d-flex flex-column justify-content-center">
          <label for="newListingAddress">Location of Yard Sale</label>
          <input
            name="newListingAddress"
            v-model="state.newListing.address"
            type="text"
            id="newListingAddress"
            class="form-control"
            placeholder="Address, City, Zip"
            aria-describedby="helpId"
          />
        </div>
        <!-- start date -->
        <div class="form-group col-12">
          <label for="newListingStartDate">Start Date</label>
          <input
            v-model="state.newListing.startDate"
            type="date"
            name="newListingStartDate"
            :min="new Date().toISOString().split('T')[0]"
            id="newListingStartDate"
            class="form-control"
            aria-describedby="helpId"
          />
        </div>
        <div class="form-group col-12">
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
              <label class="custom-file-label" for="newListingImgFile" aria-describedby="newListingImgFileAddon">{{ state.imgFile[0].name }}</label>
            </div>
            <div class="input-group-append">
              <span @click="onUpload" class="input-group-text" id="newListingImgFileAddon">Upload</span>
            </div>
          </div>
          <div class="row">
            <!-- <div v-if="!state.newListing.img" class="col-12"> -->
            <div class="col-12">
              <progress class="w-100 h-50" value="0" max="100" id="uploader">
                0%
              </progress>
            </div>
            <!-- <div v-else class="col-12 text-center"> -->
            <div v-if="state.newListing.img" class="col-12 text-center">
              <img class="img-fluid" :src="state.newListing.img" alt="img">
            </div>
          </div>
        </div>
        <!-- description -->
        <div class="form-group col-12">
          <label for="newListingDescription">Description</label>
          <textarea
            name="newListingDescription"
            v-model="state.newListing.description"
            rows="3"
            type="text"
            id="newListingDescription"
            class="form-control"
            placeholder="Enter text here..."
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
    <!-- <div
      id="history"
      class="history row justify-content-start align-items-center w-100 collapse"
    >
      this is the history div data toggle
    </div> -->
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
import Swal from 'sweetalert2'

export default {
  name: 'Profile',
  setup() {
    onMounted(async() => {
      window.localStorage.removeItem('searchTags')
      await setAuth()
      await locationService.getGeoLocation()
      await listingService.getAll()
    })
    const state = reactive({
      storageRef: FirebaseStorage.ref(),
      imgFile: [{ name: 'Choose file' }],
      newListing: {
        address: '',
        startDate: Date,
        expireAt: Date,
        daysOpen: 1,
        tags: AppState.searchTags,
        isOpen: false,
        description: '',
        img: ''
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
        state.newListing.startDate = new Date(state.newListing.startDate)
        state.newListing.startDate.setDate(state.newListing.startDate.getDate())
        // state.newListing.startDate.setHours(0, 0, 0, 0)
        state.newListing.expireAt = new Date(state.newListing.startDate)
        state.newListing.expireAt.setHours(0, 0, 0, 0)
        state.newListing.expireAt.setDate(state.newListing.expireAt.getDate() + state.newListing.daysOpen + 1)
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
        // if (window.confirm('Are you sure you want to delete your listing?')) await listingService.deleteListing(this.listings[0].id)
        await Swal.fire({
          text: 'Are you sure you want to delete your listing?',
          icon: 'warning',
          confirmButtonText: 'Delete',
          showCancelButton: true,
          cancelButtonText: 'Cancel'
        }).then(isConfirm => {
          if (isConfirm.value) {
            listingService.deleteListing(this.listings[0].id)
            // state.storageRef.child('images/' + state.imgFile[0].name).delete()
            try {
              FirebaseStorage.refFromURL(this.listings[0].img).delete()
            } catch (error) {
              logger.error(error)
            }
          }
        })
      },
      onFileSelected(e) {
        logger.log(e)
        state.imgFile = e.target.files
      },
      async onUpload() {
        const uploader = document.getElementById('uploader')
        // const imageRefFileName = state.storageRef.child(state.newListing.imgFile)
        const imageRefFilePath = await state.storageRef.child('images/' + state.imgFile[0].name)
        // const file = document.getElementById('newListingImgFile').files[0]
        // const metadata = {
        //   contentType: 'image/*'
        // }

        imageRefFilePath.put(state.imgFile[0]).on('state_changed',
          function progress(snapshot) {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            uploader.value = percentage
            if (uploader.value === 100) {
              // FIXME ssshhhh this is a secret
              setTimeout(async() => {
                state.newListing.img = await imageRefFilePath.getDownloadURL()
                logger.log('img: ' + state.newListing.img)
              }, 500)
            }
          }
        )

        // .then(
        //   async res => {
        //     state.newListing.img = await imageRefFilePath.getDownloadURL()
        //     logger.log('img: ' + state.newListing.img)
        //   }
        // )
        // setTimeout(() => { state.newListing.img = imageRefFilePath.getDownloadURL() }, 5000)
      }
    }
  }
}
</script>

<style scoped>
img {
  background-size: contain;
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

#uploader {
  -webkit-appearance: none;
  appearance: none;
}

progress::-webkit-progress-value {background-color: #F1B24A !important;}
progress::-webkit-progress-bar {background-color: #4D774E; width: 100%;}

/* $body-bg: #164A41;
$primary: #4D774E;
$secondary: #F1B24A;
$light: #FFFFFF;
$danger: #EB5757;
$success: #27AE60;
$warning: #FF7F50;
$info: #00C9BD;
$dark: #313130; */
</style>
