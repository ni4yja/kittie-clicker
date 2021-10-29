import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import items from '@/data/items'

export default createStore({
  state: {
    kittenName: '',
    kittenSrc: '',
    kittens: [
      {
        src: require('../assets/kittie-1.jpg')
      },
      {
        src: require('../assets/kittie-2.jpg')
      },
      {
        src: require('../assets/kittie-3.jpg')
      }
    ],
    timer: null,
    seconds: 0,
    items,
    purchasedItems: [],
    user: {
      level: 0
    }
  },
  mutations: {
    updateKittenInfo (state, { field, value }) {
      state[field] = value
    },
    setTimer (state, payload) {
      state.timer = payload
    },
    setSeconds (state, seconds) {
      state.seconds = seconds
    }
  },
  actions: {
    createTimer ({ commit, state }) {
      const timer = setInterval(() => {
        commit('setSeconds', state.seconds + 1)
      }, 1000)
      commit('setTimer', timer)
    },
    clearTimer ({ state }) {
      clearInterval(state.timer)
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
