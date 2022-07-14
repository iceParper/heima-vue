<template>
    <div>
        <div>{{ username }}</div>
        <span>用户名</span>
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
