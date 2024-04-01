import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
    // 1. 定义管理用户数据的 state
    const userInfo = ref({})

    // 2. 定义获取接口数据的 action 函数
    const getUserInfo = async ({ account, password }) => {
        try {
            const res = await loginAPI({ account, password })
            userInfo.value = res.result

            // 存储到本地存储中
            localStorage.setItem('user', JSON.stringify(userInfo.value))
        } catch (error) {
            console.error('Failed to fetch user info:', error)
        }
    }

    return {
        getUserInfo
    }
}, {
    persist: true,
})
