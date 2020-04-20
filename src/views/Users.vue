<template>
  <div>
    <h1>Users</h1>
    <SearchPanel title="Users" />
    <v-data-table
      :items-per-page="perPage"
      :server-items-length="totalItemsLength"
      @pagination="onPageChange"
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Users</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" rounded dark class="mb-2 ml-2" v-on="on">
                <v-icon>mdi-plus</v-icon>New
              </v-btn>
              <v-btn class="mb-2" color="warning" rounded>
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
                      <v-text-field outlined v-model="editedItem.username" label="Username"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="12">
                      <v-text-field outlined label="Email" v-model="editedItem.email"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="12">
                      <v-text-field
                        outlined
                        label="Password"
                        type="password"
                        v-model="editedItem.password"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" sm="6">
                      <v-checkbox v-model="editedItem.status" label="Status"></v-checkbox>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="info" class="white--text" rounded @click="close">Cancel</v-btn>
                <v-btn color="green" class="white--text" rounded @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
       <TableActionButtons @editItem="editItem(item)" @deleteItem="deleteItem(item)" />
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
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
import SearchPanel from '@/components/SearchPanel'
import TableActionButtons from '@/components/TableActionButtons';


export default {
  components: {
    SearchPanel,
    TableActionButtons
  },
  data: () => ({
    dialog: false,
    headers: [
      { text: 'Id', value: 'id' },
      { text: 'Username', value: 'username' },
      { text: 'Email', value: 'email' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      username: '',
      password: '',
      status: true
    },
    totalItemsLength: 0,
    perPage: 5,
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),
  methods: {
    editItem(item) {},
    deleteItem(item) {},
    onPageChange(pageConfig) {
      axios
        .get(
          `users?page=${pageConfig.page}&pageSize=${pageConfig.itemsPerPage}`
        )
        .then(({ data: resData }) => {
          this.desserts = resData.data;
          this.totalItemsLength = resData.total;
        });
    },
    save() {},
    close() {},
    initialize() {}
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New User' : 'Edit User';
    }
  }
};
</script>

<style>
</style>