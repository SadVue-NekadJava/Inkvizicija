<template>
  <div class="home">

     <hello-world class="neka"></hello-world>
    <label> <router-link to="/story" class="gameMode">Story Mode</router-link>  </label><br>
     <router-link to="#" class="gameMode">Battle Mode</router-link><br>
     <router-link to="#" class="gameMode">Exit</router-link>
     <h3>Welcome {{name}}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import LoginVue from '../components/login.vue'
import RegisterVue from '../components/register.vue'
export default {
  name: 'mainPage',
  components: {
    'hello-world':HelloWorld,
    'register-vue':RegisterVue,
    'login-vue':LoginVue
  },
  data(){
    return{
      name:this.$store.state.user
    }
  },
  mounted(){
    console.log(this.$store.state.user);
  },
  computed:{
    user(){
      return this.$store.state.user;
    }
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

.gameMode{

  font: 400 1em/1.5 "Neuton";
 letter-spacing: 0;
 padding: .25em 0 .325em;
 display: block;
 margin: 0 auto;
 text-shadow: 0 0 80px rgba(255,255,255,.5);
 text-transform: uppercase;
 letter-spacing: .5em;
 display: inline-block;
 border: 4px double rgba(255,255,255,.25);
 border-width: 4px 0;
 padding: 1.5em 0em;
 //position: absolute;
 top: 18%;
 left: 50%;
 width:200px;
  /* 40em; */
 margin: 15px auto;
 color: rgba(255,255,255,.25);
}

.gameMode:hover
{
  color: white;
  transition: all .2s ease-in-out;
 transform: scale(1.3);



}







</style>
