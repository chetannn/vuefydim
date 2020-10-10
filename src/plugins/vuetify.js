import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0096C7'
      },
      dark: {
        primary: '#34495E'
      }
    }
  }
})
