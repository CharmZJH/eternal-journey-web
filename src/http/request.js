import axios from 'axios';

const baseURL = '/api'

const get = axios.create({
    method: 'get',
    baseURL,
    timeout: 5000,
    headers: {"content-type": "application/x-www-form-urlencoded", "Accept": "application/json"},
});
const post = axios.create({
    method: 'post',
    baseURL,
    timeout: 5000,
    headers: {"content-type": "application/x-www-form-urlencoded", "Accept": "application/json"},
});
post.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject();
    }
);
const download = axios.create({
    method: 'post',
    baseURL,
    timeout: 8000,
    headers: {"content-type": "application/x-www-form-urlencoded", "Accept": "application/octet-stream"},
});

download.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject();
    }
);
export default {get, post, download};
