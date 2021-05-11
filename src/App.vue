<template>
  <div id="nav">
      <banner/>
      <router-view></router-view>
      <Footer/>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'



export default {
  components: { Banner, Footer },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
