<template>
  <div class="col">

    <div class="row solution rounded">
      <div class="col"><h2>Solution</h2></div>
      <div class="col">
        <button class="btn btn-info btn-sm" @click="clear()">Clear</button>
      </div>
      <div class="col">
        <button class="btn btn-info btn-sm" @click="startGame()">Go</button>
      </div>
      <div class="col item" :class="getClass(solution1)" @click="setSolution1('red')"> </div>
      <div class="col item" :class="getClass(solution2)" @click="setSolution2('red')"> </div>
      <div class="col item" :class="getClass(solution3)" @click="setSolution3('red')"> </div>
      <div class="col item" :class="getClass(solution4)" @click="setSolution4('red')"> </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getClass(value) {
      return value == '' ? 'empty' : value
    },
    clear() {
    this.$store.dispatch("updateSolution1", '')
    this.$store.dispatch("updateSolution2", '')
    this.$store.dispatch("updateSolution3", '')
    this.$store.dispatch("updateSolution4", '')
    },
    setSolution1(color) {
      this.$store.dispatch("updateSolution1", color)
    },
    setSolution2(color) {
      this.$store.dispatch("updateSolution2", color)
    },
    setSolution3(color) {
      this.$store.dispatch("updateSolution3", color)
    },
    setSolution4(color) {
      this.$store.dispatch("updateSolution4", color)
    },
    startGame() {
      console.log(this.solution)
    }

  },
  computed: {
    solution1() {
      return this.$store.getters.getSolution1
    },
    solution2() {
      return this.$store.getters.getSolution2
    },
    solution3() {
      return this.$store.getters.getSolution3
    },
    solution4() {
      return this.$store.getters.getSolution4
    }
  }
}
</script>

<style>
  .solution { background-color: #ddd; padding: 10px; margin-bottom: 12px; }
  .item { margin: 6px; }
  .empty { background-color: #eee; }
</style>
