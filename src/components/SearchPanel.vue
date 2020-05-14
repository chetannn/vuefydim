<template>
  <v-expansion-panels class="mb-4">
    <v-expansion-panel>
      <v-expansion-panel-header>{{title}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-text-field outlined label="Program Name"></v-text-field>
        </v-row>

        <v-row>
          <v-checkbox label="Status"></v-checkbox>
        </v-row>

        <v-row>
          <v-btn class="mr-4" color="primary">
            <v-icon>mdi-magnify</v-icon>Search
          </v-btn>
          <v-btn class="info">
            <v-icon>mdi-autorenew</v-icon>Reset
          </v-btn>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'SearchPanel',
  props: ['title']
}
</script>

<style>
</style>