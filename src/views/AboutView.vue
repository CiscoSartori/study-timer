<template>
  <div class="margin">
    {{ loadFromLocalStorage() }}
    <h1 class="hh">Today</h1>
      <h2 class="hh hhh">{{ Math.floor(today / (60*60))+':'+ Math.floor(today/60 % (60))}}</h2>
    <h1 class="hh">Total</h1>
      <h2 class="hh hhh">{{Math.floor(total / (60*60))+':'+ Math.floor(total/60 % (60))}}</h2>
  </div>
</template>
<script>


export default {
  data() {
    return {
      today:this.$store.state.today,
      total:this.$store.state.total,
    }
  },
  methods: {
    loadFromLocalStorage() {
      this.$store.dispatch('loadAllData');
    },
  },
}
</script>


<style>
.score{
  font-size: smaller;
}

.hh,.hhh {
  
  display: flex;
  flex-direction: column;
  margin: 0%;
  margin-top: 15px;
  font-size: 25px;
}
.hhh{
  color: rgb(39, 132, 101);
}
.margin{
  margin-top: 50px;
}

</style>