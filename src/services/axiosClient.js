import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:59567/api/'
})

export default axiosClient
