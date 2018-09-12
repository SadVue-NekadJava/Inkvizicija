<template>
<div class="userInfo">

<h1 class="gameMode">Statistika</h1>


<table>
  <tr>
<th><img src="../assets/points.png">{{users.usr_points}}</th>
<th> <img src="../assets/coins.png">{{users.usr_gold}}</th>
  </tr>
  <tr v-for="">
    <td></td>
  </tr>
</table>




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

.userInfo{
  background-image: url("../assets/userInfoBack.png");
  background-repeat: no-repeat;
  min-height: 974px;
  background-size: cover;
  background-position: center;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;

}

th, td {
    text-align: left;
    padding: 8px;
}

img{
  width: 100px;
}
</style>
