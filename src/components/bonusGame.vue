<template>
<div class="hello">
  <audio controls autoplay loop hidden>
    <source src="../assets/bonusGameMusic.mp3" type="audio/mp3">
    </audio>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr1" />
    <span></span>
    <label for="nr1"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr2" />
    <span></span>
    <label for="nr2"><span><em></em></span></label>
  </div>
  <div class="score special">
    <input @click="igricaPoenVeliki" type="checkbox" id="nr3" />
    <span></span>
    <label for="nr3"><span><em></em></span></label>
  </div>
  <div class="score special">
    <input @click="igricaPoenVeliki" type="checkbox" id="nr4" />
    <span></span>
    <label for="nr4"><span><em></em></span></label>
  </div>
  <div class="score special">
    <input @click="igricaPoenVeliki" type="checkbox" id="nr5" />
    <span></span>
    <label for="nr5"><span><em></em></span></label>
  </div>
  <div class="score special">
    <input @click="igricaPoenVeliki" type="checkbox" id="nr6" />
    <span></span>
    <label for="nr6"><span><em></em></span></label>
  </div>
  <div class="score special">
    <input @click="igricaPoenVeliki" type="checkbox" id="nr7" />
    <span></span>
    <label for="nr7"><span><em></em></span></label>
  </div>
  <div class="score special">
    <input @click="igricaPoenVeliki" type="checkbox" id="nr8" />
    <span></span>
    <label for="nr8"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr9" />
    <span></span>
    <label for="nr9"><span><em></em></span></label>
  </div>
  <div class="score special">
    <input @click="igricaPoen" type="checkbox" id="nr10" />
    <span></span>
    <label for="nr10"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr11" />
    <span></span>
    <label for="nr11"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr12" />
    <span></span>
    <label for="nr12"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr13" />
    <span></span>
    <label for="nr13"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr14" />
    <span></span>
    <label for="nr14"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr15" />
    <span></span>
    <label for="nr15"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr16" />
    <span></span>
    <label for="nr16"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr17" />
    <span></span>
    <label for="nr17"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr18" />
    <span></span>
    <label for="nr18"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr19" />
    <span></span>
    <label for="nr19"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr20" />
    <span></span>
    <label for="nr20"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr21" />
    <span></span>
    <label for="nr21"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr22" />
    <span></span>
    <label for="nr22"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr23" />
    <span></span>
    <label for="nr23"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr24" />
    <span></span>
    <label for="nr24"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr25" />
    <span></span>
    <label for="nr25"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr26" />
    <span></span>
    <label for="nr26"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr27" />
    <span></span>
    <label for="nr27"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr28" />
    <span></span>
    <label for="nr28"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr29" />
    <span></span>
    <label for="nr29"><span><em></em></span></label>
  </div>
  <div class="score">
    <input @click="igricaPoen" type="checkbox" id="nr30" />
    <span></span>
    <label for="nr30"><span><em></em></span></label>
  </div>

  <div class="cover"></div>
</div>
</template>

<script>
export default {





  data(){
    return{
        score:0,
        hitSound: new Audio(require('../assets/bonusGameHit1.mp3'))

    }
  },
  methods:{
      igricaPoen(){
          this.score++;
          console.log(this.score);
          this.hitSound.play();

      },
      igricaPoenVeliki(){
        this.score+=5;
          console.log(this.score);
            this.hitSound.play();
      }



  },
  mounted(){

  },
  computed:{


            }
}
</script>

<style scoped lang="scss">
.hello {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    background:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    -webkit-box-shadow: inset 1px 13px 299px 104px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 1px 13px 299px 104px rgba(0,0,0,0.75);
    box-shadow: inset 1px 13px 299px 104px rgba(0,0,0,0.75);
    animation-name: bonusIgrica;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    counter-reset: number;
    font-family: sans-serif;
    cursor: crosshair;
}

@keyframes bonusIgrica{

  from{
    opacity: 0;
  }to{
    opacity: 1;
  }
}


input[type=checkbox]:checked + span {
    counter-increment: number 1;
    position: absolute;
    right: 5%;
    top: 5%;
    left: 5%;
    bottom: 5%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30vw;
    font-weight: bold;
    margin: auto;
    z-index: 1000000;
    transform-origin: 100% 0;
    background: #b3a8a8;
    border-radius: 50px;
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Chrome/Safari/Opera */
    -khtml-user-select: none;
    /* Konqueror */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
}

.special input:checked + span {
    counter-increment: number 5;
}

input+span {
    animation: result 28s;
}

input {
    position: absolute;
    z-index: -10;
    opacity: 0;
}

input:checked + span:before {
    content: counter(number);
    color:black;
}

.cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 7;
}

input:checked + span + label {
    z-index: 5;
}

label span {
    transform: translateY(0);
    transition: all 2s ease;
}

input:checked + span + label > span {
    transform: translateY(1500px);
}

.score label {
    position: absolute;
    left: -150px;
    right: 0;
    height: 0;
    border-radius: 100%;
    z-index: 10;
    transform: translateZ(0);

    span {
        height: 0;
        display: block;
    }

    em {
        display: block;
        cursor: crosshair;
        transition: all 0.6s;
        background: no-repeat center url("https://www.freeiconspng.com/uploads/space-planet-earth-png-19.png");
        background-size: cover;
        &:after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }
    }
}

.score.special em {
    background-image: url("http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Globe-Burning-PNG-Transparent-Image.png");
}

@keyframes result {
    0% {
        transform: scale(0.1);
    }
    90% {
        transform: scale(0.1);
    }
    100% {
        transform: scale(1);
    }
}

@for $i from 1 through 30 {
    .score:nth-child(#{$i}) label {
        top: percentage(random(60)/100);
        animation: fly random(8)+4s random(150)/10+s linear;
        em {
            width: random(100) + 50 +px;
            animation: float random(20)/10+1.5+s infinite cubic-bezier(.58,.14,.46,.92);
        }
    }
}

@keyframes fly {
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(100%);
    }
}

@keyframes float {
    0% {
        transform: translateY(40%);
    }
    50% {
        transform: translateY(-40%);
    }
    100% {
        transform: translateY(40%);
    }
}
</style>
