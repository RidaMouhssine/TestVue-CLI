<template>
<div class="app">

  <HeaderTop></HeaderTop> 
<routerview></routerview>
  <FooterBottom></FooterBottom>


  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue'
import FooterBottom from './components/FooterBottom.vue'


export default {
  name: 'App',
  components: {
    HeaderTop, FooterBottom
  }
}
</script>

<style>

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

</style>
