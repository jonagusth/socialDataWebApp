<template>
  <div id="nav">
      <banner/>
      <router-view></router-view>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'



export default {
  components: { Banner },
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
