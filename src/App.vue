<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <!-- -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Project Manager</v-list-item-title>
          <v-list-item-subtitle>here</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in links" :to="item.route" :key="item.text" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat dense color="primary" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">Project Manager</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text to="/register" rounded class="mr-4">Register</v-btn>
      <v-btn text rounded to="/login" class="mr-4">Login</v-btn>

      <v-btn text icon rounded @click="toggleTheme" class="mr-4">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

      <v-btn text icon rounded>
        <v-icon class="mr-4">mdi-bell-outline</v-icon>
      </v-btn>

      <v-menu class="mr-4" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-avatar size="40">
              <img src="https://i.pravatar.cc/40" alt="avatar" />
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-wrench</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container class="mt-10" fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
      { icon: "mdi-folder", text: "Projects", route: "/projects" },
      { icon: "mdi-account", text: "Users", route: "/about" },
      { icon: "mdi-school", text: "Students", route: "/students" },
      { icon: "mdi-wrench", text: "Settings", route: "/settings" }
    ]
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  },
  computed: {
    hasDarkMode() {
      return this.$vuetify.theme.dark;
    }
  }
};
</script>

<style lang="scss">
</style>
