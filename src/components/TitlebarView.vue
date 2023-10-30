<script>
import { ref } from 'vue';
let collapsed = ref(false)

export default {
  data(){
    return{

    }
  },
  methods:{
    // closeApp(){
    //   ipcRenderer.send('window-close')
    // },
    // minimizeApp(){
    //   ipcRenderer.send('window-minimize', this.minToTray)
    // }
  }
}
</script>


<template>
  <div class="exe">
    <div class="--shape"></div>
    <div class="x-shape"></div>
  </div>
</template>

<style>

.--shape {
  width: 50px;
  height: 50px;
  position: relative;
}

.--shape::after {
  content: "";
  border-radius: 20px;
  position: absolute;
  width: 40%;
  height: 3px;
  background-color: black;
  top: 49%;
  left: 49%;
  transform-origin: 50% 50%;
}

.--shape::before {
  transform: rotate(45deg);
}
.x-shape {
  width: 50px;
  height: 50px;
  position: relative;
}

.x-shape::before,
.x-shape::after {
  content: "";
  border-radius: 20px;
  position: absolute;
  width: 50%;
  height: 3px;
  background-color: black;
  top: 49%;
  left: 49%;
  transform-origin: 50% 50%;
}
.x-shape::before {
  transform: rotate(45deg);
}

.x-shape::after {
  transform: rotate(-45deg);
}

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-45px);
  opacity: 0;
}

</style>