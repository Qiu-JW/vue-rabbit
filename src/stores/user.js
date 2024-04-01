// 管理用户数据相关

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
    // 1. 定义管理用户数据的state
    const userInfo = ref({})
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        try {
            const res = await loginAPI({ account, password })
            console.log(res)
            userInfo.value = res.data // 假设返回的数据在 res.data 中
        } catch (error) {
            console.error('Error fetching user info:', error)
        }
    }

    // 3. 以对象的格式把state和action return
    return {
        getUserInfo
    }
}, {
    persist: true,
})