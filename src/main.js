import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import axiosClient from '@/services/axiosClient';
import store from './store'
import VuetifyConfirm from 'vuetify-confirm'


Vue.config.productionTip = false;

Vue.use(VuetifyConfirm, { vuetify })

new Vue({
  vuetify,
  router,
  store,
  created() {
    const tokenString = localStorage.getItem('token');
    if (tokenString) {
      this.$store.commit('SET_AUTH_TOKEN', tokenString)
    }
    axiosClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error); 
      }
    );
  },
  render: (h) => h(App)
}).$mount('#app');
