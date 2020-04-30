import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import programs from './modules/programs'
import users from './modules/users'

import { SET_SNACKBAR } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSnackBar: false,
    snackBarText: '',
    snackBarColor: '',
    snackBarPosition: ''
  },
  mutations: {
    [SET_SNACKBAR](state, payload) {
      state.showSnackBar = payload.show
      state.snackBarText = payload.text
      state.snackBarColor = payload.color || 'success'
      state.snackBarPosition = payload.position || 'bottom'
    }
  },
  actions: {
    setSnackbar({ commit }, snackbar) {
      commit(SET_SNACKBAR, snackbar)
    }
  },
  modules: {
    auth,
    programs,
    users
  }
})
