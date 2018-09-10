<template>
  <div class="brisanje">

    <h1>Brisanje Pitanja</h1>

    <input type="text" class="unosi" placeholder="pretrazi pitanja" id="input" v-model="search">
    <div class="svaPitanja">


<ul>
  <li class="pitanje" v-for="pitanje in filtriranaPitanja" v-on:click="izbrisi(pitanje.qst_id)">
    {{pitanje.question}} X
  </li>
</ul>

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
        axios.delete('http://739k121.mars-e1.mars-hosting.com/inkvizicija/unosPitanja.js',{
          params:{id:selectedId}
        }).then(response => {
          location.reload();
        });
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

.brisanje{

  font: 400 1em/1.5 "Neuton";
 letter-spacing: 0;
 // padding: .25em 0 .325em;
 display: block;
 margin: 0 auto;
 text-shadow: 0 0 80px rgba(255,255,255,.5);
 text-transform: uppercase;
 letter-spacing: .5em;
 display: inline-block;
 border: 4px double rgba(255,255,255,.5);
 border-width: 4px 0;
 padding: 1.5em 0em;
 //position: absolute;
 top: 18%;
 left: 50%;
 width: 350px;
 margin: 0 auto;
 color: rgba(255,255,255,.5);
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

.svaPitanja{
overflow: auto;
}
.pitanje{
  cursor: pointer;
}
.pitanje:hover{

 color: rgba(255,255,255,1);
}

</style>
``
