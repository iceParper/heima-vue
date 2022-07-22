<template>
    <div>
        <h1>BobPage</h1>
        <ul>
            <li><router-link to="/one">1</router-link></li>
            <li><router-link to="/two">2</router-link></li>
            <li><router-link to="/three">3</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'BobPage',
}
</script>

<style></style>
