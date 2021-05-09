<template>
    <div id = "everything">
        <Banner/>
    </div>
</template>

<script>

import Banner from './Banner'


export default {

  name: 'SocialDataMain',
  components: {
    Banner,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#everything {
    height: 100%;
    width: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
