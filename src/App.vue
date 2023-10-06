<script lang="ts" setup>

</script>

<template>
    <!-- <div class="header">
      <router-link class='header' to='/' ><img id="closeBtn" src="./assets/logo.png" alt="menu"></router-link>
        <div class="exe">
            <h1 class="exe2">─</h1>
            <h1 class="exe2">✖</h1>
        </div>
      </div> -->
    <!-- <router-link to='/'>Home</router-link> |
    <router-link to="/clock">Clock</router-link>|
    <router-link to="/texte">Texte</router-link> -->
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
.header {
    display: flex;
    height: 55px;
    text-align: center;
    background: aquamarine;
    color: rgb(0, 0, 0);
    font-size: 5px;
    justify-content: space-between;
}

.exe{
    font-size:200%;
    padding-right: 4%;
    display: flex;
}
.exe2{
    padding-right: 20%;
}

.letter{
    color: aquamarine;
    margin: 70px;
    font-size:300%;
}
.search{
    margin: 15px;
    text-align: center
}
.button{
  width: 10%;
  height: 10%;
}

</style>
