<template>
    <div id = "everything">
        <Banner/>
        <Content/>
    </div>
</template>

<script>

import Banner from './Banner'
import Content from './Content.vue'


export default {

  name: 'SocialDataMain',
  components: {
    Banner,
    Content,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#everything {
    border: solid 1px red;
    background: pink;
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
