<template>
    <div>
        <router-link to="/home">主页</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/sports">体育</router-link>
        <h2>路由切换页面显示↓</h2>
        <router-view></router-view>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
