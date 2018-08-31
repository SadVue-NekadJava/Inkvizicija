<template>
  <div class="home">
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
