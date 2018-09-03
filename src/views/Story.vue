<template>
  <div class="story">


<div class="wrap">
<h2 class="animatedText" id="h2"></h2>

<p >Lorem ipsum dolor sit amet,
  consectetur adipiscing elit.
   Sed eleifend urna quis justo condimentum,
    vel rutrum erat scelerisque. Etiam suscipit
     dui et tellus laoreet ultricies. Fusce porttitor
      augue a nisi semper, ac vestibulum neque faucibus.
       Fusce cursus et justo in interdum. In eget ultrices est. Nunc imperdiet.
      </p>

<div id="div"></div>
<div id="h"></div>
  </div>




  </div>
</template>

<script>
// import animation from '../animation'
let models = require('../animation');


export default {
  name: 'story',
  components: {

  },

  mounted(){
noOpacity();


  }
}


</script>

<style scoped >

body{
  background:#e74c3c;
  color:white;
}
.wrap{

}
p{
  width:30%;
  display:none;
}

.letter{
  opacity:0;
  font-size:1.3em;
}

button{
  margin-top:20px;
}
#div{
  width:30%;
}

@keyframes bounce{
  0%, 100% {
        transform: translateX(-100px);
    opacity:1;
    /*ease-out cubic*/
   /* animation-timing-function:cubic-bezier(.215, .61, .355, 1); */
   animation-timing-function:ease-in;
  }

  50% {
    transform: translateX(100px);
    /*ease-in cubic*/
    opacity:0;
       /* animation-timing-function:cubic-bezier(.55, .055, .675, .19); */
   animation-timing-function:ease-out;
  }

}
.animatedText{
padding: 100px;
font-size: 30px;
  color: white;
}


</style>
