<template>
  <v-snackbar 
    :color="$store.state.snackBarColor" 
    :timeout="0" 
    v-model="$store.state.showSnackBar"
    :bottom="$store.state.snackBarPosition === 'bottom'"
    :top="$store.state.snackBarPosition === 'top'"
    >
    {{$store.state.snackBarText}}
    <v-btn @click="$store.state.showSnackBar = false" text>Close</v-btn>
  </v-snackbar>
</template>