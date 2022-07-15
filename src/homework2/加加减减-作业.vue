<template>
    <div id="app">
        <ul>
            <li v-for="(item, index) in arr" :key="index">
                <span>{{ item }}</span>
                <button @click="handleDel(index)">删除</button>
            </li>
        </ul>
        <button @click="handleAdd">生成</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [1, 5, 3],
        }
    },
    methods: {
        handleAdd() {
            let num = Math.floor(Math.random() * 10)
            console.log(Math.floor(Math.random() * 10))
            this.arr.push(num)
        },
        handleDel(index) {
            this.arr.splice(index, 1)
        },
    },
}
</script>
