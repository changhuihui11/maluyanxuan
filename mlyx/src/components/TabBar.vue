<template>
    <div>
        <van-tabbar route>
            <van-tabbar-item replace to="/home" icon="home-o">
                <span>首页</span>
                <template #icon>
                    <span class="icon iconfont icon-shouye"></span>
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/catetory">
                <span>分类</span>
                <template #icon>
                    <span class="icon iconfont icon-grouping"></span>
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/cart">
                <span>购物车</span>
                <template #icon>
                    <span class="icon iconfont icon-gouwuche"></span>
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/user">
                <span>我的</span>
                <template #icon>
                    <span class="icon iconfont icon-31wode"></span>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>

</script>