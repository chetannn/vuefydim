<template>
  <v-card width="400" class="mx-auto mt-10">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text>
      <v-form>
        <v-text-field
          v-model="username"
          outlined
          prepend-icon="mdi-account-circle"
          label="Username"
        ></v-text-field>
        <v-text-field
          outlined
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          prepend-icon="mdi-lock"
          label="Password"
          v-model="password"
        ></v-text-field>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>
    <v-card-actions>
      <v-btn @click="login" color="primary">Login</v-btn>
      <v-btn color="info">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
    username: '',
    password: ''
  }),
  methods: {
    login() {
      const vm = this;
      const user = {
        username: vm.username,
        password: vm.password
      };
      this.$store.dispatch('login', user).then(() => {
        this.$router.push({ name: 'Dashboard' });
      });
    }
  }
};
</script>

<style>
</style>