import Vue from 'vue'
import Vuex from 'vuex'

import cityStore from './city'
import userStore from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    city: cityStore,
    user: userStore
  }
})
