<template>
  <div id="app">
   <!-- <router-view v-if="prikazi"/>
    <transition v-if="!prikazi" name="router-anim"> -->
     <router-view/>
  <!-- </transition> -->
  </div>
</template>

<script>
  export default{
    data(){
      return{

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
.gameMode{
 font: 400 1em/1.5 "Neuton";
 letter-spacing: 0;
 text-decoration: none;
 display: block;
 margin: 0 auto;
 text-shadow: 0 0 80px rgba(255,255,255,.5);
 text-transform: uppercase;
 letter-spacing: .5em;
 display: inline-block;
 border: 4px double rgba(255,255,255,.5);
 border-width: 4px 0;
 padding: 1.5em 0em;
 top: 18%;
 left: 50%;
 width:300px;
 margin: 15px auto;
 color: rgba(255,255,255,.5);
}

/* .router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
} */
/* .router-anim-leave-active {
  animation: going 1s;
    }

    @keyframes going {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(250px);
        opacity: 0;
      }
    } */
/* @keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 0.6;
  }
} */
body{
  font: 400 1em/1.5 "Neuton";
   background: #090d00;
    color: rgba(255,255,255,.25);
     text-align: center;
      margin: 0 ;
    }


/* #app {
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
} */


.korisnik{
  color:white;
  position:absolute;
  bottom: 100px;
  left: 100px;
  opacity: 0.5;

}


@media screen and (max-width: 400px){
  .korisnik h3{
    display: none;
  }
}

.ime{
  color: orange;
  font-size:26px;
}

.korisnik:hover{
  transform: scale(1.2);
  cursor:pointer; }
</style>
