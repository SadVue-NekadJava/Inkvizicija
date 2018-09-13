<template>
  <div class="brisanje">

    <h1 class="gameMode">Brisanje Pitanja</h1><br>
<label @click="nazad" class="gameMode nazad"><p>Nazad</p> </label><br>
    <input type="text" class="unosi" placeholder="pretrazi pitanja" id="input" v-model="search">
    <div class="svaPitanja">


<table>

  <tr class="pitanje" v-for="pitanje in filtriranaPitanja" v-on:click="izbrisi(pitanje.qst_id)">
  <td>  {{pitanje.question}}  </td><td><img src="../assets/minus.png" alt=""></td>
  </tr>
</table>

    </div>


  </div>
</template>

<script>

export default {
  data(){
    return{
      pitanja:[],
      search:''
      }
  },
  methods:{
      izbrisi(selectedId){
        if (confirm("Da li zelite da obrisete pitanje?")) {

        axios.delete('http://739k121.mars-e1.mars-hosting.com/inkvizicija/unosPitanja.js',{
          params:{id:selectedId}
        }).then(response => {
          location.reload();
        });
      }},
      nazad(){
        location.reload();
      }



  },
  computed:{
    filtriranaPitanja(){
      console.log(this.pitanja);

    return this.pitanja.filter((pitanje)=>{

      return pitanje.question.toLowerCase().match(this.search);
    });
  }



  },
  mounted(){
    axios.get('http://739k121.mars-e1.mars-hosting.com/inkvizicija/unosPitanja.js').then(
      response => {
      //  var str = 'Koji';
      // this.pitanja = response.data;
      this.pitanja = [];
      for(var i = 0;i<response.data.data.length;i++){
        this.pitanja.push(response.data.data[i]);
      }console.log(this.pitanja);
    });
  }
  }

</script>

<style scoped>


.nazad:hover {
  color: white;
   transform: scale(1.3);
  }

table{
  max-width: 700px;
  margin-top:70px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.unosi{
    width: 400px;
    background: #523b30;
     margin: 26px;
    opacity: 0.7;
    padding: 10px 50px;
    font-size: 20px;
    color: white;

    }

td{
  color:rgba(255,255,255,.7);
  text-align: left;
  font-size: 30px;
  padding-bottom: 9px;
  border-bottom: 1px solid gray;
  cursor: pointer;
}
img{
  height: 30px;
text-align: right;

}
td:hover{
  color:white;
}


</style>
``
