<template>
  <div>
    <v-card class="mx-auto" max-width="600">
      <v-card-title>
        <h3>Application Settings</h3>
      </v-card-title>
      <v-card-subtitle>Change Application Settings</v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text>
        <v-form>
          <v-text-field v-model="$store.state.appBarTitle" outlined label="App Title"></v-text-field>
          <v-text-field v-model="$store.state.appBarSubtitle" outlined label="App Subtitle"></v-text-field>
          <v-label>Choose Appbar Color</v-label>
          <v-color-picker
            @update:color="colorUpdate"
            swatches-max-height="50"
            mode="hexa"
            :value="appBarColor"
            class="mb-4"
          ></v-color-picker>
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
import { mapState } from 'vuex'
import { SET_APP_BAR_COLOR } from '@/store/mutation-types'

export default {
  methods: {
    colorUpdate(colorOption) {
      this.$store.commit(SET_APP_BAR_COLOR, colorOption.hexa)
    }
  },
  computed: {
    ...mapState(['appBarColor'])
  }
}
</script>

<style lang="scss" scoped>
.v-avatar {
  cursor: pointer;
}
</style>