<template>
<div class="hiscore">

<h1 class="gameMode">Najbolji igraci</h1><br>

<router-link to="/mainPage" class="gameMode nazad">Nazad</router-link>



<table class="tabela">
  <th class="gameMode prvi">Ime</th>
  <th class="gameMode drugi">Poeni</th>
  <th class="gameMode gold">Zlato</th>
  <tr v-for="(user,index) in users">
    <td class="gameMode ime">{{index+1}}.{{user.usr_name}}</td>
    <td class="gameMode">{{user.usr_points}}</td>
    <td class="gameMode gold">{{user.usr_gold}}</td>
  </tr>
</table>




</div>




</template>

<script>




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
.ime{
  text-align: left;
  padding-left: 20px;
}

.prvi{

  padding-left: 30px;
}
.drugi{

text-align: left;
padding-left: 80px;
width: 200px;
}

.gold{
  width: 150px;
  padding-right: 80px;
}

.nazad:hover{
  color: white;
  transition: all 0.2s ease-in-out;
  transform: scale(1.3);
}


.tabela{
margin-left: auto;
margin-right: auto;
padding-top: 200px;
padding-left: 65px;
background-image: url("../assets/hiscore1.png");
background-repeat: no-repeat;
background-size: cover;



}
th,tr,td{
  border: 0;
  font-size: 25px;
  color: black;
 font-family: 'Caveat', cursive;
 font-weight: 700;
 text-transform: none;


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
