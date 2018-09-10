<template>
  <div class="home">


    <hello-world></hello-world>
    <login-vue></login-vue>

  </div>
</template>
s
<script>

import HelloWorld from '../components/HelloWorld.vue'
import LoginVue from '../components/login.vue'

export default {
  name: 'home',
  components: {
    'hello-world':HelloWorld,
    'login-vue':LoginVue
  }
}
</script>
<style >
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
  font-size: 20px;
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
	  animation: rotator linear 1.5s infinite;

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

</style>
