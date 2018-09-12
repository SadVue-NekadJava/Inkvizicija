<template>
<div class="hello">
  <audio controls autoplay hidden>
    <source src="../assets/shortCut.mp3" type="audio/mp3">
    </audio>

  <form >
    <h3 v-if="registered">USPESNA REGISTRACIJA</h3>
    <h3 v-if="notlogged">POGRESNI PODACI</h3>
    <label class="gameMode">Korisnicko ime</label><br>
    <input v-model="username" class="unosi" type="text" name="" value=""><br>
    <label class="gameMode">Lozinka</label><br>
    <input v-model="password" class="unosi" type="password" name="" value=""><br>
    <label class="prazan"></label><br>
    <div class="wrap">
      <button v-on:click.prevent="login" class="clicker right">Uloguj se</button>

      <div class="circle angled right"></div>
    </div>

    <router-link to="/register" class="gameMode reg">Register</router-link>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      logged: false,
      notlogged: false
    }
  },
  methods: {
    login() {
      axios.post('http://739k121.mars-e1.mars-hosting.com/inkvizicija/inkvizicija.js', {
        username: this.username,
        password: this.password
      }).then(response => {
        var sid = response.data.sid;
        window.localStorage.setItem("sessionid", sid);
        console.log(response.data[0].usr_access);
        if (response.data.status == 'ok') {
          this.logged = true;
          this.notlogged = false;
          this.$router.push('mainPage');
          this.$store.state.user = this.username;
          window.localStorage.setItem("username", this.username);
          window.localStorage.setItem("poeni", response.data[0].usr_points);
          window.localStorage.setItem("zlato", response.data[0].usr_gold);
          if (response.data[0].usr_points == null) {
            window.localStorage.setItem("poeni", 0);

          }
          if (response.data[0].usr_gold == null) {
            window.localStorage.setItem("zlato", 0);
          }
          console.log(window.localStorage.getItem('poeni'));
          console.log(window.localStorage.getItem('zlato'));
          if (response.data[0].usr_access == 1)
            window.localStorage.setItem("adminUser", true);
        } else {
          this.notlogged = true;
        }
      });
    }
  },
  computed: {
    registered() {
      return this.$store.state.registered;
    }
  },
  mounted() {
    // if (window.localStorage.getItem('sessionid') != null) {
    //   this.$router.push('home');
    // }
  }
}
</script>

<style scoped lang="scss">

h3{
    color: rgba(255,255,255,.8);
}


.unosi {
    margin: 30px;
    padding: 10px 50px;
    font-size: 20px;
}
.prazan {
    display: inline-block;
    border-top: 4px double rgba(255,255,255,.25);
    border-width: 4px 0;
    padding: 1.5em 0;
    top: 18%;
    left: 50%;
    margin: 0 auto;
    color: rgba(255,255,255,.25);
}
.reg:hover {
    color: white;
    transition: all 0.2s ease-in-out;
    transform: scale(1.3);

}
.reg {
    border-bottom: none;
    margin-bottom: 0;
}
</style>
