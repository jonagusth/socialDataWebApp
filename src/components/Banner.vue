<template>
  <div id="myHeader">
    <p>WOW such an amazing header</p>
    <Menu/>
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
    color: #42b983;
    background-color: bisque;
    border-style: solid;
    height: 150px;
    width: 100%;
}
</style>
