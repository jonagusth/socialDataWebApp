<template>
  <div id="myHeader">
    <div id="menu">
      <Menu/>
    </div>
  </div>
</template>

<script>

import Menu from './Menu'

export default {
  name: 'Banner',
    components: {
    Menu,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myHeader {
  color: #000000;
  background-color: rgb(27, 150, 138);
  height: 60px;
  width: 100%;
  position: relative;
}
</style>
