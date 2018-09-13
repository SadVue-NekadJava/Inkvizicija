<template>
<div class="userInfo">

<h1 class="gameMode Naslov">Statistika</h1><br>
<router-link to="/mainPage" class="gameMode nazad">Nazad</router-link>



<table>
<tr>
<th><img src="http://www.sperling.it/risorse/GiordanoBruno/img/bruno1.png">
</th>
  <th><img src="../assets/points.png">
  </th>
  <th> <img src="../assets/coins.png">
  </th>
</tr>
  <tr>
    <td><h1 class="usr">{{users.usr_name}}</h1>
    </td>
    <td><h1 class="usr">{{users.usr_points}}</h1>
    </td>
    <td><h1 class="usr">{{users.usr_gold}}</h1>
    </td>
  </tr>
</table>

<br>
<br>







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

.usr{

  text-align: left;
}



table{
  margin: auto;
  margin-top: 200px;
}
td{
    padding-left: 38px;
    color: white;
}
th{
  padding-left: 19px;
  padding-right: 22px;
  padding-bottom: 29px;

}

.nazad:hover{
  color: white;
  transition: all 0.2s ease-in-out;
  transform: scale(1.3);
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
