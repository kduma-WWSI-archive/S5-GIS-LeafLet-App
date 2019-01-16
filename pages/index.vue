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
      <my-map></my-map>
        <!--<no-ssr>-->

        <!--</no-ssr>-->

    <!--</div>-->
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import MyMap from '~/components/MyMap.vue'

export default {

  components: {
    Logo,
    MyMap,
    //
  },
  data: () => ({
    // map: null,
    // paczkomaty: null,
    // openStreetMaps: true
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
}
</script>

<style>


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
