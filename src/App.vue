<script lang="ts" setup>
import { ref } from 'vue';
import DrawerView from '@/components/drawer/DrawerView.vue'
import Titlebar from '@/components/TitlebarView.vue'

let collapsed = ref(false)

</script>

<template>
  <div class="header">
    <div :class="[collapsed ? 'collapsed' : '']">
      <div class="v-shape"  @click="collapsed = !collapsed"></div>
    </div>
    <Titlebar/>
  </div>
  
    <Transition name="slide-fade">
        <DrawerView v-if="collapsed"/>
    </Transition>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #273645;
}
body{
    background-color: rgb(25, 25, 25);
    text-align: center;
    margin: 0%;

}

.menu{
  display: flex;
  flex-direction: column;
  height: 10%;
}

.exe{
    font-size:200%;
    padding-right: 4%;
    display: flex;
}

.letter{
    color: rgb(87, 196, 160);
    margin: 70px;
    font-size:300%;
}

.header {
    display: flex;
    height: 55px;
    text-align: center;
    background-color: rgb(35, 35, 35);
    color: rgb(0, 0, 0);
    font-size: 5px;
    justify-content: space-between;
}

.v-shape{
  width: 50px;
  height: 50px;
  position: relative;
}
.v-shape::after,
.v-shape::before{
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
.v-shape::after{
  transform: translate(0%, -5px)
}
.v-shape::before{
  transform: translate(0%, 5px);
  width: 30%;
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
