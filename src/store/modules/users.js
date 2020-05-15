import usersService from '@/services/usersService'

export const users = {
  namespaced: true,
  state: {
    message: ''
  },
  getters: {},
  mutations: {
    SET_MESSAGE(state, message) {
      state.message = message
    }
  },
  actions: {
    async getAll({ commit }, pageConfig) {
      return usersService.getAll(pageConfig)
    },
    async insert({ commit }, user) {
      return usersService.insert(user)
    },
    async delete({ commit }, id) {
      return usersService.delete(id)
    },
    async update({ commit }, user) {
      return usersService.update(user)
    }
  }
}

export default users
