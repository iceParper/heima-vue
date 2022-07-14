<template>
    <div>
        <h1>{{ msg }}</h1>
        <button @click="reverseWords">逆转世界</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello, World',
        }
    },
    methods: {
        reverseWords() {
            this.msg = this.msg.split('').reverse().join('')
        },
    },
}
</script>
