<template>
  <div class="timer">

    <h1 class="leater-Timer www">Focus</h1>
    <div class="save">
      <div class="box" @click="setFocus(-1)">
        <i class="arrow left" ></i>
      </div>
      <h1>{{ focus }}</h1>
      <div class="box" @click="setFocus(1)">
        <i class="arrow right" ></i>
      </div>
    </div>

    <h1 class="leater-Timer www">Short_Brake</h1>
    <div class="save">
      <div class="box" @click="setShort_Brake(-1)">
        <i class="arrow left" ></i>
      </div>
      <h1>{{ short_Brake }}</h1>
      <div class="box" @click="setShort_Brake(1)">
        <i class="arrow right" ></i>
      </div>
    </div>
    
    <h1 class="leater-Timer www">Long_Brake</h1>
    <div class="save">
      <div class="box" @click="setLong_Brake(-1)">
        <i class="arrow left" ></i>
      </div>
      <h1>{{ long_Brake }}</h1>
      <div class="box" @click="setLong_Brake(1)">
        <i class="arrow right" ></i>
      </div>
    </div>
    
</div>
</template>


<script>
import { store } from '../store'
import { ref } from 'vue';
export default {
  data(){
    return{
      focus : store.state.focus,
      short_Brake: store.state.short_Brake,
      long_Brake: store.state.long_Brake,
    }
  },
  methods:{
    setFocus(change){
      store.commit('setFocus',this.focus += change)
    },
    setShort_Brake(change){
      store.commit('setShort_Brake',this.short_Brake += change)
    },
    setLong_Brake(change){
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
margin-top: 7%;
}

.box{
  width: 20px;
  height: 20px;
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


</style>