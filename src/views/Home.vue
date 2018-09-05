<template>
  <div class="home">

    <audio controls autoplay hidden>
    <source src="../assets/shortCut.mp3" type="audio/mp3">
    </audio>
    <hello-world></hello-world>
    <login-vue></login-vue>

  </div>
</template>
s
<script>

import HelloWorld from '../components/HelloWorld.vue'
import LoginVue from '../components/login.vue'

export default {
  name: 'home',
  components: {
    'hello-world':HelloWorld,
    'login-vue':LoginVue
  }
}
</script>
<style >


</style>
