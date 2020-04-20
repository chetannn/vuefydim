<template>
  <v-dialog v-model="showDialog" max-width="500px">
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
                <v-btn color="green" class="white--text" rounded @click="$emit('save')">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
</template>

<script>
export default {
    name: 'FormDialog',
    props: ['dialog', 'formTitle', 'editedItem'],
   data() {
     return {
       showDialog: this.dialog
     }
   },
   methods: {
     close() {
       this.showDialog = false;
     }
   }
}
</script>

<style>

</style>