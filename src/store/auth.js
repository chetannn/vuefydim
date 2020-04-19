import authService from '@/services/authService';
import axios from '@/services/axiosClient'

const auth = {
  state: {
    token: localStorage.getItem('token') || null,
  },
  getters: {
      loggedIn(state) {
          return !!state.token
      }
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('token', token);
    },
    CLEAR_AUTH_TOKEN(state) {
        localStorage.removeItem('token')
        location.reload()
    }
  },
  actions: {
    async login({ commit }, user) {
      let response = await authService.login(user);
      commit('SET_AUTH_TOKEN', response.data.token);
    },
    logout({ commit }) {
        commit('CLEAR_AUTH_TOKEN')
    }
  },
};

export default auth;
