import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import programs from './modules/programs'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    programs,
    users
  }
})
