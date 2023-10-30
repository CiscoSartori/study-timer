<template>
  <div class="timer">
    <h1 class="leater-Timer www">Focus</h1>
    <div class="save">
      <div class="box" @click="setFocus(-1)">
        <i class="arrow left" ></i>
      </div>
      <h1>{{ $store.state.focus }}</h1>
      <div class="box" @click="setFocus(1)">
        <i class="arrow right" ></i>
      </div>
    </div>

    <h1 class="leater-Timer www">Short Brake</h1>
    <div class="save">
      <div class="box" @click="setShort_Brake(-1)">
        <i class="arrow left" ></i>
      </div>
      <h1>{{ $store.state.short_Brake }}</h1>
      <div class="box" @click="setShort_Brake(1)">
        <i class="arrow right" ></i>
      </div>
    </div>
    
    <h1 class="leater-Timer www">Long Brake</h1>
    <div class="save">
      <div class="box" @click="setLong_Brake(-1)">
        <i class="arrow left" ></i>
      </div>
      <h1>{{ $store.state.long_Brake }}</h1>
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
    }
  },
  methods:{
    setFocus(change){
      const focus = parseInt(this.$store.state.focus)
      this.$store.dispatch('saveFocus', focus + change);
    },
    setShort_Brake(change){
      const short_Brake = parseInt(this.$store.state.short_Brake)
      this.$store.dispatch('saveShort_Brake', short_Brake + change);
    },
    setLong_Brake(change){
      const long_Brake = parseInt(this.$store.state.long_Brake)
      this.$store.dispatch('saveLong_Brake', long_Brake + change);
    },
    loadFromLocalStorage() {
      this.$store.dispatch('loadAllData');
    },
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