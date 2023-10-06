<template>
  <div class="about">
    <p class="letter" id="timer" >{{count}}</p>
    
    <button @click="play">play</button>
    <button @click="play">play</button>
    <button @click="play">play</button>
    <div><input class="search" id="time" placeholder="Limit" aria-label="Limit"></div>
  </div>
</template>

<script lang="ts">

import { store } from '../store'

export default {

  data() {
      return {
        count: store.state.count,
      };
    },
  methods:{
    play() {
      store.commit('change',21)
    },

  }
}
</script>
