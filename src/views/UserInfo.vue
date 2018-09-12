<template>
<div class="userInfo">

<h1 class="gameMode Naslov">Statistika</h1>


<div class="info">



<img src="http://www.sperling.it/risorse/GiordanoBruno/img/bruno1.png"><h1>{{users.usr_name}}</h1><br>
<img src="../assets/points.png"><h1>{{users.usr_points}}</h1><br>
 <img src="../assets/coins.png"><h1>{{users.usr_gold}}</h1>


</div>



</div>




</template>

<script>


import BonusGame from '../components/bonusGame.vue'

export default {
    name: 'score',
    data() {
      return {
        user:window.localStorage.getItem('username'),
        users:[]

        }
      },
    components: {

      },
    computed: {

      },
    methods: {

      },
    mounted() {

      },
    created() {
      axios.get("http://739k121.mars-e1.mars-hosting.com/inkvizicija/register.js", {
        params: {
          username: this.user
        }
      }).then(response => {
        this.users = response.data.user[0];
      });
  }
}
</script>



<style scoped >
.info h1{
  display: inline;
  color: rgba(255,255,255,.6);
  font: 400 4em/0.5 "Neuton";
}
.info{
margin-top:200px;
text-align: left;
margin-left:500px;


}
.userInfo{
  background-image: url("../assets/userInfoBack.png");
  background-repeat: no-repeat;
  min-height: 974px;
  background-size: cover;
  background-position: center;
}
.Naslov{
  color: rgba(255,255,255,.6);
  font: 400 1em/1.5 "Neuton";
}


img{
  width: 100px;
  margin-right: 50px;
}
</style>
