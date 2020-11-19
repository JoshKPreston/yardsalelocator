<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center  container-fluid justify-content-center">
    <div class="display-3 row title-height">
      MilkShake
    </div>
    <div class="row justify-content-center top-margin w-100">
      <div class="col">
        <button class="btn btn-primary" @click.prevent="getLocation()">
          <h4>Find Near Me</h4>
        </button>
        <div id="geo-location"></div>
        <div class="d-flex align-items-center my-2 justify-content-center"
             data-toggle="collapse"
             href="#advancedSearchCollapse"
             role="button"
             aria-expanded="false"
             aria-controls="advancedSearchCollapse"
        >
          <i class="fas fa-list custom-icon mr-2"></i>
          <p class="mb-0">
            Advanced Search
          </p>
        </div>
        <div class="collapse col-12" id="advancedSearchCollapse">
          <div class="card card-body">
            <form class="form-group" @submit.prevent="">
              <input type="text"
                     class="form-control"
                     aria-describedby="helpId"
                     placeholder="Address"
              >
              <input type="text"
                     class="form-control mt-2"
                     aria-describedby="helpId"
                     placeholder="Tags"
              >
              <input type="range"
                     min="1"
                     max="20"
                     class="slider mt-2"
                     value="5"
                     aria-label="Distance"
                     aria-describedby="helpId"
              >
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
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import router from '../router'

export default {
  name: 'Home',
  setup() {
    return {
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition)
          router.push({ name: 'Results' })
        } else {
          document.getElementById('geo-location').innerText = 'Geolocation is not supported by this browser.'
        }
      },
      showPosition(position) {
        AppState.userLocation.latitude = position.coords.latitude
        AppState.userLocation.longitude = position.coords.longitude
        logger.log(AppState.userLocation)
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
