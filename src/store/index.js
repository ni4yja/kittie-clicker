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
    autoPurrsPerSecond: 0,
    totalPurrs: 0,
    totalSpent: 0,
    user: {
      level: 0
    }
  },
  getters: {
    currentTotal (state) {
      return Math.round(state.totalPurrs) - state.totalSpent
    },
    purchasedItemCount (state) {
      return (item) => {
        return state.purchasedItems.filter((pItem) => {
          return pItem.name === item.name
        }).length
      }
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
    },
    purchaseItem (state, item) {
      state.totalSpent += item.cost
      state.autoPurrsPerSecond += item.purrsPerSecond
      state.purchasedItems.push(item)
    },
    incrementPurrs (state) {
      state.totalPurrs += 1
    },
    autoUpdatePurrs (state) {
      state.totalPurrs += state.autoPurrsPerSecond
    },
    resetKittenInfo (state) {
      state.kittenName = ''
      state.kittenSrc = ''
      state.totalPurrs = 0
      state.totalSpent = 0
      state.purchasedItems = []
      state.autoPurrsPerSecond = 0
    }
  },
  actions: {
    createTimer ({ commit, state }) {
      const timer = setInterval(() => {
        commit('autoUpdatePurrs')
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
  plugins: [createPersistedState(
    { storage: window.sessionStorage }
  )]
})
