import authService from '@/services/authService';
import { SET_AUTH_TOKEN, CLEAR_AUTH_TOKEN } from '../mutation-types';
import { setAuthHeader } from '@/utils/utils'

const auth = {
  state: {
    token: localStorage.getItem('token') || null,
  },
  getters: {
    loggedIn(state) {
      return !!state.token;
    },
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      setAuthHeader(token);
      localStorage.setItem('token', token);
    },
    CLEAR_AUTH_TOKEN() {
      localStorage.removeItem('token');
      location.reload();
    },
  },
  actions: {
    async login({ commit }, user) {
      let response = await authService.login(user);
      commit(SET_AUTH_TOKEN, response.data.token);
    },
    logout({ commit }) {
      commit(CLEAR_AUTH_TOKEN);
    },
  },
};

export default auth;