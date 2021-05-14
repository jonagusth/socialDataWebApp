<template>
  <div id="about">
    <div class="row">
      <div class="col-4">
        <img
          src="../assets/Arancha.png"
          class="img-fluid"
          alt="Responsive image"
        />
        <p class="p-3">
          Aranzazu Fernandez Romero
          <br>
          s186527
        </p>
      </div>
      <div class="col-4">
        <img
          src="../assets/berglind.jpg"
          class="img-fluid"
          alt="Responsive image"
        />
        <p class="p-3">
          Berglind Lilja Björnsdóttir
          <br />
          S202073
        </p>
      </div>
      <div class="col-4">
        <img src="../assets/jon.jpg" class="img-fluid" alt="Responsive image" />
        <p class="p-3">
          Jón Ágúst Hannesson
          <br />
          s202057
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#about {
  background-color: rgb(235, 230, 226);
  /* height: 700px; */
  width: 100%;
  height: 100%;
}
</style>
