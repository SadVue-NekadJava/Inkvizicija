<template>
<div class="story" @click.once="ugasi">
  <div  class="main" >
    <audio id="mySound" controls autoplay loop hidden>
      <source src="../assets/story2Music.mp3" type="audio/mp3">
      </audio>




      <div class="score"  >
        <p><img src="../assets/points.png">   {{poeni}} </p>
         <hr>
        <p> <img src="../assets/coins.png">
           {{zlato}}</p>
         <hr>
         <p><img v-if="this.netacniOdgovori<=2" src="../assets/heart.png"><img  v-if="this.netacniOdgovori<=1" src="../assets/heart.png"><img  v-if="this.netacniOdgovori<=0" src="../assets/heart.png">  </p>
         <hr>
        <p v-if="gotovoVreme"><img src="../assets/clock.png">  {{vreme}}</p>

      </div>




<div class="krajIgre" v-if="gameover">
  <audio  controls autoplay  hidden>
    <source src="../assets/krajIgre.mp3" type="audio/mp3">
    </audio>
<h1>Kraj Igre</h1>

</div>




    <div id="wrap2" v-if="!perfect||stageOver " >
      <h2 class="animatedText" id="h2"></h2>
      <div class="preText">
        <h6>{{check}}</h6>
      </div>


      <button @click="pitanje" id="0" type="button" name="button" :value="answers[0]">{{answers[0]}}</button>
      <button @click="pitanje" id="1" type="button" name="button" :value="answers[1]">{{answers[1]}}</button><br>
      <button @click="pitanje" id="2" type="button" name="button" :value="answers[2]">{{answers[2]}}</button>
      <button @click="pitanje" id="3" type="button" name="button" :value="answers[3]">{{answers[3]}}</button>

      <h1 class="popup tacno"v-if="ans">TACNO !!!</h1>
      <h1 class="popup greska" v-if="ansFalse">GRESKA !!!</h1>
      <div id="div"></div>
      <div id="h"></div>

    </div>
<button  id="krajFaze"  v-if="stageOver" @click="story2">Sledeca Faza </button>

  </div>
  <div class="intro" id="ugasi">
    <h3>Djordano Bruno</h3>
    <p>Delo De revolutionibus orbium coelestium (O gibanju nebeskih tela) u kome Kopernik iznosi heliocentričnu sliku sveta,
      a koja tada još nije bila zabranjena, unosi nemir u njegov mladi duh.
    </p>
    <p>
      Kao istinski filozof sledi vlastiti put u traganju za istinom,
      i više se ne uklapa u zadate okvire.
    </p>
    <p>
      Sa dvadeset i sedam godina, 1575. godine, optužen je za jeres (u 130 tačaka), napušta red i beži.
      Tako počinje njegov život putnika.
    </p>
  </div>

  <bonus-game v-if="perfect"></bonus-game>
</div>
</template>

<script>


import BonusGame from '../components/bonusGame.vue'

