<template>
  <div class="story">


<div class="wrap">
<h2 class="animatedText" id="h2"></h2>
<div>
  <h6>{{check}}</h6>
</div>



<button @click="pitanje" type="button" name="button">{{answers[0].ans_text}}</button>
<button @click="pitanje" type="button" name="button">{{answers[1].ans_text}}</button><br>
<button @click="pitanje" type="button" name="button">{{answers[2].ans_text}}</button>
<button @click="pitanje" type="button" name="button">{{answers[3].ans_text}}</button>
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
      name:this.$store.state.user,
      level:this.$store.state.questionLevel,
      questions:[],
      number:this.$store.state.qstNum,
      answers:['A','B','C','D'],
      array:['A','B','C','D']
    }
  },
  components: {

  },
  computed:{
    check(){
      return  this.questions;
    },
    ans(){
      return this.shuffle(this.array);
    }
  },
  methods:{
     shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...

      for (var i =0; i < currentIndex; i++) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      console.log(array);
    //  return array;
    },
    pitanje(){
      this.$store.state.qstNum+=1;
      this.number = this.$store.state.qstNum;
      console.log(this.$store.state.qstNum);
      setTimeout(this.animacija,1000);
      axios.get("http://739k121.mars-e1.mars-hosting.com/inkvizicija/inkvizicija.js",
                      {params:{ level: this.level }}
                      ).then(response => {
                          this.questions = response.data[this.$store.state.qstNum].question;
                       });
                       axios.get("http://739k121.mars-e1.mars-hosting.com/inkvizicija/odgovori.js",
                                       {params:{ number: this.number+1 }}
                                       ).then(response => {
                                        this.answers = response.data;
                                      //  this.answers = this.shuffle(this.answers);
                                        });

    },
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
    setTimeout(this.animacija,3000);
      //  this.animacija();
        this.$store.state.showTransition=true;



  },
   created(){
     //get question
     axios.get("http://739k121.mars-e1.mars-hosting.com/inkvizicija/inkvizicija.js",
                     {params:{ level: this.level }}
                     ).then(response => {
                      console.log(this.$store.state.qstNum);
                         this.questions = response.data[this.$store.state.qstNum].question;
                         //console.log(this.questions);
                      });
      //get answers
      axios.get("http://739k121.mars-e1.mars-hosting.com/inkvizicija/odgovori.js",
                      {params:{ number: this.number+1 }}
                      ).then(response => {
                      this.answers = response.data;
                    //  this.shuffle(this.answers);
                      console.log(this.answers);
                       });

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
