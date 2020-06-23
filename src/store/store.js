import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showAbout: false,
    host: false,
    role: false,
    won: false,
    lost: false,
    solution1: '',
    solution2: '',
    solution3: '',
    solution4: '',
    colors: ['red', 'orange', 'yellow', 'blue', 'green', 'purple'],
    rounds: [
      { guess: ['', '', '', ''], result: {}},
      { guess: ['', '', '', ''], result: {}},
      { guess: ['', '', '', ''], result: {}},
      { guess: ['', '', '', ''], result: {}},
      { guess: ['', '', '', ''], result: {}},
      { guess: ['', '', '', ''], result: {}},
      { guess: ['', '', '', ''], result: {}},
      { guess: ['', '', '', ''], result: {}},
      { guess: ['', '', '', ''], result: {}},
      { guess: ['', '', '', ''], result: {}}
    ],
    currentRound: 0,
  },
  getters: {
    getShowAbout: (state) => {
      return state.showAbout;
    },
    getHost: (state) => {
      return state.host;
    },
    getWon: (state) => {
      return state.won;
    },
    getLost: (state) => {
      return state.lost;
    },
    getRole: (state) => {
      return state.role;
    },
    getSolution1: (state) => {
      return state.solution1;
    },
    getSolution2: (state) => {
      return state.solution2;
    },
    getSolution3: (state) => {
      return state.solution3;
    },
    getSolution4: (state) => {
      return state.solution4;
    },
    getColors: (state) => {
      return state.colors;
    },
    getRounds: (state) => {
      return state.rounds;
    },
    getCurrentRound: (state) => {
      return state.currentRound;
    }
  },
  mutations: {
    updateShowAbout: (state, payload) => {
      state.showAbout = payload;
    },
    updateHost: (state, payload) => {
      state.host = payload;
    },
    updateWon: (state, payload) => {
      state.won = payload;
    },
    updateLost: (state, payload) => {
      state.lost = payload;
    },
    updateSetting: (state, payload) => {
      state.setting = payload;
      state.guessing = payload;
    },
    updateSolution1: (state, payload) => {
      state.solution1 = payload.color;
    },
    updateSolution2: (state, payload) => {
      state.solution2 = payload.color;
    },
    updateSolution3: (state, payload) => {
      state.solution3 = payload.color;
    },
    updateSolution4: (state, payload) => {
      state.solution4 = payload.color;
    },
    updateCurrentRound: (state, payload) => {
      state.currentRound = payload;
    },
    updateRoundResult: (state, payload) => {
      var round = state.rounds[payload.round]
      round.result.correct = payload.correct;
      round.result.correctColor = payload.correctColor;
      state.rounds.splice(payload.round, 1, round)
    },
    updateRound: (state, payload) => {
      var round
      if (payload.color) {
        round = state.rounds[payload.round]
        round.guess[payload.n] = payload.color
      }
      if (payload.reset) {
        round = { guess: ['', '', '', ''], result: {}}
      }
      state.rounds.splice(payload.round, 1, round)
    }
  },
  actions: {
    updateShowAbout: ({ commit }, payload) => {
      commit("updateShowAbout", payload);
    },
    updateHost: ({ commit }, payload) => {
      commit("updateHost", payload);
    },
    updateWon: ({ commit }, payload) => {
      commit("updateWon", payload);
    },
    updateLost: ({ commit }, payload) => {
      commit("updateLost", payload);
    },
    updateSolution1: ({ commit }, payload) => {
      commit("updateSolution1", payload);
    },
    updateSolution2: ({ commit }, payload) => {
      commit("updateSolution2", payload);
    },
    updateSolution3: ({ commit }, payload) => {
      commit("updateSolution3", payload);
    },
    updateSolution4: ({ commit }, payload) => {
      commit("updateSolution4", payload);
    },
    updateRoundResult: ({ commit }, payload) => {
      commit("updateRoundResult", payload);
    },
    updateCurrentRound: ({ commit }, payload) => {
      commit("updateCurrentRound", payload);
    },
    updateRound: ({ commit }, payload) => {
      commit("updateRound", payload);
    }
  }
});
