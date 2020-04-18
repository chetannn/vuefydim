import axios from 'axios'
import Vue from 'vue'

const axiosClient = axios.create({
    baseURL: 'http://localhost:59567/api/',
})

Vue.prototype.$http = axiosClient