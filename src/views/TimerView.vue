<template>
    <div class="about">
      <p class="letter2 ">{{state % 2 !== 0? 'Focus':'Brake'}}</p>
      <p class="letter extra">{{Limit}}</p>

      
      <div><p class="" >{{ Math.floor(total / (60*60))+':'+ Math.floor(total/60 % (60))}}</p></div>
      <div class="circle" @click="button"><div :class="play? 'stop':'play'"></div></div>
    </div>
    <div>
      <div class="bb" @click="skip"><h1 class="skip">skip</h1></div>

    </div>
  </template>
  
<script>
  
import { textChangeRangeIsUnchanged } from 'typescript';
import { store } from '../store'


export default {
  data() {
    return {
      focus: store.state.focus*60,
      short_Brake: store.state.short_Brake*60,
      long_Brake: store.state.long_Brake*60,

      Limit:store.state.focus+":00",
      state:store.state.state,
      work_rounds :3*2,
      timeCount:0,
      total:store.state.total,
      play:false,

      myInterval:setInterval(()=>{clearInterval},100),
    };
  },
  methods: {

    start(){
      var timeLimit = this.verify()
      this.play = true
      this.myInterval = setInterval(()=>{

        this.Limit = this.displayTime(timeLimit - (this.timeCount+= 1))
        
        if (this.timeCount >= timeLimit) {
          if(this.state % 2 !== 0 ){
            this.total +=this.timeCount
            store.commit("setTotal",this.total)
          }
          this.saveStatusAndStopCount()
        }
      }, 1000)
    },

    pause(){
      this.play = false
      clearInterval(this.myInterval)
    },

    skip(){
      this.saveStatusAndStopCount()
    },

    verify(){
      var timeLimit = this.state % 2 === 0 ? this.short_Brake : this.focus
        if (this.state % this.work_rounds === 0) {timeLimit = this.long_Brake}
      return timeLimit
    },

    saveStatusAndStopCount(){
      this.state++
      store.commit("setState", this.state)
      this.Limit = this.verify()/60+":00"
      this.timeCount = 0
      this.play = false
      clearInterval(this.myInterval);
    },

    displayTime(timeCountdown){
      var min = Math.floor(timeCountdown / (60))
      var sec = Math.floor(timeCountdown % (60))
      sec = sec.toLocaleString(undefined,{minimumIntegerDigits: 2})
      return min +':'+ sec
    },

    button(){return this.play? this.pause():this.start()}
  },
  
};
</script>
  
<style>
.letter2{
  color: rgb(0, 174, 174);
  font-size: 21px;
  margin-bottom: 2%;
  margin-top: 10%;
  }

.extra{
  margin: 0%;
  }

.skip{
  margin-top: 50%;
  font-size: 12px;
  color: black;
}

.bb{
  background-color: blue;
  width: 40px;
  height: 15px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50px;
  border: 2.5px;
  border-color: black;
}

.circle {
  width: 45px;
  height: 45px;
  margin-top: 12%;
  margin-left: auto;
  margin-right: auto;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  background: blue;
  border: 2.5px;
  border-color: black;
  border-style: solid;
}

.play{
  border-style: solid;
  border-color: #202020;
  box-sizing: border-box;
  border-width: 10px 0px 10px 20px;
  border-color: transparent transparent transparent black;
  transform: translate(14px, 12px);
}

.stop {
  
  margin-left: auto;
  margin-right: auto;
  width: 20px;
  height: 20px;
  position: relative;
}


.stop::before,
.stop::after {
  content: "";
  border-radius: 60px;
  position: absolute;
  width: 5px;
  height: 100%;
  background-color: black;
  top: 65%;
  left: 0%;
  transform-origin: 50% 50%;
}
.stop::before {
  transform: translate(2px, 0%);
}

.stop::after {
  transform: translate(13px, 0%);
}

  </style>