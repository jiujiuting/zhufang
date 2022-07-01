import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token: ''
    token: JSON.parse(window.localStorage.getItem('TOUTIAO_USER'))
  },
  getters: {
  },
  mutations: {
    loginFn (state, payload) {
      state.token = payload
      window.localStorage.setItem('TOUTIAO_USER', JSON.stringify(payload))
    }
  },
  actions: {
  },
  modules: {
  }
})
