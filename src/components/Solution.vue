<template>
  <div class="col">

    <div class="row solution rounded">
      <div v-if="host" class="col"><h2>Solution</h2></div>
      <div v-if="host" class="col">
        <button class="btn btn-info btn-sm" @click="clear()">Clear</button>
      </div>
      <div class="col">
        <button class="btn btn-info btn-sm" @click="newGame()">New Game</button>
      </div>
      <div v-if="host || lost" class="col item" :class="getClass(solution1)" @click="setSolution1($event)"> </div>
      <div v-if="host || lost" class="col item" :class="getClass(solution2)" @click="setSolution2($event)"> </div>
      <div v-if="host || lost" class="col item" :class="getClass(solution3)" @click="setSolution3($event)"> </div>
      <div v-if="host || lost" class="col item" :class="getClass(solution4)" @click="setSolution4($event)"> </div>

    </div>
  </div>
</template>

<script>
import selectColor from '../behaviour/selectColor.js'

export default {
  methods: {
    getClass(value) {
      return !value ? 'empty' : value
    },
    clear() {
      this.$store.dispatch("updateSolution1", '')
      this.$store.dispatch("updateSolution2", '')
      this.$store.dispatch("updateSolution3", '')
      this.$store.dispatch("updateSolution4", '')
    },
    randomColor() {
      var index = Math.floor(Math.random() * Math.floor(6))
      return this.colors[index]
    },
    newGame() {
      this.$store.dispatch("updateLost", false)
      for (var i = 0; i < 10; i++) {
        this.$store.dispatch("updateRound", { round: i, reset: true })
      }
      this.$store.dispatch("updateSolution1", { color: this.randomColor() })
      this.$store.dispatch("updateSolution2", { color: this.randomColor() })
      this.$store.dispatch("updateSolution3", { color: this.randomColor() })
      this.$store.dispatch("updateSolution4", { color: this.randomColor() })
      this.$store.dispatch("updateCurrentRound", 0)
    },
    setSolution1($event) {
      var target = $event.target
      selectColor.positionSelect(target, "updateSolution1")
    },
    setSolution2($event) {
      var target = $event.target
      selectColor.positionSelect(target, "updateSolution2")
    },
    setSolution3($event) {
      var target = $event.target
      selectColor.positionSelect(target, "updateSolution3")
    },
    setSolution4($event) {
      var target = $event.target
      selectColor.positionSelect(target, "updateSolution4")
    }
  },
  computed: {
    host() {
      return this.$store.getters.getHost
    },
    lost() {
      return this.$store.getters.getLost
    },
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
    },
    colors() {
      return this.$store.getters.getColors
    }
  }
}
</script>

<style>
  .solution { background-color: #ddd; padding: 10px; margin-bottom: 12px; }
  .item { margin: 6px; }
</style>
