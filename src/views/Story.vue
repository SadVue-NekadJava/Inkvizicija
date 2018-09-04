<template>
  <div class="story">


<div class="wrap">
<h2 class="animatedText" id="h2"></h2>

<h6 >Lorem ipsum dolor sit amet,
  consectetur adipiscing elit.
   Sed eleifend urna quis justo condimentum,
    vel rutrum erat scelerisque. Etiam suscipit
     dui et tellus laoreet ultricies. Fusce porttitor
      augue a nisi semper, ac vestibulum neque faucibus.
       Fusce cursus et justo in interdum. In eget ultrices est. Nunc imperdiet.
     </h6>


<button type="button" name="button">Prvi</button>
<button type="button" name="button">Drugi</button><br>
<button type="button" name="button">Treci</button>
<button type="button" name="button">Cetvrti</button>
<div id="div"></div>
<div id="h"></div>
  </div>

  <div class="user">
  <h3>Korisnik: </h3>
  <h3><span class="ime">{{name}}</span></h3>
  </div>


  </div>
</template>

<script>



export default {
  name: 'story',
  data(){
    return{
      name:this.$store.state.user
    }
  },
  components: {

  },
  methods:{
    animacija(){
     var h6 = document.querySelector("h6");
     var html = h6.innerHTML
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
this.$store.state.showTransition=true;


  }
}


</script>

<style scoped >
.story{
animation-name: coming;
  animation-duration: 2s;
  animation-delay: 1s;
}


@keyframes coming {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 0.6;
  }
}















button{

  padding:20px 60px;
  margin:40px 60px;
}





.user{
  color:white;
  position:absolute;
  bottom: 100px;
  left: 100px;
  opacity: 0.5;
}
.ime{
  color: orange;
  font-size:26px;
}
body{
  background:#e74c3c;
  color:white;
}
.wrap{

}
h6{
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
