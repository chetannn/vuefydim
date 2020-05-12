<template>
  <div>
    <h1>Settings Page</h1>
    <v-card class="mx-auto" max-width="600">
      <v-card-title>
        <h3>Application Settings</h3>
      </v-card-title>
      <v-card-subtitle>Change Application Settings</v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text>
        <v-form>
          <v-text-field outlined label="App Title"></v-text-field>
          <v-text-field outlined label="App Subtitle"></v-text-field>
          <v-label>Choose Color Theme</v-label>
          <v-color-picker v-model="color" class="mb-4" show-swatches></v-color-picker>
        </v-form>
      </v-card-text>

      <v-divider />
      <v-card-actions>
        <v-btn color="success">Save</v-btn>
        <v-btn color="info">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: ''
    };
  },
  methods: {},
  mounted() {
    console.log('root', this.$root);
  }
};
</script>

<style lang="scss" scoped>
.v-avatar {
  cursor: pointer;
}
</style>