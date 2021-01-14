import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showbasic: true
  },
  mutations: {
    changebasic (state, data) {
      state.showbasic = data
    }
  },
  actions: {
  },
  modules: {
  }
})
