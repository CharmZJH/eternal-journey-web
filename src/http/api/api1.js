import request from '@/http/request'

// get demo
export function testGet(params) {
    return request({
        url: '/get',
        method: 'get',
        params
    })
}
// post demo
export function testPost(data) {
    return request({
        url: '/post',
        method: 'post',
        data
    })
}