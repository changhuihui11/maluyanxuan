// 对ajax进行二次封装
import axios from 'axios'
import { Notify, showNotify } from 'vant'
// npm run dev  开发 process.env.NODE_ENV 'development'
//  npm run build 打包 process.env.NODE_ENV 'production'
let http = axios.create({
    // 配置对象
    // 基础路径 发请求的时候 路径当中会出现api 
    baseURL: process.env.NODE_ENV === 'production' ? 'http://backend-pai-01.newbee.ltd/api/v1/' : '/api/v1',
    timeout: 5000
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    config.headers.token = localStorage.getItem('token')
    return config
}, function (error) {
    return Promise.reject(error)
})
// 添加响应拦截器
http.interceptors.response.use((response) => {
    // 成功的回调函数 服务器响应数据回来之后 响应拦截器可以检测到
    let data = response.data
    // 在这里可以判断不同的状态码
    if (data.resultCode != 200) {
        showNotify({
            type: 'danger',
            message: data.message || '系统繁忙'
        })
    }
    return data
}, (error) => {
    Notify({
        type: 'danger',
        message: '系统繁忙,稍后再试'
    })
    return promise.reject(new Error('faile'))
})
export default http;