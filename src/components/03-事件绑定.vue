<template>
    <div>
        <p>你要购买商品的数量: {{ count }}</p>
        <button @click="count++">+1</button>
        <button @click="handleAdd">+1</button>
        <button @click="handleAdd2(5)">+5</button>
        <button @click="handleSub">减少1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 1,
        }
    },
    methods: {
        handleAdd() {
            this.count++
        },
        handleAdd2(num) {
            this.count += num
        },
        handleSub() {
            this.count--
        },
    },
}
</script>
