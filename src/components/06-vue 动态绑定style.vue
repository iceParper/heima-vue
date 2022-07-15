<template>
    <div>
        <!-- 动态绑定style 语法 v-bind:style="对象" 
         v-bind:style = '{css属性名: 值}'-->
        <p :style="{ color: 'red', backgroundColor: 'pink' }">vue 动态绑定style</p>
        <!-- 需求： 点击按钮 切换字体大小 -->
        <p :style="{ color: 'skyblue', fontSize: fs + 'px' }">vue 动态绑定style111</p>
        <button @click="fs = 16">16px</button>
        <button @click="fs = 32">32px</button>
        <button @click="fs = 48">48px</button>
    </div>
</template>
<script>
export default {
    name: 'VueStyle',
    data() {
        return {
            fs: 12,
        }
    },
    methods: {},
}
</script>
