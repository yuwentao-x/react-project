import axios from 'axios'

// 浏览器的同源策略，只是限制ajax跨域
const baseURL = 'http://localhost:9000'

const instance = axios.create({
    baseURL,
    // 超时限制
    timeout: 7000,
    // 请求头设置
    headers: {}
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
    // 加token
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
    // 数据过滤
    let res = null
    if(response.status === 200){
        if(response.data && response.data.code === 0) {
            res = response.data.data
        }
    }
    return res;
}, function (error) {
    
    return Promise.reject(error);
});

export default instance