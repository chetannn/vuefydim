<template>
  <v-snackbar 
    :color="$store.state.snackBarColor" 
    :timeout="0" 
    v-model="$store.state.showSnackBar">
    {{$store.state.snackBarText}}
    <v-btn @click="$store.state.showSnackBar = false" text>Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
    computed: {

    }
};
</script>

<style>
</style>