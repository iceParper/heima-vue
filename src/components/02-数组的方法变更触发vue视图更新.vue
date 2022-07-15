<template>
    <div>
        <ul>
            <li v-for="(val, index) in arr" :key="index">
                {{ val }}
            </li>
        </ul>
        <button @click="handleReverse">数组翻转</button>
        <button @click="handleSplice">截取前3个</button>
        <button @click="handleSet">更新第一个元素值</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [5, 3, 9, 2, 1],
        }
    },
    methods: {
        handleReverse() {
            this.arr.reverse()
        },
        handleSplice() {
            this.arr.splice(2, 2)
        },
        handleSet() {
            // 可以更新视图
            // 当直接对数组进行赋值操作的时候是不会进行视图更新的，可以用$set来解决
            this.$set(this.arr, 0, 1000)
            console.log(this)
        },
    },
}
</script>
