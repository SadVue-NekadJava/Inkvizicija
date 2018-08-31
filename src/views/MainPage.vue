<template>
  <div class="home">

     <hello-world class="neka"></hello-world>
<!-- <img  src="../assets/linus-sandvide-566314-unsplash.jpg" alt=""> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

import RegisterVue from '../components/register.vue'
export default {
  name: 'mainPage',
  components: {
    'hello-world':HelloWorld,
    'register-vue':RegisterVue
  }
}


</script>

<style scoped >
 .home{

background-image: url("../assets/edited.jpg");
background-repeat: no-repeat;

min-height: 974px;
background-size: cover;
}
.neka{
background: transparent;

}

</style>
