<template>
  <div id="app" class="mb-4">
    <appHeader />

    <div v-if="showAbout">
      <AboutView />
    </div>
    <div v-if="host" class="game-name text-right">
      <button class="btn btn-sm btn-info" v-if="!gameName" @click="show">
        Set Game Name
      </button>
      <span v-if="gameName">Game: {{ gameName }}</span>
    </div>
    <div v-if="!showAbout">
      <div class="container">
        <div class="row">
          <Solution />
        </div>
        <div class="row">
          <Guess />
          <Result />
        </div>
      </div>
    </div>
    <SelectColor />
    <Splash />
    <input type="hidden" id="updateData">
    <input type="hidden" id="updateMethod">
  </div>
</template>

<script>
import io from 'socket.io-client'

import Header from './components/Header.vue'
import AboutView from './components/about/AboutView.vue'

import Solution from './components/Solution.vue'
import Guess from './components/Guess.vue'
import Result from './components/Result.vue'
import SelectColor from './components/SelectColor.vue'
import Splash from './components/Splash.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    AboutView,
    Solution,
    Guess,
    Result,
    SelectColor,
    Splash
  },
  data() {
    return {
      gameName: ''
    }
  },
  computed: {
    host() {
      return this.$store.getters.getHost
    },
    showAbout() {
      return this.$store.getters.getShowAbout
    }
  },
  created() {
    let connStr
    if (location.hostname == 'localhost') {
      connStr = 'http://localhost:3005'
    } else {
      connStr = 'https://agilesimulations.co.uk:3005'
    }
      console.log('Connecting to: ' + connStr)
      this.socket = io(connStr)
  },
  mounted() {
    if (location.search == '?host') {
      this.$store.dispatch('updateHost', true)
    }
  },
  methods: {
    show () {
      this.$modal.show('set-game-name')
    },
    hide () {
      this.$modal.hide('set-game-name')
    },
    saveGameName: function() {
      this.gameName = document.getElementById('game-name').value
      this.hide()
    }
  }
}
</script>
