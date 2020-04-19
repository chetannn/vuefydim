<template>
  <v-app>
    <NavigationDrawer
      :drawer="drawer"
      :links="links"
      drawerTitle="Project Management"
      drawerSubtitle="here"
    />

    <Navbar navTitle="Project Manager" @toggleDrawer="toggleDrawer" @toggleTheme="toggleTheme" />

    <Content />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NavigationDrawer from '@/components/layout/NavigationDrawer';
import Content from '@/components/layout/Content';

export default {
  components: {
    Navbar,
    Footer,
    NavigationDrawer,
    Content
  },
  data: () => ({
    drawer: false,
    links: [
      { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/dashboard' },
      { icon: 'mdi-folder', text: 'Projects', route: '/projects' },
      { icon: 'mdi-account', text: 'Users', route: '/users' },
      { icon: 'mdi-school', text: 'Students', route: '/students' },
      { icon: 'mdi-wrench', text: 'Settings', route: '/settings' }
    ]
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem('darkMode', this.$vuetify.theme.dark);
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  },
  computed: {
    hasDarkMode() {
      return this.$vuetify.theme.dark;
    }
  },
  created() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }
  }
};
</script>

<style lang="scss">
</style>
