<template>
  <div class="hello">
    <audio controls autoplay hidden>
    <source src="../assets/shortCut.mp3" type="audio/mp3">
    </audio>

  <form class="">
    <h3 v-if="registered">USPESNA REGISTRACIJA</h3>
    <h3 v-if="notlogged">POGRESNI PODACI</h3>
    <label class="labela">Korisnicko ime</label><br>
    <input v-model="username" class="unosi" type="text" name="" value=""><br>
    <label class="labela">Lozinka</label><br>
    <input v-model="password" class="unosi" type="password" name="" value=""><br>
  <label class="prazan"></label><br>
    <div class="wrap">
    <button v-on:click.prevent="login" class="clicker right">Uloguj se</button>

    <div class="circle angled right"></div>
</div>

<router-link to="/register">Register</router-link>
  </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      logged:false,
      notlogged:false
      }
  },
  methods:{
    login(){
      //console.log(this.username);
      axios.post('http://739k121.mars-e1.mars-hosting.com/inkvizicija/inkvizicija.js',{
       username: this.username,
       password: this.password
      }).then(response => {
        console.log(response.data.status);
        if(response.data.status=='ok'){
          this.logged = true;
          this.notlogged = false;
          this.$router.push('mainPage');
          this.$store.state.user = this.username;

        }else{
        this.notlogged = true;
      }
      });
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

h3{
  color:white;
}
.unosi{
margin: 30px;
padding: 10px 50px;
font-size: 20px;
}

.prazan{
 display: inline-block;
 border-top: 4px double rgba(255,255,255,.25);
 border-width: 4px 0;
 padding: 1.5em 0em;
 //position: absolute;
 top: 18%;
 left: 50%;
 // width: 40em;
 margin: 0 auto;
 color: rgba(255,255,255,.25);
}

.labela{
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
  width: auto;
  margin: 0 auto;
  color: rgba(255,255,255,.25);
}


a
{
  font: 400 1em/1.5 "Neuton";
 letter-spacing: 0;
 padding: .25em 0 .325em;
 display: block;
 margin: 0 auto;
 text-transform: uppercase;
 letter-spacing: .5em;
 display: inline-block;

 border-width: 4px 0;
 padding: 1.5em 0em;
 //position: absolute;
 top: 18%;
 left: 50%;
 width: auto;
 margin: 0 auto;
 color: rgba(255,255,255,.25);
}
a:hover{
  transition: all .2s ease-in-out;
 transform: scale(1.5);
}



.wrap{
  position: relative;
  width: 120px;
  height: 120px;
  margin: 20px auto 30px auto;
  &:last-child {
    margin-bottom: 0;
  }
}

.clicker{
   font: 400 1em/1.5 "Neuton";
  color: rgba(255,255,255,.25);
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255,255,255,.5);
  text-transform: uppercase;
  letter-spacing: .5em;
  display: inline-block;
  letter-spacing: 0;
  padding: .25em 0 .325em;
  background-color:  #090d00;
  outline: none;
  font-size: 20px;
	  position:absolute;
  cursor: pointer;
  padding: 0;
	  border: none;
	  height: 103px;
	  width: 103px;
  left: 8px;
  top: 8px;
	  border-radius: 100px;
	  z-index: 2;
}

.clicker:active{
	  transform: translate(0, 1px);
  height: 100px;
	  box-shadow: 0px 1px 0 0 rgb(190,190,190) inset;
}

.circle{
	  position: relative;
  border-radius:65px;
	  width: 120px;
	  height: 120px;
	  z-index: 1;
}

.circle.third{
  border-radius: 0;
}

.clicker:hover{
  color: white;
}

.clicker:hover + .circle, .clicker:active + .circle {
	  animation: rotator linear .8s infinite;

}

@keyframes rotator{
	  from{ transform: rotate(0deg); }
	  to{ transform: rotate(360deg); }
}


.angled {
			background-image: linear-gradient(45deg,
                white 0%,
                white 30%,
                #ff7100  30%,
								#ff5200   70%,
                white 70%,
                white 100%);
		}

.angled.second{
  			background-image: linear-gradient(
                white 0%,
                white 30%,
                rgb(250,160,120) 30%,
								rgb(250,160,120) 70%,
                white 70%,
                white 100%);
}

.angled.third{
			background-image: linear-gradient(45deg,
                white 0%,
                white 30%,
                rgb(130,230,135) 30%,
								rgb(130,230,135) 70%,
                white 70%,
                white 100%);
}


</style>
