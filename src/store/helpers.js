import { mapGetters, mapActions } from 'vuex'

const crudActionTypes = {
    getAll: 'getAll',
    save: 'save',
    delete: 'delete'
}

export const authComputed = {
    ...mapGetters(['loggedIn'])
}

export const crudActions = {
    ...mapActions(crudActionTypes)
}