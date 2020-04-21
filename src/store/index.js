import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import programs from './programs'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    programs,
    users
  }
})
