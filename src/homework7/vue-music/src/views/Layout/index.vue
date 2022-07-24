<template>
    <div>
        <van-nav-bar :title="title" />
        <!-- 简单的方法 -->
        <!-- <van-nav-bar :title="$route.meta.title" />  -->
        <div style="padding-bottom: 48px">
            <router-view></router-view>
        </div>
        <van-tabbar route>
            <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    data() {
        return {
            title: this.$route.meta.title,
        }
    },
    watch: {
        // watch可以监听路由变化
        $route(val) {
            this.title = val.meta.title
        },
    },
}
</script>

<style></style>
