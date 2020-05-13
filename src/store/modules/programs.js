import programService from '@/services/programService'
import { SET_MESSAGE } from '../mutation-types'

const programs = {
  namespaced: true,
  state: {
    message: ''
  },
  getters: {},
  mutations: {
    [SET_MESSAGE](state, message) {
      state.message = message
    }
  },
  actions: {
    async getAll({ commit }, pageConfig) {
      return programService.getAll(pageConfig)
    },
    async insert({ commit }, program) {
      return programService.insert(program)
    },
    async delete({ commit }, id) {
      return programService.delete(id)
    }
  }
}

export default programs
