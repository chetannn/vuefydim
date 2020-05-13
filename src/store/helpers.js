import { mapGetters } from 'vuex'

const crudActionTypes = {
  getAll: 'getAll',
  save: 'save',
  delete: 'delete'
}

export const defaultActionTypes = ['getAll', 'insert', 'delete', 'update']

export const authComputed = {
  ...mapGetters(['loggedIn'])
}

export function getMappedActions(storeModuleName) {
  return defaultActionTypes.map(act => `${storeModuleName}/${act}`)
}
