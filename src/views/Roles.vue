<template>
  <div>
    <h1>Roles</h1>
    <SearchPanel title="Roles" />
    <v-data-table
      :items-per-page="perPage"
      :server-items-length="totalItemsLength"
      :headers="headers"
      :items="gridData"
      :options.sync="pagination"
      :loading="isLoading"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>All Roles</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { crudMixin } from '@/mixins/crudMixin'
import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('roles')
import { defaultActionTypes } from '@/store/helpers'
export default {
  mixins: [crudMixin],
  data: () => ({
    headers: [
      { text: 'Id', value: 'id' },
      { text: 'Role Name', value: 'username' },
      { text: 'Actions', value: 'actions', sortable: false }
    ]
  }),
  methods: {
    ...mapActions(defaultActionTypes)
  }
}
</script>

<style>
</style>