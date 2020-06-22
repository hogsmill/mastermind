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
      <div class="col item" :class="getClass(solution1)" @click="setSolution1($event)"> </div>
      <div class="col item" :class="getClass(solution2)" @click="setSolution2($event)"> </div>
      <div class="col item" :class="getClass(solution3)" @click="setSolution3($event)"> </div>
      <div class="col item" :class="getClass(solution4)" @click="setSolution4($event)"> </div>

    </div>
  </div>
</template>

<script>
import selectColor from '../behaviour/selectColor.js'

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
    },
    startGame() {
      console.log(this.solution1, this.solution2, this.solution3, this.solution4)
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
