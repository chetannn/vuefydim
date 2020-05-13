<template>
  <v-app-bar flat dense :color="$store.state.appBarColor" dark app>
    <v-app-bar-nav-icon @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>
    <v-toolbar-title class="white--text">{{navTitle}}</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn v-if="!loggedIn" text to="/register" rounded class="mr-4">Register</v-btn>
    <v-btn v-if="!loggedIn" text rounded to="/login" class="mr-4">Login</v-btn>

    <v-btn v-if="loggedIn" text icon rounded @click="$emit('toggleTheme')" class="mr-4">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>

    <v-btn v-if="loggedIn" text icon rounded>
      <v-icon class="mr-4">mdi-bell-outline</v-icon>
    </v-btn>

    <v-menu v-if="loggedIn" class="mr-4" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-avatar size="40">
            <img src="https://i.pravatar.cc/40" alt="avatar" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="$router.push({name: 'Profile'})">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push({ name: 'Settings'})">
          <v-list-item-icon>
            <v-icon>mdi-wrench</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
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
</template>

<script>
import { authComputed } from '@/store/helpers'

export default {
  name: 'Navbar',
  props: ['navTitle'],
  computed: {
    ...authComputed
  },
  methods: {
    logout() {
      console.log('logout')
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
</style>