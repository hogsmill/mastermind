<template>
  <div class="col">
    <h2>Result</h2>
    <div v-for="(round, roundIndex) in rounds" :key="'round-' + roundIndex" class="row">
      <div class="col result">
      <div v-for="(result, correctIndex) in round.result.correct" :key="'correct-' + correctIndex"
        class="black rounded-circle"> </div>
      <div v-for="(result, correctColorIndex) in round.result.correctColor" :key="'correctColor-' + correctColorIndex"
        class="white rounded-circle"> </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    rounds() {
      return this.$store.getters.getRounds;
    },
    solution() {
      return this.$store.getters.getSolution
    }
  }
}
</script>

<style>
  .result { padding: 10px; height: 36px; text-align: left; }
  .result div { margin-right: 10px; width: 20px; height: 20px; display: inline-block; }
  .black { background-color: black; }
  .white { background-color: white; border: 1px solid #000; }
</style>
