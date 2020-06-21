import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showAbout: false,
    host: false,
    role: false,
    solution1: 'blue',
    solution2: 'green',
    solution3: 'yellow',
    solution4: 'red',
    rounds: [
      { guess: ['red', 'green', 'blue', 'yellow'], result: {}},
      { guess: ['red', 'green', 'blue', 'yellow'], result: {}},
      { guess: ['red', 'green', 'yellow', 'blue'], result: {}},
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
    updateSetting: (state, payload) => {
      state.setting = payload;
      state.guessing = payload;
    },
    updateSolution1: (state, payload) => {
      state.solution1 = payload;
    },
    updateSolution2: (state, payload) => {
      state.solution2 = payload;
    },
    updateSolution3: (state, payload) => {
      state.solution3 = payload;
    },
    updateSolution4: (state, payload) => {
      state.solution4 = payload;
    },
    updateRoundResult: (state, payload) => {
      var round = state.rounds[payload.round]
      round.result.correct = payload.correct;
      round.result.correctColor = payload.correctColor;
      state.rounds.splice(payload.round, 1, round)
    },
    updateCurrentRound: (state, payload) => {
      state.currentRound = payload;
    }
  },
  actions: {
    updateShowAbout: ({ commit }, payload) => {
      commit("updateShowAbout", payload);
    },
    updateHost: ({ commit }, payload) => {
      commit("updateHost", payload);
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
    }
  }
});
