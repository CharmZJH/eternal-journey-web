import axios from 'axios';

const baseURL = '/api'

const service = axios.create({
    baseURL,
    timeout: 20*1000
});
// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
       return response
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service;