export default {
  name: 'story',
  data() {
    return {
      name: window.localStorage.getItem('username'),
      level:1,
      questions: [],
      number: 0,
      answers: ['A', 'B', 'C', 'D'],
      size: 0,
      ansFalse: false,
      nextStage2: false,
      timer: 45,
      singleQuestion: '',
      tacno: new Audio(require('../assets/bell.mp3')),
      greska: new Audio(require('../assets/dungeonDoor.mp3')),
      odbrojavanje2: new Audio(require('../assets/countDown.wav')),
      tacniOdgovori: 0,
      netacniOdgovori: this.$store.state.lives,
      poen: window.localStorage.getItem('poeni'),
      zlatnik: window.localStorage.getItem('zlato'),
      processing: false,
      gameover:false,
      igrica:false,
      stagePerfect:false,
      sat:true

    }
  },
  components: {
'bonus-game':BonusGame
  },
  computed: {
    check() {
      return this.singleQuestion;
    },
    ans() {
      return this.$store.state.correct;
    },
    stageOver() {
      return this.nextStage2;
    },
    vreme() {
      return this.timer;
    },
    poeni(){
      return this.poen;
    },
    zlato(){
      return this.zlatnik;
    },
    perfect(){
      return this.stagePerfect;
    },
    gotovoVreme(){
      return this.sat;
    }
  },
  methods: {
    stopMusic(){
        document.getElementById("mySound").volume=0.2;},
    story2(){
      this.poen = Number(window.localStorage.getItem('poeni'));
      this.poen+=this.$store.state.bonusPoints*10;
      window.localStorage.setItem('poeni', this.poen);
      this.$router.push('/story2');
      this.$store.state.questionLevel=2;
    },
    upaliIgricu(){
      this.igrica=true;

    },

    smanjiVreme() {
      this.timer--;
    },

    upali() {
      var nesto = document.getElementById('wrap2');
      nesto.style.visibility = "hidden";

    },

    ugasi() {
      setTimeout(()=>{this.odbrojavanje2.play()},(this.timer-10.3)*1000);
      var nesto = document.getElementById('ugasi');
      nesto.style.visibility = "hidden";
      var nesto2 = document.getElementById('wrap2');
      nesto2.style.visibility = "visible";

      for (var i = 1; i <= this.timer; i++) {
        setTimeout(this.smanjiVreme, 1000 * i);

      }
      setTimeout(this.stageEnd, this.timer * 1000);
    },
    stageEnd() {
      var sve = document.getElementById('wrap2');
      sve.style.visibility = 'hidden';
      var btns = document.getElementsByName('button');
      for (var i = 0; i < 4; i++) {
        btns[i].style.display = 'none';
        //console.log(this.netacniOdgovori);
        }
        if(this.stagePerfect == true || this.nextStage2 == true){
          return;
        }

        if(this.stagePerfect == false && this.nextStage2 == false){
          if(this.netacniOdgovori<3 && this.timer>0){
            this.sat=false;
            if(this.netacniOdgovori<1){
            console.log('perfektna faza');
            this.stagePerfect=true;
            this.odbrojavanje2.pause();
            setTimeout(()=>this.stagePerfect=false,30000);
            setTimeout(()=>this.nextStage2=true,30000);
            setTimeout(()=>{
              var sve = document.getElementById('wrap2');
              sve.style.visibility = 'hidden';
              var btns = document.getElementsByName('button');
              for (var i = 0; i < 4; i++) {
                btns[i].style.display = 'none';
                //console.log(this.netacniOdgovori);
                }
            },30000);
            }else{
            console.log('zavrsena faza');
        this.nextStage2 = true;
        this.odbrojavanje2.pause();
            }
          console.log('');

          this.timer = 0;
          } else {
          console.log('isteklo vreme');
          this.gameover=true;
          this.odbrojavanje2.pause();
          this.sat=false;
          this.timer = 0;
            this.stopMusic();
          this.$store.state.qstNum=0;
          setTimeout(()=>{location.reload();},3000);
          }
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
      this.processing=false;
    },
    getAnswers() {
      console.log(this.singleQuestion);
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
      if(this.processing===false){
        this.processing=true;
      const buttonId = e.target.id;
      const buttonValue = e.target.value;
      this.hideButtons(buttonId)
      this.$store.state.qstNum += 1;

      if (buttonValue == this.ansTrue) {
        this.poen = Number(window.localStorage.getItem('poeni'));
        this.poen+=20;
        window.localStorage.setItem('poeni', this.poen);
        this.zlatnik = Number(window.localStorage.getItem('zlato'));
        this.zlatnik+=1;
        window.localStorage.setItem('zlato', this.zlatnik);
        this.$store.state.correct = true;
        setTimeout(this.trueAnswer, 1000);
        this.tacno.play();
        this.tacniOdgovori += 1;

      } else {
        this.ansFalse = true;
        setTimeout(this.falseAnswer, 1000);
        this.greska.play();
        this.netacniOdgovori += 1;
        if(this.netacniOdgovori>=3){
        console.log('GAME OVER');
        this.gameover = true;
        this.odbrojavanje2.pause();
        this.sat=false;
        setTimeout(this.stageEnd, 1000);
      }
      }

      if (this.$store.state.qstNum >= 5 && this.netacniOdgovori<3) {
        //setTimeout(this.showButtons, 1500);
        setTimeout(this.stageEnd, 1000);
      } else {
        setTimeout(this.showButtons, 1000);
        setTimeout(this.animacija, 1000);
        this.singleQuestion = this.questions[this.$store.state.qstNum];
        setTimeout(this.getAnswers, 1000);
      }
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
    //provera da li je korisnik pritisnuo back ili refresh
    var strana =  Number(window.localStorage.getItem("story2"));
    window.localStorage.setItem("story2", (strana+1));
    console.log('story2'+window.localStorage.getItem("story2"));
    console.log('story'+window.localStorage.getItem("story"));
    if(window.localStorage.getItem("story2")>1 || window.localStorage.getItem("story")!=2){
      this.$router.push('/mainPage');
    }

    //upisivanje poena i zlata u bazu
    axios.put('http://739k121.mars-e1.mars-hosting.com/inkvizicija/odgovori.js',{
        poeni: window.localStorage.getItem('poeni'),
        zlato: window.localStorage.getItem('zlato'),
        user: window.localStorage.getItem('username')
    });
    setTimeout(this.animacija, 3000);
    //setTimeout(this.getAnswers,1500);
    //  this.animacija();
    this.$store.state.showTransition = true;
    this.upali();
    if (window.localStorage.getItem("sessionid") == null)
      this.$router.push('/');
  },
  created() {
    // get question
    axios.get("http://739k121.mars-e1.mars-hosting.com/inkvizicija/inkvizicija.js", {
      params: {
        level: 2
      }
    }).then(response => {
      //console.log(response);
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
      //console.log(this.singleQuestion);
      //console.log(this.$store.state.qstNum);
    });

    setTimeout(this.getAnswers, 1500);

  }
}
</script>

<style scoped >
.score{
  position: absolute;
  top:2%;
  right:2%;
  height:200px;
  width:200px;
  background:transparent;
  border-radius:30px;
  padding:20px 10px;
}

.score p{
  font-size:20px;
  color:black;
  padding-bottom: 5px;

}

img{
  width:30px;
  margin-bottom: -9px;
}



@media screen and (max-width: 1000px){
.score{
    top: 1%;
    left:0%;
    width: 80px;

  }
  .score p{

    font-size: 10px;
  }
  img{width: 15px;}

  }
  hr{
    display: none;
  }












.krajIgre{
  font-family: 'Cinzel', serif;
  letter-spacing: 3px;
  text-shadow: 2px 2px 20px red, 0 0 1em blue, 0 0 0.2em blue;
  position: absolute;
    font-size: 100px;
    opacity: 0;
  top: 37%;
  left: 50%;
  width: 400px;
  height: 200px;
  margin-left: -200px;
  margin-top: -200px;
  animation-name: krajIgreAnim;
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;



}

@keyframes krajIgreAnim{

  from{
    transform: scale(0);
  }
  to{
  transform: scale(1);
  opacity: 1;
  }
}




.krajIgre h1{
  font-family: 'Acme', sans-serif;
  color:transparent;
   -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: orange;
   line-height: 1.1;


}


#krajFaze{
   /* margin: 100px auto; */
  animation-name: dugme1;
}


@keyframes pulse {
  0% {
    transform: scale(1);

  }

  50% {
    transform: scale(1.14);

  }

  100% {
    transform: scale(1);

  }
}

.story {
  background-image: url('../assets/story2.jpg');
  opacity: 0;
  background-repeat: no-repeat;
  min-height: 974px;
  background-size: cover;
  background-position: center;
  animation-name: ulaz;
  animation-duration:1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;

}
@keyframes ulaz{

from{
opacity: 0;
}
to{
  opacity: 1;
}
}



.intro h3 {
  font: 400 1.5em/1.5 "Neuton";
  letter-spacing: 0;
  text-decoration: none;
  padding: 1.35em 0 .325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255, 255, 255, .5);
  text-transform: uppercase;
  letter-spacing: .5em;
  display: inline-block;
  color: white;

}

.intro p {
  font: 400 1em/1.5 "Neuton";
  letter-spacing: 0;
  text-decoration: none;
  padding: 1.35em 0 .325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255, 255, 255, .5);
  text-transform: uppercase;
  letter-spacing: .5em;
  display: inline-block;
  color: white;

}

