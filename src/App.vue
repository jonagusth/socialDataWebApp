<template>
  <SocialDataMain msg="This is a message sent to Social Data Main"/>
</template>

<script>
import SocialDataMain from './components/SocialDataMain.vue'



export default {
  name: 'App',
  components: {
    SocialDataMain,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
