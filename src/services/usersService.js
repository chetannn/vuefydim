import axios from './axiosClient'

const usersService = {
    async getAll(pageConfig) {
        return axios.get(`users?page=${pageConfig.page}&pageSize=${pageConfig.itemsPerPage}`)
    },
    async insert(user) {
        return axios.post('users/register', user);
    },
    async delete(id) {
      return axios.delete(`users?id=${id}`)
    },
    async update(user) {
        return axios.put(`users/${user.id}`, user)
    }
}

export default usersService