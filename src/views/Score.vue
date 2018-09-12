<template>
<div class="hiscore">

<h1 class="gameMode">Najbolji igraci</h1>


<table class="tabela">
  <th class="gameMode">Ime</th>
  <th class="gameMode">Poeni</th>
  <th class="gameMode">Zlato</th>
  <tr v-for="user in users">
    <td class="gameMode">{{user.usr_name}}</td>
    <td class="gameMode">{{user.usr_points}}</td>
    <td class="gameMode">{{user.usr_gold}}</td>
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
      axios.get("http://739k121.mars-e1.mars-hosting.com/inkvizicija/scores.js", {

      }).then(response => {
        console.log(response.data.data.slice(0,10));
        this.users = response.data.data.slice(0,10);
        console.log(this.users[0].usr_name);

      });
  }
}
</script>



<style scoped >
.tabela{
margin-left: auto;
margin-right: auto;
padding-top: 100px;

}
th,tr,td{
  border: 0;
  font-size: 20px;
}



th{
  color: white;
}
.hiscore{
  background-image: url("../assets/scoreBackground.jpg");
  background-repeat: no-repeat;
  min-height: 974px;
  background-size: cover;
  background-position: center;
}

</style>
