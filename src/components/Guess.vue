<template>
  <div class="col game rounded">
    <h2>Guess</h2>
    <div v-for="(round, roundIndex) in rounds" :key="'round-' + roundIndex" class="row">
      <div v-for="(guess, guessIndex) in round.guess" :key="'guess-' + guessIndex" class="col guess">
        <div :class="getClass(guess)" @click="setColor($event, roundIndex, guessIndex)" class="rounded"> </div>
      </div>
      <div class="guess-button">
        <button v-if="roundIndex == currentRound" class="btn btn-info btn-sm" @click="guess()">Guess</button>
      </div>
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
    setColor($event, round, n) {
      if (round == this.currentRound) {
        var target = $event.target
        selectColor.storeData({ round: this.currentRound, n: n })
        selectColor.positionSelect(target, "updateRound")
      }
    },
    win() {
      return this.rounds[this.currentRound].result.correct == 4
    },
    lose() {
      return !this.win() && this.currentRound > 8
    },
    guess() {
      this.getResult()
      if (this.win()) {
        alert("Boom! You won!")
      } else if (this.lose()) {
        alert("You lost - better luck next time...")
      } else {
        this.$store.dispatch("updateCurrentRound", this.currentRound + 1)
      }
    },
    checkColor(color) {
      for (var i = 0; i < this.solution.length; i++) {
        if (color == this.solution[i]) {
          return true
        }
      }
      return false
    },
    getResult() {
      var round = this.rounds[this.currentRound]
      var correct = 0
      var correctColor = 0
      var i
      for (i = 0; i < 4; i++) {
        if (this.checkColor(round.guess[i])) {
          correctColor = correctColor + 1
        }
      }
      for (i = 0; i < 4; i++) {
        if (this.solution[i] == round.guess[i]) {
          correct = correct + 1
          correctColor = correctColor - 1
        }
      }
      this.$store.dispatch("updateRoundResult", {
        round: this.currentRound,
        correct: correct,
        correctColor: correctColor
      })
    }
  },
  computed: {
    rounds() {
      return this.$store.getters.getRounds
    },
    currentRound() {
      return this.$store.getters.getCurrentRound
    },
    solution() {
      return [
        this.$store.getters.getSolution1,
        this.$store.getters.getSolution2,
        this.$store.getters.getSolution3,
        this.$store.getters.getSolution4
      ]
    }
  }
}
</script>

<style>
  .game { background-color: #ddd; }
  .guess { padding: 10px; height: 36px; }
  .guess div { margin: 0 auto; width: 20px; height: 20px; }
  .guess-button { width: 90px; }
</style>
