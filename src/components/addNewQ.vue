<template>
  <div class="hello">
<label @click="nazad" class="nazad">Nazad</label>
<label class="sacuvaj" @click="sacuvajQ">Sacuvaj pitanje</label>

  <form class="">
    <div class="pitanje">


    <label class="tekst">Pitanje</label><br>
    <textarea  class="unosi pitanje" type="text" name="" value=""></textarea><br>

  <label class="tekst">Tezina pitanja</label><br>
  <div class="radioDiv">


  <input type="radio" class="radio" name="gender" value="1"> <label class="radioB">1</label>
  <input type="radio" class="radio" name="gender" value="2"><label class="radioB">2</label>
  <input type="radio" class="radio" name="gender" value="3"> <label class="radioB">3</label>
  <input type="radio" class="radio" name="gender" value="4"><label class="radioB">4</label>
  <input type="radio" class="radio" name="gender" value="5"><label class="radioB">5</label>
  </div>
</div>
<div class="odgovori">
  <label class="tekst">Tacan Odgovor</label><br>
  <input  class="unosi" type="text" name="" value=""><br>
  <label class="tekst">Odgovor 2</label><br>
  <input  class="unosi zadnji" type="text" name="" value=""><br>
  <label class="tekst">Odgovor 3</label><br>
  <input  class="unosi zadnji" type="text" name="" value=""><br>
  <label class="tekst">Odgovor 4</label><br>
  <input  class="unosi zadnji" type="text" name="" value=""><br>
</div>

    <!-- <div class="wrap">
    <button v-on:click.prevent="register" class="clicker right">Dodaj pitanje</button>
    <div class="circle angled right"></div>
</div> -->
  </form>
  </div>
</template>

<script>
export default {
  data(){
    return{

      }
  },
  methods:{

      nazad(){
        location.reload();
      }
  },
  computed:{

    }
  }

</script>

<style scoped lang="scss">

.nazad{
  text-decoration: none;
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
  width: 350px;
  margin: 0 auto;
  color: rgba(255,255,255,.5);
  position: absolute;
     top: 200px;
     left: 200px;
}

.sacuvaj{
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
  width: 350px;
  margin: 0 auto;
  color: rgba(255,255,255,.5);
  position: absolute;
     top: 200px;
     right: 200px;
}



.nazad:hover { transform: scale(1.3); }
.sacuvaj:hover { transform: scale(1.3); }

.radioDiv{
  margin: 10px;
}

.radio{
  height: 25px;
  width: 25px;
}

.radioB{
  font-size: 25px;
  margin:10px;
  color: rgba(255,255,255,.5);
    padding: 10px;
}


h3{
  color:white;
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
.tekst{

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




.wrap{
  position: relative;
  width: 120px;
  height: 120px;
  margin: 20px auto 30px auto;
  &:last-child {
    margin-bottom: 0;

  }
}






.zadnji{
margin-top: 0;

}


</style>
``
