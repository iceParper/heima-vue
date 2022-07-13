<template>
    <div>
        <!-- 2. 值 -> 标签原生属性上 -->
        <!-- 语法: v-bind:原生属性名="vue变量" -->
        <!-- 语法: :原生属性名="vue变量" -->
        <a :href="url">点击去百度</a>
        <img :src="imgUrl" />
    </div>
</template>

<script>
// http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg
import img1 from '../assets/logo.png';
export default {
    data() {
        return {
            url: 'https://www.baidu.com/',
            imgUrl: img1,
        };
    },
};
</script>
