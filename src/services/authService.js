import axios from './axiosClient'

const authService = {
    async login(user) {
        return axios.post('users/authenticate', user)
    }
}

export default authService