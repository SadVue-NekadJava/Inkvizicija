<template>
<div class="hiscore">

<h1 class="gameMode">Najbolji igraci</h1><br>





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

<router-link to="/mainPage" class="gameMode nazad">Nazad</router-link>


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
        // console.log(response.data.data.slice(0,10));
        this.users = response.data.data.slice(0,10);
        // console.log(this.users[0].usr_name);

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
margin-top: -100px;
margin-left: auto;
margin-right: auto;
padding-top: 200px;
padding-left: 65px;
background-image: url("../assets/hiscore1.png");
background-repeat: no-repeat;
background-size: cover;
padding-bottom: 150px;
opacity: 0;
animation-name: tabel;
animation-duration: 2s;
animation-delay: 1s;
animation-fill-mode: forwards;


}


@keyframes tabel {

  from{
    opacity: 0;

  }
  to {
    opacity: 1;
  }
}




th,tr,td{
  border: 0;
  font-size: 25px;
  color: black;
 font-family: 'Caveat', cursive;
 font-weight: 700;
 text-transform: none;
text-shadow: 0px 0px 10px white;

}

td{
  padding-bottom: 10px;
}

th{
  color: white;

}
.hiscore{
  background-image: url("../assets/scoreBackground.jpg");
  background-repeat: no-repeat;
  min-height: 974px;
  opacity: 0;
  background-size: cover;
  background-position: center;
  animation-name: pauza;
  animation-duration: 0.2s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
}
@keyframes pauza {
  from{
    opacity: 0;
  }to{
    opacity: 1;
  }
}

</style>
