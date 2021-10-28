import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

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
    ]
  },
  mutations: {
    updateKittenInfo (state, { field, value }) {
      state[field] = value
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
