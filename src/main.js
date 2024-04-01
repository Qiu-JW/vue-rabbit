import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
// 引入初始化样式
import '@/styles/common.scss'
// 全局指令注册
import { lazyPlugin } from '@/directives'

// 引入全局组件插件
import { componentPlugin } from '@/components'
const app = createApp(App)

const pinia = createPinia() // 创建 Pinia 实例
pinia.use(piniaPluginPersistedstate) // 在 Pinia 实例上应用插件
app.use(pinia) // 将 Pinia 实例应用到 app
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
