<template>
    <div>
        我是test
    </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
    setup() {
        // 使用 onMounted 钩子在页面加载后执行代码
        onMounted(() => {
            console.log('页面加载完成')
        })

        return {}
    }
}
</script>
