import axios from './axiosClient'

const programService = {
    async getAll(pageConfig) {
        return axios.get(`programs?page=${pageConfig.page}&pageSize=${pageConfig.itemsPerPage}`)
    },
    async save(program) {
        return axios.post('programs', program);
    },
    async delete(id) {
      return axios.delete(`programs?id=${item.id}`)
    }
}

export default programService