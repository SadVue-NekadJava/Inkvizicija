<template>
<div class="story"  @click="ugasi">
  <div class="main">
    <audio controls autoplay hidden>
      <source src="../assets/questions.mp3" type="audio/mp3">
      </audio>
    <h1 v-if="stageOver">Sledeca Faza</h1>
    <div class="wrap" id="wrap">
      <h2 class="animatedText" id="h2"></h2>
      <div class="preText">
        <h6>{{check}}</h6>
      </div>

      <!-- <button v-on:click="play" type="button">Click Me to Play Sound</button>
 <audio ref="audioElm" src="../assets/mainMenu.mp3"></audio> -->

      <button @click="pitanje" id="0" type="button" name="button" :value="answers[0]">{{answers[0]}}</button>
      <button @click="pitanje" id="1" type="button" name="button" :value="answers[1]">{{answers[1]}}</button><br>
      <button @click="pitanje" id="2" type="button" name="button" :value="answers[2]">{{answers[2]}}</button>
      <button @click="pitanje" id="3" type="button" name="button" :value="answers[3]">{{answers[3]}}</button>

      <h1 class="popup tacno"v-if="ans">TACNO !!!</h1>
      <h1 class="popup greska" v-if="ansFalse">GRESKA !!!</h1>
      <div id="div"></div>
      <div id="h"></div>

</div>
    <div class="user">
      <h3>Korisnik: </h3>
      <h3><span class="ime">{{name}}</span></h3>
    </div>

  </div>




  <div class="popup1" id="ugasi" >
    <h3>Djordano Bruno</h3>
    <p>Rodio se početkom 1548. godine u Noli blizu Napulja, u plemićkoj porodici.
       Na krštenju je dobio ime Filipo.
        Još kao dečak primljen je u školu dominikanskog samostana San Domeniko Mađore u Napulju.
      </p>
      <p>1565. godine, prima ruho dominikanskog iskušenika i uzima ime Đordano.
        Nakon zaređenja upućen je na teološki fakultet gde studira sholastičku, antičku i arapsku filozofiju.
      </p>
      <p>
        Posebno snažan uticaj na Bruna izvršilo je učenje Nikole Kuzanskog, a preko filozofa Frane Petrića, profesora na platonskoj akademiji u Ferari, upoznaje se s neoplatonizmom i pitagorejskim učenjem.
      </p>
  </div>











</div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import LoginVue from '../components/login.vue'
import RegisterVue from '../components/register.vue'


