<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutStickyVue from './components/LayoutSticky.vue'
</script>

<template>
    <LayoutStickyVue />
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
</template>
