import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入初始化样式
import '@/styles/common.scss'
// 全局指令注册
import { lazyPlugin } from '@/directives'

// 引入全局组件插件
import { componentPlugin } from '@/components'

const app = createApp(App)

// 先调用 createPinia()
app.use(createPinia())

// 然后使用其他插件
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