export default {
  name: 'story',
  data() {
    return {
      name:window.localStorage.getItem('username'),
      level: this.$store.state.questionLevel,
      questions: [],
      number: 0,
      answers: ['A', 'B', 'C', 'D'],
      size: 0,
      ansFalse: false,
      nextStage: false,
      singleQuestion: '',
      tacno: new Audio(require('../assets/bell.mp3')),
      greska: new Audio(require('../assets/dungeonDoor.mp3')),

    }
  },
  components: {

  },
  computed: {
    check() {
      return this.singleQuestion;
    },
    ans() {
      return this.$store.state.correct;
    },
    stageOver() {
      return this.nextStage;
    }
  },
  methods: {

    upali(){
      var nesto=document.getElementById('wrap');
  nesto.style.visibility="hidden";

    },

ugasi(){
console.log("fadsd");
  var nesto=document.getElementById('ugasi');
  nesto.style.visibility="hidden";
  var nesto2=document.getElementById('wrap');
nesto2.style.visibility="visible";



},
    stageEnd() {
      var sve = document.getElementById('wrap');
      sve.style.visibility = 'hidden';
      var btns = document.getElementsByName('button');
      for (var i = 0; i < 4; i++) {
        btns[i].style.visibility = 'hidden';
        this.nextStage = true;
      }
    },
    hideButtons(id) {
      var btns = document.getElementsByName('button');
      for (var i = 0; i < 4; i++) {
        if (id != i)
          btns[i].style.visibility = 'hidden';
      }
    },
    showButtons() {
      var btns = document.getElementsByName('button');
      for (var i = 0; i < 4; i++) {
        btns[i].style.visibility = 'visible';
      }
    },
    getAnswers() {
      //get answers
      axios.get("http://739k121.mars-e1.mars-hosting.com/inkvizicija/odgovori.js", {
        params: {
          question: this.singleQuestion
        }
      }).then(response => {
        for (var i = 0; i < 4; i++) {
          if (response.data[i].ans_true == 1)
            this.ansTrue = response.data[i].ans_text;
        }
        this.answers = [];
        for (var i = 0; i < 4; i++) {
          this.answers.push(response.data[i].ans_text);
        }
        this.shuffle(this.answers);
      });
    },
    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue, randomIndex;

      // While there remain elements to shuffle...

      for (var i = 0; i < currentIndex; i++) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      //console.log(array);
      //  return array;
    },
    trueAnswer() {
      this.$store.state.correct = false;
    },
    falseAnswer() {
      this.ansFalse = false;
    },
    pitanje(e) {
      const buttonId = e.target.id;
      const buttonValue = e.target.value;
      this.hideButtons(buttonId)
      this.$store.state.qstNum += 1;

      if (buttonValue == this.ansTrue) {
        this.$store.state.correct = true;
        setTimeout(this.trueAnswer, 1500);
        this.tacno.play();
      } else {
        this.ansFalse = true;
        setTimeout(this.falseAnswer, 1500);
        this.greska.play();
      }

      if (this.$store.state.qstNum >= 5) {
        setTimeout(this.showButtons, 1500);
        setTimeout(this.stageEnd, 1500);
      } else {
        setTimeout(this.showButtons, 1600);
        setTimeout(this.animacija, 1000);
        this.singleQuestion = this.questions[this.$store.state.qstNum];
        setTimeout(this.getAnswers, 1500);
      }
    },
    animacija() {
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
  mounted() {
    setTimeout(this.animacija, 3000);
    //setTimeout(this.getAnswers,1500);
    //  this.animacija();
    this.$store.state.showTransition = true;
    this.upali();
    if(window.localStorage.getItem("sessionid")==null)
    this.$router.push('/');
  },
  created() {
    // check username
    // if(this.$store.state.user=='')
    // this.$router.push('/');
    // get question
    axios.get("http://739k121.mars-e1.mars-hosting.com/inkvizicija/inkvizicija.js", {
      params: {
        level: this.level
      }
    }).then(response => {
      var temp = response.data;
      Object.size = function(obj) {
        var size = 0,
          key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size;
      };
      // Get the size of an object
      this.size = Object.size(temp);
      for (var i = 0; i < this.size; i++) {
        this.questions.push(response.data[i].question);
      }
      this.shuffle(this.questions);

      this.singleQuestion = this.questions[this.$store.state.qstNum];
    });

    setTimeout(this.getAnswers, 1500);

  }
}
</script>

<style scoped >
h1{color:white;}
.story {
  animation-name: coming;
  animation-duration: 3s;
  animation-delay: 1s;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/questionsBackground.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

@keyframes coming {
  from {
    transform: translateY(-200px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 0.8;
  }
}

.popup1 h3{
  font: 400 1.5em/1.5 "Neuton";
  letter-spacing: 0;
  text-decoration: none;

  padding: 1.35em 0 .325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255,255,255,.5);
  text-transform: uppercase;
  letter-spacing: .5em;
  display: inline-block;
  color:white;

}

.popup1 p{
  font: 400 1em/1.5 "Neuton";
  letter-spacing: 0;
  text-decoration: none;

  padding: 1.35em 0 .325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255,255,255,.5);
  text-transform: uppercase;
  letter-spacing: .5em;
  display: inline-block;
  color:white;

}
.popup1{
  -webkit-box-shadow: 20px 6px 300px 200px rgba(0,0,0,1);
-moz-box-shadow: 20px 6px 300px 200px rgba(0,0,0,1);
box-shadow: 20px 6px 300px 200px rgba(0,0,0,1);
  border-radius: 15px;
  font-family: 'Cinzel', serif;
  letter-spacing: 3px;
  text-shadow: 2px 2px 20px red, 0 0 1em blue, 0 0 0.2em blue;
  position:absolute;
  background: black;
  opacity: 0.6;
  top:40%;
  left:50%;
  width:500px;  /* adjust as per your needs */
  height:800px;   /* adjust as per your needs */
  margin-left:-250px;   /* negative half of width above */
  margin-top:-250px;
   /* animation-name: iz;
  animation-duration: 1.5s; */
}
@keyframes iz {
  from {
    opacity: 0;
  transform: scale(0);
  }
  to {
    opacity: 0.5;
  transform: scale(1);
  }
}























.popup {
  font-family: 'Cinzel', serif;
  letter-spacing: 3px;
  text-shadow: 2px 2px 20px red, 0 0 1em blue, 0 0 0.2em blue;
  position: absolute;
  top: 77%;
  left: 50%;
  width: 400px;
  /* adjust as per your needs */
  height: 200px;
  /* adjust as per your needs */
  margin-left: -200px;
  /* negative half of width above */
  margin-top: -200px;
  animation-name: iz;
  animation-duration: 1.5s;
}

@keyframes iz {
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(2);
  }
}

.tacno {
  color: #d49d1e;
}

.greska {
  color: red;
}

button {
  width: 300px;
  height: 100px;
  background: transparent;
  border: 1px solid white;
  padding: 0;
  cursor: pointer;
  outline: 0;
  -webkit-appearance: none;
  animation-name: dugme;
  animation-duration: 8s;
  animation-delay: 2s;
  margin: 40px 60px;
}

/* Custom */
button {
  display: inline-block;
  position: relative;
  top: 0;
  font-size: 25px;
  font-family: 'Cinzel', serif;
  letter-spacing: 3px;
  border-radius: 4px;
  border-bottom: 1px solid rgba(28, 227, 125, 0.5);
  background: transparent;
  color: white;
  box-shadow: 0px 0px 0px rgba(15, 165, 60, 0.1);
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

button:hover {
  top: -10px;
  box-shadow: 0px 10px 10px rgba(15, 165, 60, 0.2);

  -webkit-transform: rotateX(20deg);
  -moz-transform: rotateX(20deg);
  -ms-transform: rotateX(20deg);
  transform: rotateX(20deg);
}

button:active {
  top: 0px;
  box-shadow: 0px 0px 0px rgba(15, 165, 60, 0.0);
  background: rgba(20, 224, 133, 1);
}

@keyframes dugme {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.user {
  color: white;
  position: absolute;
  bottom: 100px;
  left: 100px;
  opacity: 0.5;
}

.ime {
  color: orange;
  font-size: 26px;
}

/* body{
  background:#e74c3c;
  color:white;
} */
/* .wrap{

} */
h6 {
  width: 30%;
  display: none;
}

/* .letter{
  opacity:0;
  font-size:1.3em;
} */

#div {
  width: 30%;
}


.animatedText {
  font-family: 'Cinzel', serif;
  letter-spacing: 4px;
  min-height: 170px;
  padding: 70px;
  font-size: 30px;
  color: white;
  margin-top: 0px;
}
</style>
