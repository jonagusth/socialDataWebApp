<template>
  <div id="nav">
    <div class="layout">
      <banner />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Banner, Footer },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    background-color: rgb(235, 230, 226);

}
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 99vh;
}
</style>
