// src/plugins/vue-leaflet.js
import Vue from 'vue'

import Vue2Leaflet from 'vue2-leaflet'

import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';

const VueLeaflet = {

  install(Vue, options) {
    Vue.component('l-map', Vue2Leaflet.LMap);
    Vue.component('l-marker', Vue2Leaflet.LMarker);
    Vue.component('l-tile-layer', Vue2Leaflet.LTileLayer);
    Vue.component('l-popup', Vue2Leaflet.LPopup);
    Vue.component('l-control-layers', Vue2Leaflet.LControlLayers);
    Vue.component('l-control-attribution', Vue2Leaflet.LControlAttribution);
    Vue.component('l-control-scale', Vue2Leaflet.LControlScale);
    Vue.component('l-control', Vue2Leaflet.LControl);
    Vue.component('l-wms-tile-layer', Vue2Leaflet.LWMSTileLayer);
    Vue.component('l-marker-cluster', Vue2LeafletMarkerCluster);
  }

};

Vue.use(VueLeaflet);

export default VueLeaflet;
