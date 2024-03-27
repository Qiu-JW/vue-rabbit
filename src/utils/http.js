import axios from 'axios'

// 创建axios实例
const httpinstance = axios.create({
    // 设置url拼接
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
httpinstance.interceptors.request.use(config => {
    // 在发送请求前 做什么 这里逻辑是什么都不做
    return config
    // 请求发送错误 返回一个Promise 这个用来显示请求发送错误的信息
}, e => Promise.reject(e))

// axios响应式拦截器
// 在服务器响应后进行处理
// 处理逻辑是响应成功则把正确的data打印出来，失败则使用promise对象给出错误信息
httpinstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})


export default httpinstance