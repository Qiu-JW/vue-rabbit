import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'


export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const cartStore = useCartStore()

    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
        //合并购物车的操作
        await mergeCartAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        //获取最新的购物车列表
        cartStore.updateNewList()
    }

    // 退出时清除用户信息 
    const clearUserInfo = () => {
        userInfo.value = {}
        //执行清除购物车的action
        cartStore.clearCart()
    }

    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true, // 启用持久化
})
