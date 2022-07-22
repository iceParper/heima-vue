<template>
    <div>
        <ul>
            <li><router-link to="/all">All</router-link></li>
            <li><router-link to="/alice">Alice</router-link></li>
            <li><router-link to="/bob">Bob</router-link></li>
        </ul>
        <button @click="handleClick">随机显示</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ContactsPage',
    methods: {
        handleClick() {
            let name = Math.floor(Math.random() * 3 + 1)
            this.$router.push({
                name,
            })
        },
    },
}
</script>

<style></style>
