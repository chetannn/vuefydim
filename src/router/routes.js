import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'
import Users from '../views/Users.vue'
import Profile from '../views/Profile.vue'
import Roles from '../views/Roles.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // meta: { requiresAuth: true },
    component: Dashboard
  },
  {
    path: '/settings',
    name: 'Settings',
    // meta: { requiresAuth: true },
    component: Settings
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    // meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    // meta: { requiresAuth: true }
  },
  {
    path: '/roles',
    name: 'Roles',
    component: Roles,
    // meta: { requiresAuth: true }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { requiresAuth: true }
  }
]

export default routes
