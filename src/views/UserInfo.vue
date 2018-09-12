<template>
<div class="userInfo">

<h1 class="gameMode">Statistika</h1>


<table>
  <tr>
<th></th>
<th></th>
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

</style>
