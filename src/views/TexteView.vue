<template>
    <div class="about">
      <p class="letter">{{Limit}}</p>
      
      <button @click="start">start</button>
      <button @click="pause">pause</button>
      <button @click="skip">skip</button>
      <div><p class="" >{{total}}</p></div>
    </div>
  </template>
  
  <script lang="ts">
  
  import { textChangeRangeIsUnchanged } from 'typescript';
import { store } from '../store'

  export default {
    data() {
      return {
        Limit:  "Limit",
        state:1,
        focus : store.state.focus* 60,
        short_Brake : store.state.short_Brake* 60,
        long_Brake : store.state.long_Brake* 60,
        work_rounds :3,
        timeCount:0,
        total:0,

        myInterval:setInterval(this.pause(), 1000),


      };
    },
    methods: {

      start(){

        this.myInterval = setInterval(()=>{
          var timeLimit = this.state % 2 === 0 ? this.short_Brake : this.focus
          if (this.state== this.work_rounds*2) {timeLimit = this.long_Brake}
          this.timeCount += 1
          var timeCountdown = timeLimit - this.timeCount
          var clockCountdown = timeCountdown 
          var min = Math.floor(clockCountdown / (60))
          var sec = Math.floor(clockCountdown % (60))

          this.Limit = min +':'+ sec

          
          
          if (this.timeCount >= timeLimit) {
            if(this.state % 2 !== 0 ){
                this.total +=this.timeCount
            }
            this.state++
            this.timeCount = 0
            clearInterval(this.myInterval);
          }
        }, 1000)
      },
      pause(){
        clearInterval(this.myInterval)
      },
      skip(){
        this.state++
        this.timeCount = 0
        clearInterval(this.myInterval);
      }
    },
    
  };
  </script>
  
  <style>
  
  </style>