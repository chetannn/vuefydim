<template>
  <v-card width="400" class="mx-auto mt-10">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text>
      <v-form>
        <v-text-field outlined prepend-icon="mdi-account-circle" label="Username"></v-text-field>
        <v-text-field
          outlined
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          prepend-icon="mdi-lock"
          label="Password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="primary">Login</v-btn>
      <v-btn color="info">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    showPassword: false
  })
};
</script>

<style>
</style>