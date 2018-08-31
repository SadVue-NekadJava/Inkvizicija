<template>
  <div class="hello">

  <form class="">
    <label>Korisnicko ime</label><br>
    <input class="unosi" type="text" name="" value=""><br>
    <label>Lozinka</label><br>
    <input class="unosi" type="text" name="" value=""><br>

    <input class="unosi zadnji" type="text" name="" value=""><br>
      <label>Potvrdi lozinku</label><br>
    <div class="wrap">
    <button class="clicker right">Registruj se</button>
    <div class="circle angled right"></div>
</div>




  </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.unosi{
margin: 26px;
padding: 10px 50px;
font-size: 20px;
}
label{

   font: 400 1em/1.5 "Neuton";
  letter-spacing: 0;
  padding: .25em 0 .325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255,255,255,.5);
  text-transform: uppercase;
  letter-spacing: .5em;
  display: inline-block;
  border: 4px double rgba(255,255,255,.25);
  border-width: 4px 0;
  padding: 1.5em 0em;
  //position: absolute;
  top: 18%;
  left: 50%;
  width: 40em;
  margin: 0 auto;
  color: rgba(255,255,255,.25);
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

.clicker{
   font: 400 1em/1.5 "Neuton";
  color: rgba(255,255,255,.25);
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255,255,255,.5);
  text-transform: uppercase;
  letter-spacing: .5em;
  display: inline-block;



  letter-spacing: 0;
  padding: .25em 0 .325em;
  background-color:  #090d00;
  outline: none;
  font-size: 16px;

	  position:absolute;
  cursor: pointer;
  padding: 0;
	  border: none;
	  height: 103px;
	  width: 103px;
  left: 8px;
  top: 8px;
	  border-radius: 100px;
	  z-index: 2;
}

.clicker:active{
	  transform: translate(0, 1px);
  height: 100px;
	  box-shadow: 0px 1px 0 0 rgb(190,190,190) inset;
}

.circle{
	  position: relative;
  border-radius:65px;
	  width: 120px;
	  height: 120px;
	  z-index: 1;
}

.circle.third{
  border-radius: 0;
}

.clicker:hover{
  color: white;
}

.clicker:hover + .circle, .clicker:active + .circle {
	  animation: rotator linear .8s infinite;

}

@keyframes rotator{
	  from{ transform: rotate(0deg); }
	  to{ transform: rotate(360deg); }
}


.angled {
			background-image: linear-gradient(45deg,
                white 0%,
                white 30%,
                #ff7100  30%,
								#ff5200   70%,
                white 70%,
                white 100%);
		}

.angled.second{
  			background-image: linear-gradient(
                white 0%,
                white 30%,
                rgb(250,160,120) 30%,
								rgb(250,160,120) 70%,
                white 70%,
                white 100%);
}

.angled.third{
			background-image: linear-gradient(45deg,
                white 0%,
                white 30%,
                rgb(130,230,135) 30%,
								rgb(130,230,135) 70%,
                white 70%,
                white 100%);
}

.zadnji{
margin-top: 0;

}


</style>
``
