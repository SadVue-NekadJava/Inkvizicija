<template>
  <div class="main" >
    <audio controls autoplay hidden>
    <source src="../assets/mainMenu.mp3" type="audio/mp3">
    </audio>

         <div class="menuItems" v-if="!hideOptions" >
     <hello-world class="logo"></hello-world>

<label class="gameMode" @click="novaPitanja">Dodaj nova pitanja</label><br>
<label class="gameMode" @click="izmeniIzbrisi">Izbrisi pitanja</label><br>

     <!-- <router-link to="#"  class="gameMode">Dodaj nova pitanja</router-link> <br>
     <router-link to="#" class="gameMode">Izmeni/Izbrisi pitanja</router-link><br> -->
     <label  @click="izbrisiSid"><router-link to="/mainPage"  class="gameMode">Povratak</router-link></label>
</div>

     <div class="user">
     <h3>Korisnik: </h3>
     <h3><span class="ime">{{user}}</span></h3>
   </div>
<add-new v-if="newQ" ></add-new>
<edit-delete v-if="editQ" ></edit-delete>

  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import AddNew from '../components/addNewQ.vue'
import EditDelete from '../components/editDeleteQ.vue'
export default {
  name: 'mainPage',
  components: {
    'hello-world':HelloWorld,
    'add-new':AddNew,
    'edit-delete':EditDelete
        },
  data(){
    return{
      name:window.localStorage.getItem('username'),
      hideOptions:false,
      newQ:false,
      editQ:false

    }
  },
  methods:{
      novaPitanja(){
          this.newQ=true;
          this.hideOptions=true;

      },

      izmeniIzbrisi(){

        this.editQ=true;
        this.hideOptions=true;
      },



    izbrisiSid(){
      window.localStorage.removeItem("sessionid");
      window.localStorage.removeItem("username");
    },




  },
  mounted(){
    this.$store.state.showTransition=true;
    if(window.localStorage.getItem("sessionid")==null)
    this.$router.push('/');
    //console.log(window.localStorage.getItem("sessionid"));
  },
  computed:{
      user(){
        return window.localStorage.getItem('username');
      }
            },
    beforeDestroy () {
      this.$store.state.showTransition=true;
    }
  }

</script>

<style scoped >




.main{
    background-image: url("../assets/adminMode.jpg");
    background-repeat: no-repeat;
    min-height: 974px;
    background-size: cover;
    background-position: center;
    animation-name: coming ;
    transition-timing-function: ease-out;
      animation-duration: 3s;
      animation-delay: 1.5s;
    }

    @keyframes coming {
      from {
        transform: translateY(200px);
        opacity: 0;
          }
      to{
        transform: translateY(0px);
        opacity: 1;

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
.logo{
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
     border: 4px double rgba(255,255,255,.5);
     border-width: 4px 0;
     padding: 1.5em 0em;
     //position: absolute;
     top: 18%;
     left: 50%;
     width:300px;
     margin: 15px auto;
     color: rgba(255,255,255,.5);
    }
.gameMode:hover
    {
      color: white;
      transition: all .2s ease-in-out;
      transform: scale(1.3);
    }
</style>
