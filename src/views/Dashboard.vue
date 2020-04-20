<template>
  <div>
    <SearchPanel title="Programs" />
    <v-data-table
      :items-per-page="perPage"
      :server-items-length="totalItemsLength"
      @pagination="onPageChange"
      :headers="headers"
      :items="gridData"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Programs</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <FormDialog
            :formTitle="formTitle"
            :dialog="dialog"
            :editedItem="editedItem"
            @save="save"
          />
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <TableActionButtons @editItem="editItem(item)" @deleteItem="deleteItem(item)" />
      </template>
      <template v-slot:no-data>
        <v-btn color="primary">Reset</v-btn>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip
          small
          :color="item.status ? 'green' : 'red'"
          dark
        >{{ item.status ? 'Active' : 'InActive' }}</v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
// mixins
import {  crudMixin } from '@/mixins/crudMixin'
import { mapActions } from 'vuex'

import { crudActions } from '@/store/helpers'

export default {
  mixins: [crudMixin],
  data: () => ({
    headers: [
      { text: 'Id', value: 'id' },
      { text: 'Program Name', value: 'program_name' },
      { text: 'Program Description', value: 'program_description' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
  
    editedItem: {
      program_name: '',
      program_description: '',
      status: true
    },
    defaultItem: {
      program_name: '',
      program_description: '',
      status: true
    },
  }),
  methods: {
    ...crudActions
  }
};
</script>

<style>
</style>