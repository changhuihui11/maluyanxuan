<template>
    <div>
        <van-row class="top">
            <van-col span="3">
                <van-icon name="ellipsis" />
            </van-col>
            <van-col span="17" class="center">
                <van-tag type="success">码路严选</van-tag>
                <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
            </van-col>
            <van-col span="4">
                <van-tag plain size="large">登录</van-tag>
            </van-col>
        </van-row>
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
        <van-swipe-item v-for="item in banner" :key="item.carouselUrl
        ">
            <img :src="item.carouselUrl
            " alt="">
        </van-swipe-item>

    </van-swipe>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { getIndexInfo } from "../../api/index.js"
let banner = ref([])
onMounted(() => {
    getData()
    console.log(banner.value);
})
let getData = () => {
    getIndexInfo().then(data => {
        console.log(data.data);
        banner.value = data.data.carousels
    })
}
</script>
<style scoped>
.top {
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    background-color: #1BAEAE;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
}

.van-col {

    text-align: center;
}

.van-icon {
    color: aqua;
}

.center {
    display: flex;
    border: 1px solid #BBE7E7;
    border-radius: 10px;
}


.van-tag {
    font-size: 16px;
    color: green;
}

.van-swipe {
    width: 100%;
    height: 250px;
}

img {
    width: 100%;
    height: 100%;
}
</style>