import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [...routes]
})

router.beforeEach((to, from, next) => {
  // const loggedIn = localStorage.getItem('token')
  const loggedIn = true;
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/')
  }
  next()
})

export default router
