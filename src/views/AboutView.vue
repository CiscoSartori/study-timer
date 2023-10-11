<template>
  <h1>about</h1>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
  methods: {
    updateMessage() {
      // Step 2: Modify the data
      this.message = 'Updated Message!';
    },
  },
};
</script>

<style>
</style>