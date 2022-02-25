<template>
  <div class="col game rounded">
    <h2>Guess</h2>
    <div v-for="(round, roundIndex) in rounds" :key="'round-' + roundIndex" class="row">
      <div v-for="(guess, guessIndex) in round.guess" :key="'guess-' + guessIndex" class="col guess">
        <div :class="getClass(guess)" @click="setColor($event, roundIndex, guessIndex)" class="rounded" />
      </div>
      <div class="guess-button">
        <button v-if="roundIndex == currentRound" class="btn btn-info btn-sm" @click="makeGuess()">
          Guess
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import selectColor from '../behaviour/selectColor.js'

export default {
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
  },

  methods: {
    getClass(value) {
      return value == '' ? 'empty' : value
    },
    setColor($event, round, n) {
      if (round == this.currentRound) {
        const target = $event.target
        selectColor.storeData({ round: this.currentRound, n: n })
        selectColor.positionSelect(target, 'updateRound')
      }
    },
    won() {
      const won = this.rounds[this.currentRound].result.correct == 4
      this.$store.dispatch('updateWon', won)
      return won
    },
    lost() {
      const lost = !this.won() && this.currentRound > 8
      this.$store.dispatch('updateLost', lost)
      return lost
    },
    makeGuess() {
      this.getResult()
      if (!this.won() && !this.lost()) {
        this.$store.dispatch('updateCurrentRound', this.currentRound + 1)
      }
    },
    isCorrect(i, round, solution) {
      return round.guess[i] == solution[i]
    },
    isCorrectColor(i, round, solution) {
      let correctColor = false
      for (let j = 0; j < 4; j++) {
        if (i != j && round.guess[i] == solution[j]) {
          correctColor = true
        }
      }
      return correctColor
    },
    getResult() {
      const round = this.rounds[this.currentRound]
      let correct = 0
      let correctColor = 0
      for (let i = 0; i < 4; i++) {
        if (this.isCorrect(i, round, this.solution)) {
          correct = correct + 1
        } else if (this.isCorrectColor(i, round, this.solution)) {
          correctColor = correctColor + 1
        }
      }
      this.$store.dispatch('updateRoundResult', {
        round: this.currentRound,
        correct: correct,
        correctColor: correctColor
      })
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
