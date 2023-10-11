<template>
    <div class="about">
      <p class="letter">{{Limit}}</p>
      
      <div class="circle" @click="button"><div :class="play? 'stop':'play'"></div></div>
      <button class="bb" @click="skip"><div></div></button>
      <div><p class="" >{{total/60}}</p></div>
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
        state:1,
        work_rounds :3,
        timeCount:0,
        total:0,
        play:false,

        myInterval:setInterval(()=>{clearInterval},100),
      };
    },
    methods: {

      start(){
      
        var timeLimit = this.verify()
        this.play = true
        this.myInterval = setInterval(()=>{

          this.timeCount += 1
          var timeCountdown = timeLimit - this.timeCount
          var clockCountdown = timeCountdown 
          var min = Math.floor(clockCountdown / (60))
          var sec = Math.floor(clockCountdown % (60))
          sec = sec.toLocaleString(undefined,{minimumIntegerDigits: 2})
          this.Limit = min +':'+ sec
          
          
          
          if (this.timeCount >= timeLimit) {
            if(this.state % 2 !== 0 ){
              this.total +=this.timeCount
            }
            this.state++
            this.Limit = this.verify()/60+":00"
            this.timeCount = 0
            clearInterval(this.myInterval);
          }
        }, 1000)
      },
      pause(){
        this.play = false
        clearInterval(this.myInterval)
      },
      skip(){
        this.state++
        this.Limit = this.verify()/60+":00"
        this.timeCount = 0
        this.play = false
        clearInterval(this.myInterval);
      },
      verify(){
        var timeLimit = this.state % 2 === 0 ? this.short_Brake : this.focus
          if (this.state == this.work_rounds*2) {timeLimit = this.long_Brake}
        return timeLimit
      },
      button(){return this.play? this.pause():this.start()}
    },
    

  };
  </script>
  
  <style>
.bb{
  background-color: #202020;
}
.circle {
  margin-left: auto;
  margin-right: auto;
            width: 45px;
            height: 45px;
            -webkit-border-radius: 25px;
            -moz-border-radius: 25px;
            border-radius: 25px;
            background: blue;
            border: 2.5px;
            border-color: black;
            border-style: solid;
         }
/* .about{
} */

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
/* .play::before,
.play::after{

} */

  </style>