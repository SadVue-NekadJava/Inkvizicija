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



export default {
  name: 'story',
  components: {

  },
  methods:{
    animacija(){
     var p = document.querySelector("p");
     var html = p.innerHTML
       .split("")
       .map(function(val) {
         return "<span class='letter'>" + val + "</span>";
       })
       .join("");

     document.getElementById("h2").innerHTML = html;

     var letter = document.getElementsByClassName("letter");

     for (var i = 0; i < letter.length; i++) {
       letter[i].style.transition = "opacity 800ms " + i * 10 + "ms";
     }
     function withOpacity() {
       for (var i = 0; i < letter.length; i++) {
         letter[i].style.opacity = 1;
       }
     }

     function noOpacity() {
       for (var i = 0; i < letter.length; i++) {
         letter[i].style.opacity = 0;
       }
     }

     window.setTimeout(function() {
       withOpacity();
     }, 500);

   noOpacity();
 }
  },
  mounted(){
this.animacija();


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

.story{
width: 100vw;
height: 100vh;
background-image: url('../assets/questionsBackground.jpg');
background-repeat: no-repeat;
background-size: cover;

}
</style>
