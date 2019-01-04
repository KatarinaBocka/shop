<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [{
      latitude: 45.606891 ,
      longitude: 19.51855
    }, {
      latitude: 45.5473879,
      longitude: 19.789884

    }, {
      latitude: 45.514659,
      longitude: 19.276252

    }, {
      latitude: 45.567911,
      longitude: 19.420638
    }]
    }
  },
  mounted: function () {
    const bounds = new google.maps.LatLngBounds();

    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 10,
      center: new google.maps.LatLng(45.606891 , 19.51855)
    }
    const map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
  const position = new google.maps.LatLng(coord.latitude, coord.longitude);
  const marker = new google.maps.Marker({ 
    position,
    map
  });
});
  }
};
</script>

<style lang="scss" scoped>
.google-map {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  background: gray;
}

/* ----------- Media Query ---------- */
@media (max-width: 767px) {
    .google-map {
       height: 300px; 
    }
}
</style>