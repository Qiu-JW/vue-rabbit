<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutStickyVue from './components/LayoutSticky.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
// 触发获取导航列表的action
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())

</script>

<template>
    <LayoutStickyVue />
    <LayoutNav />
    <LayoutHeader />
    <Category />
    <Home />
    <LayoutFooter />
</template>
