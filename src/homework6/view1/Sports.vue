<template>
    <div>
        <h2>体育改变人生</h2>
        <router-link to="/sports/guowai">国外新闻</router-link>
        <router-link to="/sports/guonei">国内新闻</router-link>
        <router-link to="/sports/huabian">花边新闻</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'SportsPage',
}
</script>

<style></style>
