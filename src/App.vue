<template>
  <Header1 />
  <router-view></router-view>
  <Footer1 class = "mt-40"/>
</template>

<script>

import Header1 from './components/Header.vue'
import Footer1 from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header1,
    Footer1
  },

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cairo&family=Nunito+Sans&family=Roboto:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital@1&display=swap');
  body{
    overflow-x: hidden;
    max-height: 1900px;
  }
  *{
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    margin : 0;
    padding: 0;
  }

</style>
