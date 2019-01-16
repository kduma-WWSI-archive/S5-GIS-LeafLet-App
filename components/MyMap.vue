<template>
  <l-map ref="myMap"
         :zoom="11"
         :minZoom="8"
         :maxZoom="16"
         :center="[52.24912, 20.98937]"
         :maxBounds="[[48.7515694397423, 13.4999258093913],[55.0963044138849, 25.0252495412993]]"
         class="min-w-full min-h-screen">
    <!--<l-icondefault></l-icondefault>-->

    <l-control-layers position="topright"></l-control-layers>

    <l-control-attribution position="bottomright" prefix="Krystian Duma 7763 Z501"></l-control-attribution>

    <l-control-scale position="topright" scale="metric" ></l-control-scale>

    <!--<l-control position="bottomleft" >-->
      <!--<button @click="clickHandler">-->
      <!--I am a useless button!-->
      <!--</button>-->
      <!--Hello-->
    <!--</l-control>-->

    <l-marker :lat-lng="[52.24912, 20.98937]">
      <l-popup><strong>WWSI</strong> - Wyższa Warszawska Szkoła Informatyki</l-popup>
    </l-marker>

    <l-marker-cluster :options="clusterOptions">

      <l-marker :lat-lng="[paczkomat.location.latitude, paczkomat.location.longitude]" v-for="paczkomat in paczkomaty"
                :key="paczkomat.name" :icon="icon">
        <l-popup>
          Paczkomat: <strong>{{ paczkomat.name }}</strong>
          <br>
          <br>
          {{ paczkomat.address.line1 }}
          <br>
          {{ paczkomat.address.line2 }}
          <br>
          <br>
          {{ paczkomat }}
        </l-popup>
      </l-marker>
    </l-marker-cluster>

    <l-tile-layer
      key="OpenStreetMap"
      name="OpenStreetMap"
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>"
      :visible="true"
      layer-type="base"
      :bounds="[[48.7515694397423, 13.4999258093913],[55.0963044138849, 25.0252495412993]]">
    </l-tile-layer>

    <l-tile-layer
    key="OpenTopoMap"
    name="OpenTopoMap"
    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
    attribution="Map data: &copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>, <a href='http://viewfinderpanoramas.org'>SRTM</a> | Map style: &copy; <a href='https://opentopomap.org'>OpenTopoMap</a> (<a href='https://creativecommons.org/licenses/by-sa/3.0/'>CC-BY-SA</a>)"
    :visible="false"
    layer-type="base"
    :bounds="[[48.7515694397423, 13.4999258093913],[55.0963044138849, 25.0252495412993]]">
    </l-tile-layer>

    <l-wms-tile-layer
    key="Administracyjna"
    name="Administracyjna"
    attribution="Map data &copy; <a href='https://geoportal.gov.pl/'>geoportal.gov.pl</a>"
    base-url="http://mapy.geoportal.gov.pl/wss/service/img/guest/Administracyjna/MapServer/WMSServer"
    layers="Administracyjna"
    :visible="false"
    layer-type="base"
    :bounds="[[48.7515694397423, 13.4999258093913],[55.0963044138849, 25.0252495412993]]">
    </l-wms-tile-layer>

  </l-map>



  <!--<l-map :zoom=10 :center="initialLocation" class="min-w-full min-h-screen">-->
    <!--<v-icondefault></v-icondefault>-->
    <!--<l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>-->
    <!--<v-marker-cluster :options="clusterOptions" @clusterclick="click()">-->
      <!--<l-marker v-for="l in locations" :key="l.id" :lat-lng="l.latlng" :icon="icon">-->
        <!--<l-popup :content="l.text"></l-popup>-->
      <!--</l-marker>-->
    <!--</v-marker-cluster>-->
  <!--</l-map>-->
</template>

<script>


  export default {
    components: {},
    data () {
      return {
        paczkomaty: null,
        clusterOptions: {
          disableClusteringAtZoom: 15
        },
      }
    },
    mounted() {
    //   setTimeout(() => {
    //     console.log('done')
    //     this.$nextTick(() =>{
    //       this.clusterOptions = { disableClusteringAtZoom: 11 }
    //     });
    //   }, 5000);

      this.pobierzPaczkomaty();
    },
    methods: {
      clickHandler () {
        window.alert('and mischievous')
      },
      async pobierzPaczkomaty() {
        const paczkomaty = await this.$axios.$get('https://api-pl-points.easypack24.net/v1/points?fields=name,type,location,address,address_details,functions,location_date,status&type=parcel_locker,pop,parcel_locker_superpop&relative_point=52.24912,20.98937&per_page=100&page=1&source=geov4_pl')
        this.paczkomaty = paczkomaty.items;
      }
    }
  }
</script>

<style>
  /*@import "~leaflet/dist/leaflet.css";*/
  @import "~leaflet.markercluster/dist/MarkerCluster.css";
  @import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>