.intro {
  -webkit-box-shadow: 20px 6px 300px 200px rgba(0, 0, 0, 1);
  -moz-box-shadow: 20px 6px 300px 200px rgba(0, 0, 0, 1);
  box-shadow: 20px 6px 300px 200px rgba(0, 0, 0, 1);
  border-radius: 15px;
  font-family: 'Cinzel', serif;
  letter-spacing: 3px;
  text-shadow: 2px 2px 20px red, 0 0 1em blue, 0 0 0.2em blue;
  position: absolute;
  background: black;
  opacity: 0.6;
  top: 40%;
  left: 50%;
  width: 500px;
  height: 800px;
  margin-left: -250px;
  margin-top: -250px;

}




.popup {
  font-family: 'Cinzel', serif;
  letter-spacing: 3px;
  text-shadow: 2px 2px 20px red, 0 0 1em blue, 0 0 0.2em blue;
  position: absolute;
  top: 77%;
  left: 50%;
  width: 400px;
  height: 200px;
  margin-left: -200px;
  margin-top: -200px;
  animation-name: iz;
  animation-duration: 1s;
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
  border: 1px solid gray;
  padding: 0;
  cursor: pointer;
  outline: 0;
  -webkit-appearance: none;
  animation-name: dugme;
  animation-duration: 3s;
  animation-delay: 2s;
  margin: 40px 60px;
}

/* Custom */
button {
  display: inline-block;
  position: relative;
  top: 0;
  font-size: 25px;
  font-weight: 600;
  font-family: 'Cinzel', serif;
  letter-spacing: 3px;
  border-radius: 4px;
  border-bottom: 1px solid rgba(28, 227, 125, 0.5);
  background: rgba(156, 167, 186, 0.5);
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
  max-width: 85%;
}
</style>
