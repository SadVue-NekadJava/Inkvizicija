<template>
  <div class="main">

     <hello-world class="neka"></hello-world>
    <label> <router-link to="/story" class="gameMode">Story Mode</router-link>  </label><br>
     <router-link to="#" class="gameMode">Battle Mode</router-link><br>
     <router-link to="/" class="gameMode">Exit</router-link>
     <div class="user">
     <h3>Korisnik: </h3>
     <h3><span class="ime">{{name}}</span></h3>
   </div>
   <div id="logfire">
    <div id="flamegroup">
           <div class="flame"></div>
    </div>
</div>​
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
  methods:{



  },
  mounted(){
    this.$store.state.showTransition=false;
  },
  computed:{
    user(){
      return this.$store.state.user;
    }
  },
  beforeDestroy () {
    this.$store.state.showTransition=true;
  }


}


</script>

<style scoped >
.main{

background-image: url("../assets/edited.jpg");
background-repeat: no-repeat;

min-height: 974px;
background-size: cover;
background-position: center;
}



#logfire {
    position:relative;
    right: -97px;
    bottom: 177px;
    height:400px;
    margin-top:181px
    }
#flamegroup {
    margin:0 auto;
    position:relative;
    top:100px;
    width:100px;
    height:136px;
}

.flame {
    margin:0 auto;
    position:absolute;
    width:100px;
    height:136px;
    background:url(http://sitepointstatic.com/examples/css3/animation/flame-sprite.png?r=3) 0px 0px no-repeat;
    animation: flicker .4s infinite;
}

@keyframes flicker { /* flame pulses */
    0% {
        background-position:0px 0px;
        opacity:.8
}
    25% {
        background-position:0px 0px;
}
    25.1% {
        background-position:-100px 0px;
}
    50% {
        background-position:-100px 0px;
        opacity:.4
}
    50.1% {
        background-position:-200px 0px;
}
    75% {
        background-position:-200px 0px;

}
    75.1% {
        background-position:-100px 0px;
}
    100% {
        background-position:-100px 0px;
        opacity:.8
}
}




.user{
  color:white;
  position:absolute;
  bottom: 100px;
  left: 100px;
  opacity: 0.5;
}
.ime{
  color: orange;
  font-size:26px;
}

.neka{
background: transparent;

}

.gameMode{

  font: 400 1em/1.5 "Neuton";
 letter-spacing: 0;
 text-decoration: none;

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
 width:300px;
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
