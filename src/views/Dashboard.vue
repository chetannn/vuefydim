<template>
  <div>
    <v-expansion-panels class="mb-4">
      <v-expansion-panel>
        <v-expansion-panel-header>Programs</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-text-field outlined label="Program Name"></v-text-field>
          </v-row>

          <v-row>
            <v-checkbox label="Status"></v-checkbox>
          </v-row>

          <v-row>
            <v-btn class="mr-4" rounded color="primary">
              <v-icon>mdi-magnify</v-icon>Search
            </v-btn>
            <v-btn rounded class="info">
              <v-icon>mdi-autorenew</v-icon>Reset
            </v-btn>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-data-table :items-per-page="perPage" :server-items-length="totalItemsLength"  @pagination="onPageChange" :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat >
          <v-toolbar-title>Programs</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" rounded dark class="mb-2 ml-2" v-on="on">
                <v-icon>mdi-plus</v-icon> 
               New
              </v-btn>
               <v-btn class="mb-2" color="warning" rounded>
                <v-icon>mdi-autorenew</v-icon> 
                Reload
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
                        label="Project Description"
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
                <v-btn color="info" class="white--text" rounded @click="close">Cancel</v-btn>
                <v-btn color="green" class="white--text" rounded @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn @click="editItem(item)" rounded small dark class="ma-2" color="green">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn @click="deleteItem(item)" rounded small dark class="ma-2" color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
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
export default {
  data: () => ({
    dialog: false,
    headers: [
      { text: "Id", value: "id" },
      { text: "Program Name", value: "program_name" },
      { text: "Program Description", value: "program_description" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      program_name: "",
      program_description: "",
      status: true
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    totalItemsLength: 0,
    perPage: 5
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Program" : "Edit Program";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    // this.initialize();
  },

  methods: {
    initialize() {
      //   this.desserts = [
      //   ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        fetch("http://localhost:59567/api/programs", {
          headers: {
            "content-type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(this.editedItem)
        })
          .then(res => res.json())
          .then(({ data }) => {
            console.log(data);
            //   this.desserts.push(this.editedItem);
          });
      }
      this.close();
    },
    onPageChange(pageConfig) {
      console.log('page object:',pageConfig)
      //ajax request
      fetch(`http://localhost:59567/api/programs?page=${pageConfig.page}&pageSize=${pageConfig.itemsPerPage}`)
      .then(res => res.json())
      .then((resData) => {
          this.desserts = resData.data
          this.totalItemsLength = resData.total
      })
    }
  },
  mounted() {
    // fetch("http://localhost:59567/api/programs")
    //   .then(res => res.json())
    //   .then(({ data }) => {
    //     this.desserts = data;
    //     this.totalItemsLength = data.total
    //   });
  }
};
</script>

<style>
</style>