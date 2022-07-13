<template>
    <div>
        <h2>v-model指令的实现</h2>
        <input type="text" :value="username" @input="handleInput" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
        }
    },
    methods: {
        handleInput(e) {
            this.username = e.target.value
        },
    },
}
</script>
