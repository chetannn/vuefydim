<template>
  <div>
    <SearchPanel title="Programs" />
    <v-data-table
      :items-per-page="perPage"
      :server-items-length="totalItemsLength"
      :options.sync="pagination"
      :headers="headers"
      :items="gridData"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2 ml-2" v-on="on">
                <v-icon>mdi-plus</v-icon>New
              </v-btn>
              <v-btn class="mb-2" color="warning">
                <v-icon>mdi-autorenew</v-icon>Reload
              </v-btn>
            </template>

            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="12">
                      <v-text-field outlined v-model="editedItem.program_name" label="Program Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="12">
                      <v-textarea
                        outlined
                        label="Program Description"
                        v-model="editedItem.program_description"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="12" sm="6">
                      <v-checkbox v-model="editedItem.status" label="Status"></v-checkbox>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="info" class="white--text" @click="close">Cancel</v-btn>
                <v-btn color="green" class="white--text" @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
import { crudMixin } from '@/mixins/crudMixin'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('programs')
import { defaultActionTypes } from '@/store/helpers'

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
    }
  }),
  methods: {
    ...mapActions(defaultActionTypes)
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Program' : 'Edit Program'
    }
  }
}
</script>

<style>
</style>