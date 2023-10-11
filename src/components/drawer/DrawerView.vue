<template>
    <div class = "drawer">
        <router-link class = "img" to="/"><img class = "img" src="@/assets/white.png"></router-link>
        <router-link class = "img" to="/texte"><img class = "img" src="@/assets/white.png"></router-link>
        <router-link class = "img" to="/clock"><img class = "img" src="@/assets/white.png"></router-link>
    </div>
</template>
<script>


export default{

}
</script>

<style>
.drawer{
    position: absolute;
  height: 55px;
  display: flex;
  flex-direction: column;
  margin:5px;
}
.img {
    max-width: 100%;
    height: 90%;
    margin:3px;
}
</style>