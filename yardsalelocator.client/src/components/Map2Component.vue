<template>
  <div class="map-component" ref="map"></div>
  <div id="targetId"></div>
  <div id="map" class="App"></div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'MapComponent',
  setup() {
    onMounted(async() => {
      // const map = new google.maps.Map(document.getElementById('map'), {
      //       zoom: 10,
      //       center: { lat: AppState.userLocation.latitude, lng: AppState.userLocation.longitude }
      //     })
      // this.map = new H.Map(
      //   this.$refs.map,
      //   this.platform.createDefaultLayers().vector.normal.map, {
      //     zoom: this.zoom,
      //     center: { lat: this.latitude, lng: this.longitude }
      //   }
      // )
    })

    return {
      platform: {},
      map: {}
      // dropMarker(position) {
      //   let marker = new map.Marker({lat: position.Latitude, lng: position.Longitude}),
      //   this.map.addObject(marker)
      // }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
