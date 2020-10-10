<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">{{drawerTitle}}</v-list-item-title>
        <v-list-item-subtitle>{{drawerSubtitle}}</v-list-item-subtitle>
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
</template>

<script>
import { authComputed } from '@/store/helpers'
import { mapGetters } from 'vuex'
export default {
  name: 'NavigationDrawer',
  props: ['drawer', 'links', 'drawerTitle', 'drawerSubtitle'],
  computed: {
    ...authComputed
  }
}
</script>

<style>
</style>