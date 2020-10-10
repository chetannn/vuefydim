<template>
  <v-app class="grey lighten-5">
    <NavigationDrawer
      :drawer="drawer"
      :links="links"
      :drawerTitle="$store.state.appBarTitle"
      :drawerSubtitle="$store.state.appBarSubtitle"
    />

    <Navbar
      :navTitle="$store.state.appBarTitle"
      @toggleDrawer="toggleDrawer"
      @toggleTheme="toggleTheme"
    />

    <Content />
    <AppSnackbar />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import NavigationDrawer from '@/components/layout/NavigationDrawer'
import Content from '@/components/layout/Content'

import AppSnackbar from '@/components/common/AppSnackbar'

import { authComputed } from '@/store/helpers'

export default {
  components: {
    Navbar,
    Footer,
    NavigationDrawer,
    Content,
    AppSnackbar
  },
  data: () => ({
    drawer: false,
    links: [
      { icon: 'mdi-view-dashboard-outline', text: 'Dashboard', route: '/dashboard' },
      { icon: 'mdi-folder-outline', text: 'Projects', route: '/projects' },
      { icon: 'mdi-account-outline', text: 'Users', route: '/users' },
      { icon: 'mdi-plus-circle-outline', text: 'Roles', route: '/roles' },
      { icon: 'mdi-school-outline', text: 'Students', route: '/students' },
      { icon: 'mdi-wrench-outline', text: 'Settings', route: '/settings' }
    ]
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('darkMode', this.$vuetify.theme.dark)
    },
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  },
  computed: {
    hasDarkMode() {
      return this.$vuetify.theme.dark
    },
    ...authComputed
  },
  created() {
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'true') {
      this.$vuetify.theme.dark = true
    } else {
      this.$vuetify.theme.dark = false
    }
  }
}
</script>

<style lang="scss">
</style>
