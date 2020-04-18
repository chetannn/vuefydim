import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import '@/services/axiosClient';
import store from './store'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  created() {
    const tokenString = localStorage.getItem('token');
    if (tokenString) {
      // const tokenData = JSON.parse(tokenString)
      // this.$store.commit('SET_USER_DATA', userData)
    }
    this.$http.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          // this.$store.dispatch('logout')
        }
        return Promise.reject(error); 
      }
    );
  },
  render: (h) => h(App)
}).$mount('#app');
