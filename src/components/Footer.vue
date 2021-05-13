<template>
  <div id="footer">
    <div id="footerButton" class="p-3">
      <div v-if="$route.name == 'third'">
        <button type="button" class="btn btn-light" v-on:click="greet">
          Go to first page
        </button>
      </div>
      <div v-else>
        <button type="button" class="btn btn-light" v-on:click="greet">
          Go to next page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Footer",
    methods: {
    greet: function () {
      if (this.$route.name == "first" || this.$route.name == "home") {
        router.push("second").then(() => window.scrollTo(0, 0));
      } else if (this.$route.name == "second") {
        router.push("third").then(() => window.scrollTo(0, 0));
      } else if (this.$route.name == "third") {
        router.push("first").then(() => window.scrollTo(0, 0));
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  color: #000000;
  background-color: rgb(140, 196, 190);
  /* height: 60px; */
  width: 100%; 
  /* position: relative; */
}

#footerButton {
  /* position: absolute;
  top: 20%;
  left: 90%; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
