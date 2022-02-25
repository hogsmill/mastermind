<template>
  <div v-if="won || lost" id="splash" class="card border shadow">
    <div v-if="won">
      <h1 class="card-title center">
        Winner!
      </h1>
      <div class="answer center">
        <div :class="solution1" class="rounded" />
        <div :class="solution2" class="red rounded" />
        <div :class="solution3" class="red rounded" />
        <div :class="solution4" class="red rounded" />
      </div>
      <div class="card-body">
        Nice one - your are a Mastermind; another game?
      </div>
      <button class="btn btn-info" @click="newGame()">
        New Game
      </button>
    </div>
    <div v-if="lost">
      <h1 class="card-title center">
        Loser!
      </h1>
      <div class="answer center">
        <div :class="solution1" class="rounded" />
        <div :class="solution2" class="red rounded" />
        <div :class="solution3" class="red rounded" />
        <div :class="solution4" class="red rounded" />
      </div>
      <div class="card-body">
        Sorry, you lost; another game?
      </div>
      <button class="btn btn-info" @click="newGame()">
        New Game
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    won() {
      return this.$store.getters.getWon
    },
    lost() {
      return this.$store.getters.getLost
    },
    colors() {
      return this.$store.getters.getColors
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
    }
  },
  methods: {
    randomColor() {
      const index = Math.floor(Math.random() * Math.floor(6))
      return this.colors[index]
    },
    newGame() {
      this.$store.dispatch('updateWon', false)
      this.$store.dispatch('updateLost', false)
      for (let i = 0; i < 10; i++) {
        this.$store.dispatch('updateRound', { round: i, reset: true })
      }
      this.$store.dispatch('updateSolution1', { color: this.randomColor() })
      this.$store.dispatch('updateSolution2', { color: this.randomColor() })
      this.$store.dispatch('updateSolution3', { color: this.randomColor() })
      this.$store.dispatch('updateSolution4', { color: this.randomColor() })
      this.$store.dispatch('updateCurrentRound', 0)
    }
  }
}
</script>

<style>
  #splash {
    position: absolute; top: 0; left: 0; z-index: 10;
    width: 50%; height: 50%; margin: 25%; }
  .answer div { display: inline-block; margin: 20px; width: 20px; height: 20px; }
</style>
