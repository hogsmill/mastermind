<template>
  <div class="col game rounded">
    <h2>Guess</h2>
    <div v-for="(round, roundIndex) in rounds" :key="'round-' + roundIndex" class="row">
      <div v-for="(guess, guessIndex) in round.guess" :key="'guess-' + guessIndex" class="col guess">
        <div :class="getClass(guess)"> </div>
      </div>
      <div class="guess-button">
        <button v-if="roundIndex == currentRound" class="btn btn-info btn-sm" @click="guess()">Guess</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getClass(value) {
      return value == '' ? 'empty' : value
    },
    guess() {
      this.getResult()
      this.$store.dispatch("updateCurrentRound", this.currentRound + 1)
    },
    getResult() {
      var round = this.rounds[this.currentRound]
      var correct = 0
      var correctColor = 0
      for (var i = 0; i < 4; i++) {
        console.log(this.solution[i], ' == ', round.guess[i])
        if (this.solution[i] == round.guess[i]) {
          correct = correct + 1
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
  .guess { padding: 10px; height: 40px; }
  .guess div { margin: 0 auto; width: 20px; height: 20px; }
  .guess .empty { border: 1px solid #aaa; }
  .guess-button { width: 90px; }
</style>
