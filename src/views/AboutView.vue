<template>
<button @click="sound">h1das</button>
  <audio
    id="audio"
    ref="audio"
    :src="path"
  ></audio>
</template>

<script>
 
export default {
  data() {
    return {
      path: '@/assets/quinta.mp3',
    };
  },
  methods: {
    sound() {
      this.$refs['audio'].volume = 1
      this.$refs['audio'].play()
    },
  },
};
</script>

<style>
</style>