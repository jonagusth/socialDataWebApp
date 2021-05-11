<template>
  <div id="menu">
    <!-- <p>this is a meny</p> -->
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Social Data</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="about" v-bind:class="{ active: isActive('about') }">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="first" v-bind:class="{ active: isActive('first') }">Data 1</a>
            </li>
                        <li class="nav-item">
              <a class="nav-link" href="second" v-bind:class="{ active: isActive('second') }">Data 2</a>
            </li>
                        <li class="nav-item">
              <a class="nav-link" href="third" v-bind:class="{ active: isActive('third') }">Data 3</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import router from "../router";
export default {
  name: "Menu",
  methods: {
    isActive: function(route) {
      if (this.$route.name == route){
        return true
      }
      else {
        return false
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  background-color: blue;
  /*border-style: solid;
  height: 50px;
  width: 100%;*/
}
</style>
