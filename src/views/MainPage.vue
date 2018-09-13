<template>
  <div class="main"  @click="ugasi">
    <audio controls autoplay hidden loop>
    <source src="../assets/mainMenu.mp3" type="audio/mp3">
    </audio>
<div class="popup" id="ugasi" >
  <h3>Djordano Bruno</h3>
  <p>Rodio se početkom 1548. godine u Noli blizu Napulja, u plemićkoj porodici.
     Na krštenju je dobio ime Filipo.
      Još kao dečak primljen je u školu dominikanskog samostana San Domeniko Mađore u Napulju.
    </p>
    <p>1565. godine, prima ruho dominikanskog iskušenika i uzima ime Đordano.
      Nakon zaređenja upućen je na teološki fakultet gde studira sholastičku, antičku i arapsku filozofiju.
    </p>
    <p>
      Posebno snažan uticaj na Bruna izvršilo je učenje Nikole Kuzanskog, a preko filozofa Frane Petrića, profesora na platonskoj akademiji u Ferari, upoznaje se s neoplatonizmom i pitagorejskim učenjem.
    </p>
</div>
     <hello-world class="logo"></hello-world>
     <div id="upali">


     <router-link to="/story"  class="gameMode">Zapocni igru</router-link> <br>
    <label v-if="!adminUser"><router-link to="/score" class="gameMode">Najbolji igraci</router-link><br></label>
     <label v-if="adminUser"><router-link to="/admin" class="gameMode">Izmeni pitanja</router-link><br></label>
     <label  @click="izbrisiSid"><router-link to="/"  class="gameMode">Izlaz</router-link></label>
     </div>
     <router-link to="/usrInfo">  <div class="korisnik">
         <h3>Korisnik: </h3>
         <h3><span class="ime">{{name}}</span></h3>
       </div></router-link>
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
      name:window.localStorage.getItem('username'),
      adminUser:window.localStorage.getItem('adminUser')
    }
  },
  methods:{
    izbrisiSid(){
      window.localStorage.removeItem("sessionid");
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("adminUser");
    },

    upali(){
      var nesto=document.getElementById('upali');
      nesto.style.visibility="hidden";

    },

    ugasi(){
      var nesto=document.getElementById('ugasi');
      nesto.style.visibility="hidden";
      var nesto2=document.getElementById('upali');
      nesto2.style.visibility="visible";
            }


  },
  mounted(){
    this.$store.state.showTransition=false;
    this.upali();
    if(window.localStorage.getItem("sessionid")==null)
    this.$router.push('/');
    //upisivanje poena i zlata u bazu
    axios.put('http://739k121.mars-e1.mars-hosting.com/inkvizicija/odgovori.js',{
        poeni: window.localStorage.getItem('poeni'),
        zlato: window.localStorage.getItem('zlato'),
        user: window.localStorage.getItem('username')
    });

  },
  computed:{
      user(){
        return window.localStorage.getItem('username');
      }
            },
    beforeDestroy () {
      this.$store.state.showTransition=true;
    },
    created(){
      window.localStorage.setItem('story',0);
      window.localStorage.setItem('story2',0);
      console.log(window.localStorage.getItem('story'));
    }


}
</script>

<style scoped >
.popup h3{
  font: 400 1.5em/1.5 "Neuton";
  letter-spacing: 0;
  text-decoration: none;
  padding: 1.35em 0 .325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255,255,255,.5);
  text-transform: uppercase;
  letter-spacing: .5em;
  display: inline-block;
  color:white;

}
.popup p{
  font: 400 1em/1.5 "Neuton";
  letter-spacing: 0;
  text-decoration: none;
  padding: 1.35em 0 .325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255,255,255,.5);
  text-transform: uppercase;
  letter-spacing: .5em;
  display: inline-block;
  color:white;

}
.popup{
  -webkit-box-shadow: 20px 6px 300px 200px rgba(0,0,0,1);
  -moz-box-shadow: 20px 6px 300px 200px rgba(0,0,0,1);
  box-shadow: 20px 6px 300px 200px rgba(0,0,0,1);
  border-radius: 15px;
  font-family: 'Cinzel', serif;
  letter-spacing: 3px;
  text-shadow: 2px 2px 20px red, 0 0 1em blue, 0 0 0.2em blue;
  position:absolute;
  background: black;
  opacity: 0.6;
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

.logo{
  background: transparent;

}
.gameMode:hover
    {
      color: white;
      transition: all .2s ease-in-out;
      transform: scale(1.3);
    }
</style>
