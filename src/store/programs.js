import programService from '@/services/programService';

const programs = {
  namespaced: true,
  state: {
    message: '',
  },
  getters: {},
  mutations: {
    SET_MESSAGE(state, message) {
      state.message = message;
    },
  },
  actions: {
    async getAll({ commit }, pageConfig) {
      return programService.getAll(pageConfig);
    },
    async save({ commit }, program) {
      let resp = await programService.save(program);
      commit('SET_MESSAGE', resp.data.message);
    },
    async delete({ commit }, id) {
      return programService.delete(id);
    },
  },
};

export default programs;
