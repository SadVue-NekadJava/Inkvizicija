<template>
  <div class="main"  @click="ugasi">
    <audio controls autoplay hidden>
    <source src="../assets/mainMenu.mp3" type="audio/mp3">
    </audio>
<div class="popup" id="ugasi" >
  <p>Život i smrt
Rodio se početkom 1548. godine u Noli blizu Napulja, u plemićkoj porodici. Na krštenju je dobio ime Filipo. Još kao dečak primljen je u školu dominikanskog samostana San Domeniko Mađore (San Domenico Maggiore) u Napulju. Uči humanističke nauke i dijalektiku. Tri godine kasnije, 1565. godine, prima ruho dominikanskog iskušenika i uzima ime Đordano. Nakon zaređenja upućen je na teološki fakultet gde studira sholastičku, antičku i arapsku filozofiju. Posebno snažan uticaj na Bruna izvršilo je učenje Nikole Kuzanskog, a preko filozofa Frane Petrića, profesora na platonskoj akademiji u Ferari, upoznaje se s neoplatonizmom i pitagorejskim učenjem.

</p>
</div>
     <hello-world class="neka"></hello-world>
    <label> <router-link to="/story" class="gameMode">Story Mode</router-link>  </label><br>
     <router-link to="#" class="gameMode">Battle Mode</router-link><br>
     <router-link to="/" class="gameMode">Exit</router-link>
     <div class="user">
     <h3>Korisnik: </h3>
     <h3><span class="ime">{{name}}</span></h3>
   </div>
   <!-- <div id="logfire"> -->
    <div id="flamegroup">
           <div class="flame"></div>
    </div>
<!-- </div>​ -->
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

ugasi(){
console.log("fadsd");
  var nesto=document.getElementById('ugasi');
  nesto.style.visibility="hidden";
}


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
  },
  created(){
    //check username
    // if(this.$store.state.user=='')
    // this.$router.push('/');
  }


}


</script>

<style scoped >

.popup p{
  font: 400 1em/1.5 "Neuton";
  letter-spacing: 0;
  text-decoration: none;

  padding: 2.35em 0 .325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255,255,255,.5);
  text-transform: uppercase;
  letter-spacing: .5em;
  display: inline-block;
  color:white;

}
.popup{
  font-family: 'Cinzel', serif;
  letter-spacing: 3px;
  text-shadow: 2px 2px 20px red, 0 0 1em blue, 0 0 0.2em blue;
  position:absolute;
  background: black;
  opacity: 0.5;
  top:40%;
  left:50%;
  width:500px;  /* adjust as per your needs */
  height:800px;   /* adjust as per your needs */
  margin-left:-250px;   /* negative half of width above */
  margin-top:-250px;
   animation-name: iz;
  animation-duration: 1.5s;
}
@keyframes iz {
  from {
    opacity: 0;
  transform: scale(0);
  }
  to {
    opacity: 0.5;
  transform: scale(1);
  }
}















.main{

background-image: url("../assets/edited.jpg");
background-repeat: no-repeat;

min-height: 974px;
background-size: cover;
background-position: center;
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
    position: relative;
    top: -150px;
  left: 89px;
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
