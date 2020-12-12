<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center container-fluid justify-content-center">
    <div class="display-3 row title-height text-light">
      MilkShake
    </div>
    <div class="row justify-content-center top-margin w-100">
      <div class="col">
        <button class="btn btn-primary mb-1" form="advanced-search">
          <h4 class="m-auto">
            Find Near Me
          </h4>
        </button>
        <div id="geo-location"></div>
        <div class="d-flex align-items-center my-2 justify-content-center"
             data-toggle="collapse"
             href="#advancedSearchCollapse"
             role="button"
             aria-expanded="false"
             aria-controls="advancedSearchCollapse"
        >
          <i class="fas fa-list custom-icon mr-2 text-light"></i>
          <span class="text-light align-self-center">Advanced Search</span>
        </div>
        <div class="collapse col-12" id="advancedSearchCollapse">
          <div class="card card-body">
            <form id="advanced-search" class="form-group" @submit.prevent="getResults()">
              <input type="text"
                     class="form-control"
                     aria-describedby="helpId"
                     placeholder="Address, City"
                     v-model="state.advancedSearch.address"
              >
              <TagInputComponent />
              <!-- <input type="text"
                     data-role="tagsinput"
                     class="form-control mt-2"
                     aria-describedby="helpId"
                     placeholder="Tags"
                     v-model="state.advancedSearch.tags"
              > -->
              <input type="range"
                     min="1"
                     id="slider"
                     max="20"
                     class="slider mt-2"
                     aria-label="Distance"
                     aria-describedby="helpId"
                     v-model="state.advancedSearch.distance"
              >
              <span id="f">{{ state.advancedSearch.distance }} miles</span>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Vue 3 Starter</span>
    </h1> -->
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
import { locationService } from '../services/LocationService'
import { setAuth } from '../services/AxiosService'
import router from '../router'
import { AppState } from '../AppState'
import TagInputComponent from '../components/TagInputComponent'

export default {
  name: 'Home',
  components: { TagInputComponent },
  setup() {
    onMounted(async() => {
      await window.localStorage.clear()
      await setAuth()
      await locationService.getGeoLocation()
    })
    const state = reactive({
      advancedSearch: {
        distance: 5,
        address: '',
        searchTags: AppState.searchTags
      }
    })
    return {
      state,
      tags: computed(() => AppState.searchTags),
      async getResults() {
        if (state.advancedSearch.address) {
          await locationService.getCoordinates(state.advancedSearch.address)
        }
        AppState.userLocation.distance = state.advancedSearch.distance
        window.localStorage.setItem('distance', JSON.stringify(state.advancedSearch.distance))
        window.localStorage.setItem('searchTags', JSON.stringify(state.advancedSearch.searchTags))
        router.push({ name: 'Results' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
  .custom-icon{
    font-size: 3vh;
  }

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}
.title-height{
position: absolute;
top: 20vh;
}
.top-margin{
  margin-top: 30vh;
}
}
</style>
