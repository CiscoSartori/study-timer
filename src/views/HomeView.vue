<template>
  <div class="timer">
    <h1 class="leater-Timer www">Focus</h1>
    <div class="save">
      <i class="arrow left" @click="setFocus(-1)"></i>
      <h1>{{ focus }}</h1>
      <i class="arrow right" @click="setFocus(1)"></i>
    </div>
    <h1 class="leater-Timer www">Focus</h1>
    <div class="save">
      <i class="arrow left" @click="setShort_Brake(-1)"></i>
      <h1>{{ short_Brake }}</h1>
      <i class="arrow right" @click="setShort_Brake(1)"></i>
    </div>
    <h1 class="leater-Timer www">Focus</h1>
    <div class="save">
      <i class="arrow left" @click="setLong_Brake(-1)"></i>
      <h1>{{ long_Brake }}</h1>
      <i class="arrow right" @click="setLong_Brake(1)"></i>
    </div>
    
</div>
</template>


<script lang="ts">
import { store } from '../store'
import { ref } from 'vue';
export default {
  data(){
    return{
      focus: store.state.focus,
      short_Brake: store.state.short_Brake,
      long_Brake: store.state.long_Brake,
    }
  },
  methods:{
    setFocus(change:number){
      store.commit('setFocus',this.focus += change)
    },
    setShort_Brake(change:number){
      store.commit('setShort_Brake',this.short_Brake += change)
    },
    setLong_Brake(change:number){
      store.commit('setLong_Brake',this.long_Brake += change)
    }
  }


}

</script>

<style>
.timer{
  color: rgb(0, 174, 174)}
.leater-Timer{
  font-size: smaller;
  margin: 0%;

}
.save{
  display: flex;
  align-items: center;
  justify-content: center;
}
.www{
margin-top: 10%;
}


.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}


/* 
.left-shape.right-shape {
  width: 10px;
  height: 10px;
  position: relative;
}

.left-shape::before,
.left-shape::after {
  content: "";
  border-radius: 20px;
  position: absolute;
  width: 16px;
  height: 3px;
  background-color: black;

}
.left-shape:first-child {
  transform: rotate(45deg);
}

.left-shape:last-child {
  transform: rotate(-45deg);
  
} */

</style>