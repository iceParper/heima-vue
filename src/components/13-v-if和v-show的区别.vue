<template>
    <div>
        <p v-show="isShow">我是v-show指令</p>
        <button @click="isShow = !isShow">click me show</button>
        <br />

        <p v-if="isIf">我是v-if指令</p>
        <button @click="isIf = !isIf">click me if</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            isIf: false,
            age: 18,
        }
    },

    mounted() {},

    methods: {},
}
</script>
