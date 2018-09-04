<template>
  <div id="app">
   <router-view v-if="false"/>
    <transition v-if="true" name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
     <router-view/>
  </transition>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        pokazi:this.$store.state.showTransition
      }
    },
    computed:{
      prikazi(){
        return this.$store.state.showTransition;

      }
    }
  }
</script>

<style >
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

body{
  font: 400 1em/1.5 "Neuton";
   background: #090d00;
    color: rgba(255,255,255,.25);
     text-align: center;
      margin: 0 ;
    }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
