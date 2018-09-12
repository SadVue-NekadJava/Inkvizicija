<template>
  <div class="hello">




  <form class="">
    <h3 v-if="samePass">UNELI STE RAZLICITE LOZINKE ILI PREKRATKU LOZINKU !</h3>
    <h3 v-if="blankUser">PRAZNO ILI POSTOJECE KORISNICKO IME !</h3>
    <label class="gameMode">Korisnicko ime</label><br>
    <input v-model="username" class="unosi" type="text" name="" value=""><br>
    <label class="gameMode">Lozinka</label><br>
    <input v-model="password1" class="unosi" type="password" name="" value=""><br>

    <input v-model="password2" class="unosi zadnji" type="password" name="" value=""><br>
    <router-link to="/" class="gameMode nazad">Nazad</router-link><br>
    <div class="wrap">
    <button v-on:click.prevent="register" class="clicker right">Registruj se</button>
    <div class="circle angled right"></div>
</div>
  </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      password1:'',
      password2:'',
      samePass:false,
      blankUser:false
      }
  },
  methods:{
    register(){
      if(this.password1 != this.password2 || this.password1.length<6){
        this.samePass=true;
        return;
      }else if(this.username == ""){
        this.blankUser=true;
        return;
      }else{
      axios.post('http://739k121.mars-e1.mars-hosting.com/inkvizicija/register.js',{
       username: this.username,
       password1: this.password1
      }).then(response => {
        if(response.data.Korisnik=='registrovan'){
          this.$router.push('/')
          this.$store.state.registered=true;
          var self = this;
            setTimeout(function(){
                self.$store.state.registered = false;
            }, 3000);
        }

      });
    }
      }
  },
  computed:{
    registered(){
      return this.$store.state.registered;
    }
  }
}
</script>

<style scoped lang="scss">

.nazad:hover {
    color: white;
    transition: all 0.2s ease-in-out;
    transform: scale(1.3);

}

.unosi{
    margin: 26px;
    padding: 10px 50px;
    font-size: 20px;
    }
    .zadnji{
        margin-top: 0;

        }
h3{
    color: rgba(255,255,255,.8);
}



</style>
``
