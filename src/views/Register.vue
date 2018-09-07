<template>
  <div class="home">

    <audio controls autoplay hidden>
    <source src="../assets/shortCut.mp3" type="audio/mp3">
    </audio>
    <hello-world></hello-world>
<register-vue></register-vue>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

import RegisterVue from '../components/register.vue'
export default {
  name: 'register',
  components: {
    'hello-world':HelloWorld,
    'register-vue':RegisterVue
  }
}


</script>
