<script setup>
import { ref, defineProps } from 'vue'
import { getHotGoodsAPI } from '@/apis/detail'
import { useRoute } from 'vue-router'
// 定义组件属性
const props = defineProps({
    type: {
        type: Number,
        default: 1 // 默认值为1
    }
})

// 定义标题映射关系
const TITLEMAP = {
    1: '24小时热榜',
    2: '周热榜',
}

// 声明变量
let title = TITLEMAP[props.type] || '默认标题' // 根据类型设置标题，默认为 '默认标题'
const goodList = ref([])
const route = useRoute()

// 获取热销商品列表
const getHotList = async () => {
    try {
        const res = await getHotGoodsAPI({
            id: route.params.id,
            type: props.type
        })
        goodList.value = res.result
    } catch (error) {
        console.error('获取热销商品列表失败：', error)
    }
}

getHotList()
</script>

<template>
    <div class="goods-hot" v-if="title">
        <h3>{{ title }}</h3> <!-- 商品区块 -->
        <router-link :to="`/detail/${item.id}`" class="goods-item" v-for="item in goodList" :key="item.id">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="desc ellipsis">{{ item.desc }}</p>
            <p class="price">&yen;{{ item.price }}</p>
        </router-link>
    </div>
</template>



<style scoped lang="scss">
.goods-hot {
    h3 {
        height: 70px;
        background: $helpColor;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: normal;
    }

    .goods-item {
        display: block;
        padding: 20px 30px;
        text-align: center;
        background: #fff;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>