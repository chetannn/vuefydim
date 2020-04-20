<template>
  <div>
    <SearchPanel title="Programs" />
   <v-btn @click.stop="open">Open Modal</v-btn>
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
import axios from '@/services/axiosClient';
import SearchPanel from '@/components/SearchPanel';
import TableActionButtons from '@/components/TableActionButtons';
import FormDialog from '@/components/FormDialog';

// mixins
import {  crudMixin } from '@/mixins/crudMixin'

export default {
  components: {
    SearchPanel,
    FormDialog,
    TableActionButtons
  },
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
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Program' : 'Edit Program';
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
};
</script>

<style>
</style>