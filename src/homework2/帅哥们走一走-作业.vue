<template>
    <div id="app">
        <ul>
            <li v-for="item in myArr" :key="item">{{ item }}</li>
        </ul>
        <button @click="handleClick">走一走</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myArr: ['帅哥', '美女', '程序猿'],
        }
    },
    methods: {
        handleClick() {
            this.myArr.push(this.myArr[0])
            this.myArr.shift()
        },
    },
}
</script>
