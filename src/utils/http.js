import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'

// 创建axios实例
const httpinstance = axios.create({
    // 设置url拼接
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// httpinstance.interceptors.request.use(config => {
//     // 在发送请求前 做什么 这里逻辑是什么都不做
//     return config
//     // 请求发送错误 返回一个Promise 这个用来显示请求发送错误的信息
// }, e => Promise.reject(e))

// axios请求拦截器
httpinstance.interceptors.request.use(config => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
// 在服务器响应后进行处理
// 处理逻辑是响应成功则把正确的data打印出来，失败则使用promise对象给出错误信息
httpinstance.interceptors.response.use(res => res.data, e => {
    //统一错误提示  
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })
    // 401 token 失效处理
    //1、清除本地用户数据
    //2、跳转到登录页
    if (e.response.status === 401) {
     
        const userStore = useUserStore()

        userStore.clearUserInfo()
        router.push('/login')
    }

    return Promise.reject(e)
})


export default httpinstance