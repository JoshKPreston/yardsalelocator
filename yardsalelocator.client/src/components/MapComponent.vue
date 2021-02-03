<template>
  <div id="targetId"></div>
  <div id="map" class="App"></div>
</template>

<script>
import { logger } from '../utils/Logger'
import gmapsInit from '../utils/gmaps'
import { computed, onMounted, reactive } from 'vue'
import { setAuth } from '../services/AxiosService'
import { locationService } from '../services/LocationService'
import { listingService } from '../services/ListingService'
import { AppState } from '../AppState'

export default {
  name: 'App',
  setup() {
    onMounted(async() => {
      await setAuth()
      await locationService.getGeoLocation()
      // await listingService.getAll()
      // AppState.userLocation.distance = await JSON.parse(window.localStorage.getItem('distance'))
      // AppState.searchTags = await JSON.parse(window.localStorage.getItem('searchTags'))
      // await AppState.listings.forEach(listing => {
      //   listingService.getDistance(AppState.userLocation, listing)
      // })
      await setTimeout(async() => {
        try {
          const google = await gmapsInit()
          // const geocoder = new google.maps.Geocoder()
          // const map = new google.maps.Map(this.$el)
          const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: { lat: AppState.userLocation.latitude, lng: AppState.userLocation.longitude }
          })
          // map.setCenter({ lat: this.userLocation.latitude, lng: this.userLocation.longitude })
          // map.setZoom(10)

          // NOTE markers
          // await AppState.listings.map(listing => new google.maps.Marker(
          //   {
          //     position: { lat: parseFloat(listing.lat), lng: parseFloat(listing.long) },
          //     map: map
          //   }
          // ))

          await AppState.listings.forEach((listing, listingIndex) => {
            const searchDistance = JSON.parse(window.localStorage.getItem('distance'))
            const listDistance = listingService.feetCheck(listing)
            // const iconBase = 'http://maps.google.com/mapfiles/ms/icons'

            if (listDistance <= searchDistance) {
              // const marker =
              AppState.markers[listingIndex] = new google.maps.Marker({
                position: { lat: parseFloat(listing.lat), lng: parseFloat(listing.long) },
                map: map
                // icon: iconBase + '/red-dot.png'
              })
              const address = listing.address.split(',')
              const street = address[0]
              const city = address[1]
              const state = address[2].split(' ')[1]
              const zip = address[2].split(' ')[2]
              const searchTags = JSON.parse(window.localStorage.getItem('searchTags'))
              const startDate = new Date(listing.startDate).toLocaleDateString()
              const expireDate = new Date(listing.expireAt).toLocaleDateString()

              // NOTE creating listing tag elements
              // const listingTags = []
              // listing.tags.forEach(listingTagName => {
              //   const elem = document.createElement('span', { id: 'tag_' + listingTagName })
              //   elem.innerText = listingTagName
              //   searchTags.forEach(searchTagName => {
              //     if (listingTagName === searchTagName) {
              //       document.getElementById('tag_' + listingTagName).classList.add('matching-tag')
              //     }
              //   })
              //   listingTags.push(elem)
              // })

              // NOTE change color of marker based on TAGS
              // eslint-disable-next-line quotes

              let tagTemplate = ''
              const matchingTags = []
              // eslint-disable-next-line quotes
              if (listing.tags.length > 0 && searchTags) {
                // listing.tags.forEach(tag => {
                //   tagTemplate += `<span id="tag_${tag}">${tag}</span> `
                // })
                for (let i = 0; i < searchTags.length; i++) {
                  const curSearchTag = searchTags[i]
                  for (let j = 0; j < listing.tags.length; j++) {
                    const curListTag = listing.tags[j]
                    if (curSearchTag === curListTag) {
                    // matchingArray.push(curSearchTag)
                    // tagTemplate += '<span id="tag_' + curSearchTag + '" class="matching-tag">' + curSearchTag + '</span>'
                      matchingTags.push(curSearchTag)
                    }
                    //   tagTemplate += `<span id="tag_${curSearchTag}" class="matching-tag">${curSearchTag}</span>`
                    // } else {
                    // // tagTemplate += '<span id="tag_' + curListTag + '">' + curListTag + '</span>'
                    //   tagTemplate += `<span id="tag_${curListTag}">${curListTag}</span>`
                    // }
                  }
                }
                const nonMatchingTags = listing.tags.filter(tag => !matchingTags.includes(tag))
                matchingTags.forEach(tag => { tagTemplate += `<span id="tag_${tag}" class="matching-tag">${tag}</span> ` })
                nonMatchingTags.forEach(tag => { tagTemplate += `<span id="tag_${tag}">${tag}</span> ` })
              }

              // eslint-disable-next-line quotes
              const template = /* html */ `
                <div>
                  <div class = "mb-2 custom-address-font-size">
                    <div>${street}</div>
                    <div>${city}, ${state} ${zip}</div>
                  </div>
                  <div>
                    ${tagTemplate}
                    <div class="custom-info-font-size">
                      <div class="p-1">${startDate} - ${expireDate}</div>
                      <div class="d-flex justify-content-around">
                        <div class="${listing.isOpen ? 'p-1 text-success' : 'p-1 text-danger'}">${listing.isOpen ? 'open' : 'closed'}</div>
                        <div class="p-1 align-self-end"><b>${listing.distance}</b></div>
                      </div>
                    </div>
                  </div>
                  <!--<p>tags: ${listing.tags}</p>-->
                  <div class="d-flex justify-content-around align-items-center">
                    <!--<a class="d-block p-1 text-nowrap" href="http://yard-sale-locator.herokuapp.com/#/listing/${listing.id}">-->
                    <a class="d-block p-2 text-nowrap" href="http://localhost:8080/#/listing/${listing.id}">
                      <img class="custom-vue-img" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png" alt="img" />
                      <!--<i class="fas fa-binoculars fa-2x text-primary"></i>-->
                    </a>
                    <a class="d-block p-2 text-nowrap" href="https://www.google.com/maps/dir/${AppState.userLocation.latitude},${AppState.userLocation.longitude}/${listing.lat},${listing.long}">
                      <i class="fas fa-car fa-2x text-secondary"></i>
                    </a>
                  </div>
                </div>
              `
              AppState.markers[listingIndex].addListener('click', () => {
                if (AppState.infowindow) AppState.infowindow.close()
                AppState.infowindow = new google.maps.InfoWindow({
                  content: template
                })
                AppState.infowindow.open(map, AppState.markers[listingIndex])
              })
            }
          })
        } catch (error) {
          logger.error(error)
        }
      }, 1000)
    })
    const state = reactive({
      markers: computed(() => AppState.markers)
    })
    return {
      state
    }
  }
  // <button class="btn btn-primary btn-sm custom-btn-font-size">View Listing</button>
  // <button class="btn btn-secondary btn-sm custom-btn-font-size">Get Directions</button>
  // userLocation: computed(() => AppState.userLocation),
  // listings: computed(() => AppState.listings)
  // async mounted() {
  // const locations = [
  //   {
  //     position: {
  //       lat: 48.160910,
  //       lng: 16.383330
  //     }
  //   },
  //   {
  //     position: {
  //       lat: 48.174270,
  //       lng: 16.329620
  //     }
  //   }
  // ]
  // try {
  //   const google = await gmapsInit()
  //   // const geocoder = new google.maps.Geocoder()
  //   const map = new google.maps.Map(this.$el)
  //   map.setCenter({ lat: this.userLocation.latitude, lng: this.userLocation.longitude })
  //   map.setZoom(10)

  //   // NOTE markers
  //   await this.listings.map(listing => new google.maps.Marker(
  //     {
  //       position: { lat: parseFloat(listing.lat), lng: parseFloat(listing.long) },
  //       map: map
  //     }
  //   ))

  // await AppState.listings
  //   .forEach(listing => {
  //     listing.map(new window.google.maps.Marker({
  //       position: { lat: listing.lat, lng: listing.long }
  //     }))
  //   })

  // NOTE GEOCODE
  // geocoder.geocode({ address: 'Austria' }, (results, status) => {
  //   if (status !== 'OK' || !results[0]) {
  //     throw new Error(status)
  //   }

  //   map.setCenter(results[0].geometry.location)
  //   map.fitBounds(results[0].geometry.viewport)
  // })

  // NOTE markers
  // const markers = locations
  //   .map(x => new google.maps.Marker({ ...x, map }))
  // } catch (error) {
  //   logger.error(error)
  // }
  // }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.App {
  width: 100vw;
  height: 84vh;
}

.gm-style-iw,
.gm-style-iw-c {
  padding: 1vh !important;
}

.gm-style-iw-d {
  overflow: hidden !important;
}

.custom-address-font-size {
  font-size: 3vh;
}

.custom-info-font-size {
  font-size: 2vh;
}

.custom-btn-font-size {
  font-size: 2vh;
}

.matching-tag {
  color: purple;
}

.custom-vue-img {
  height: 3.5vh;
}

</style>
