<template>
    <div>
        <router-link to="/home">首页</router-link>
        <router-link to="/catelog">分类</router-link>
        <router-link to="/oder">订单</router-link>
        <router-link to="/my">我的</router-link>
        <h2>路由切换页面显示↓</h2>
        <router-view></router-view>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
