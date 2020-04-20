<template>
  <div>
    <v-btn @click="$emit('editItem')" rounded small dark class="ma-2" color="green">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn @click="$emit('deleteItem')" rounded small dark class="ma-2" color="red">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
    name: 'TableActionButtons'
};
</script>

<style>
</style>