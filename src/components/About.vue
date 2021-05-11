<template>
  <div id="about">
    <p>About US... kind of...</p>
    <div class="row">
        <div class="col-4">
            <img src="../assets/berglind.jpg" class="img-fluid" alt="Responsive image">
            <p> Berglind Lilja Björnsdóttir </p>
            <p> S202073 </p>
        </div>
      <div class="col-4">
          <img src="../assets/jon.jpg" class="img-fluid" alt="Responsive image">
          <p>Jón Ágúst Hannesson</p>
          <p> s202057 </p>
        </div>
      <div class="col-4">
          <img src="../assets/Arancha.png" class="img-fluid" alt="Responsive image">
          <p>Aranzazu Fernandez Romero</p>
          <p>s186527</p>
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
  height: 700px;
  width: 100%;
}
</style>
