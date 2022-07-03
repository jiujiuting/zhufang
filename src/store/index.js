import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token: ''
    token: JSON.parse(window.localStorage.getItem('TOUTIAO_USER')),
    currentCity: JSON.parse(window.localStorage.getItem('TOUTIAO_CITY'))
  },
  getters: {
  },
  mutations: {
    loginFn (state, payload) {
      state.token = payload
      window.localStorage.setItem('TOUTIAO_USER', JSON.stringify(payload))
    },
    cityFn (state, payload) {
      if (state.currentCity === null) {
        state.currentCity = []
      }
      state.currentCity = payload
      window.localStorage.setItem('TOUTIAO_CITY', JSON.stringify(payload))
    }
  },
  actions: {
  },
  modules: {
  }
})
