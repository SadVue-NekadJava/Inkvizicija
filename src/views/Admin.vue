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
     <label ><router-link to="/mainPage"  class="gameMode">Povratak</router-link></label>
</div>

     <div class="korisnik">
     <h3>Korisnik: </h3>
     <h2><span class="ime">{{user}}</span></h2>
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
    opacity: 0;
    min-height: 974px;
    background-size: cover;
    background-position: center;
    animation-name: ulaz;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-fill-mode: forwards;

}
@keyframes ulaz{

from{
  opacity: 0;
}
  to{
    opacity: 1;
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
