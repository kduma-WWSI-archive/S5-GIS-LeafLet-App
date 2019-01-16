<template>
  <section>
    <!--<div>-->
      <!--<logo/>-->
      <!--<h1 class="title">-->
        <!--LeafLet7763-->
      <!--</h1>-->
      <!--<h2 class="subtitle">-->
        <!--LeafLet App 7763-->
      <!--</h2>-->
      <!--<div class="links">-->
        <!--<a-->
          <!--href="https://nuxtjs.org/"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;green">Documentation</a>-->
        <!--<a-->
          <!--href="https://github.com/nuxt/nuxt.js"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;grey">GitHub</a>-->
      <!--</div>-->
    <no-ssr>
      <map></map>
    </no-ssr>
        <!--<no-ssr>-->
          <!--<l-map ref="myMap" :zoom="8" :minZoom="8" :maxZoom="16" :center="[52.24912, 20.98937]" :maxBounds="[[48.7515694397423, 13.4999258093913],[55.0963044138849, 25.0252495412993]]" class="min-w-full min-h-screen">-->

            <!--&lt;!&ndash;<l-control-layers position="topright"></l-control-layers>&ndash;&gt;-->

            <!--&lt;!&ndash;<l-control-attribution position="bottomright" prefix="Krystian Duma 7763 Z501"></l-control-attribution>&ndash;&gt;-->

            <!--&lt;!&ndash;<l-control-scale position="topright" scale="metric" ></l-control-scale>&ndash;&gt;-->

            <!--&lt;!&ndash;<l-control position="bottomleft" >&ndash;&gt;-->
              <!--&lt;!&ndash;<button @click="clickHandler">&ndash;&gt;-->
                <!--&lt;!&ndash;I am a useless button!&ndash;&gt;-->
              <!--&lt;!&ndash;</button>&ndash;&gt;-->
              <!--&lt;!&ndash;Hello&ndash;&gt;-->
            <!--&lt;!&ndash;</l-control>&ndash;&gt;-->

            <!--<v-marker-cluster>-->
              <!--<l-marker :lat-lng="[52.24912, 20.98937]">-->
                <!--<l-popup><strong>WWSI</strong> - Wyższa Warszawska Szkoła Informatyki</l-popup>-->
              <!--</l-marker>-->

              <!--<l-marker :lat-lng="[paczkomat.location.latitude, paczkomat.location.longitude]" v-for="paczkomat in paczkomaty" :key="paczkomat.name">-->
                <!--<l-popup>-->
                  <!--Paczkomat: <strong>{{ paczkomat.name }}</strong>-->
                  <!--<br>-->
                  <!--<br>-->
                  <!--{{ paczkomat.address.line1 }}-->
                  <!--<br>-->
                  <!--{{ paczkomat.address.line2 }}-->
                  <!--<br>-->
                  <!--<br>-->
                  <!--{{ paczkomat }}-->
                <!--</l-popup>-->
              <!--</l-marker>-->
            <!--</v-marker-cluster>-->


            <!--<l-tile-layer-->
              <!--key="OpenStreetMap"-->
              <!--name="OpenStreetMap"-->
              <!--url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"-->
              <!--attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>"-->
              <!--:visible="true"-->
              <!--layer-type="base"-->
              <!--:bounds="[[48.7515694397423, 13.4999258093913],[55.0963044138849, 25.0252495412993]]">-->
            <!--</l-tile-layer>-->

            <!--&lt;!&ndash;<l-tile-layer&ndash;&gt;-->
              <!--&lt;!&ndash;key="OpenTopoMap"&ndash;&gt;-->
              <!--&lt;!&ndash;name="OpenTopoMap"&ndash;&gt;-->
              <!--&lt;!&ndash;url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"&ndash;&gt;-->
              <!--&lt;!&ndash;attribution="Map data: &copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>, <a href='http://viewfinderpanoramas.org'>SRTM</a> | Map style: &copy; <a href='https://opentopomap.org'>OpenTopoMap</a> (<a href='https://creativecommons.org/licenses/by-sa/3.0/'>CC-BY-SA</a>)"&ndash;&gt;-->
              <!--&lt;!&ndash;:visible="false"&ndash;&gt;-->
              <!--&lt;!&ndash;layer-type="base"&ndash;&gt;-->
              <!--&lt;!&ndash;:bounds="[[48.7515694397423, 13.4999258093913],[55.0963044138849, 25.0252495412993]]">&ndash;&gt;-->
            <!--&lt;!&ndash;</l-tile-layer>&ndash;&gt;-->

            <!--&lt;!&ndash;<l-lwms-tile-layer&ndash;&gt;-->
              <!--&lt;!&ndash;key="Administracyjna"&ndash;&gt;-->
              <!--&lt;!&ndash;name="Administracyjna"&ndash;&gt;-->
              <!--&lt;!&ndash;attribution="Map data &copy; <a href='https://geoportal.gov.pl/'>geoportal.gov.pl</a>"&ndash;&gt;-->
              <!--&lt;!&ndash;base-url="http://mapy.geoportal.gov.pl/wss/service/img/guest/Administracyjna/MapServer/WMSServer"&ndash;&gt;-->
              <!--&lt;!&ndash;layers="Administracyjna"&ndash;&gt;-->
              <!--&lt;!&ndash;:visible="false"&ndash;&gt;-->
              <!--&lt;!&ndash;layer-type="base"&ndash;&gt;-->
              <!--&lt;!&ndash;:bounds="[[48.7515694397423, 13.4999258093913],[55.0963044138849, 25.0252495412993]]">&ndash;&gt;-->
            <!--&lt;!&ndash;</l-lwms-tile-layer>&ndash;&gt;-->

          <!--</l-map>-->
        <!--</no-ssr>-->

    <!--</div>-->
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Map from '~/components/Map.vue'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

export default {

  components: {
    Logo,
    Map,
    'v-marker-cluster': Vue2LeafletMarkerCluster
  },
  data: () => ({
    map: null,
    paczkomaty: null,
    openStreetMaps: true
  }),
  // mounted () {
  //   this.$nextTick(() => {
  //     const checkMapObject = setInterval(() => {
  //       if (this.$refs.myMap) {
  //         this.map = this.$refs.myMap.mapObject;
  //         clearInterval(checkMapObject)
  //       }
  //     }, 100)
  //   });
  //   this.pobierzPaczkomaty();
  // },
  methods: {
    // clickHandler () {
    //   window.alert('and mischievous')
    // },
    async pobierzPaczkomaty() {
      const paczkomaty = await this.$axios.$get('https://api-pl-points.easypack24.net/v1/points?fields=name,type,location,address,address_details,functions,location_date,status&type=parcel_locker,pop,parcel_locker_superpop&relative_point=52.24912,20.98937&per_page=100&page=1&source=geov4_pl')
      this.paczkomaty = paczkomaty.items;
    }
  }
}
</script>

<style>

  @import "~leaflet.markercluster/dist/MarkerCluster.css";
  @import "~leaflet.markercluster/dist/MarkerCluster.Default.css";

/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
