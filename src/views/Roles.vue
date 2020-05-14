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
      class="elevation-1"
    />
  </div>
</template>

<script>
import { crudMixin } from '@/mixins/crudMixin'
import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('users')
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