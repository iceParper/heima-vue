<template>
    <div>
        <!-- v-show 
    v-show ='变量/表达式'
    变量/表达式 值 为 false 的时候 隐藏dom元素
    变量/表达式 值 为 true 的时候 显示dom元素

    变量/表达式 为 false 时 dom元素存在的 通过display: none;
    变量/表达式 为 true 时 dom元素存在的 通过 移除 display: none;

    v-show：经常切换 
    -->
        <p v-show="isShow">我是v-show指令</p>
        <button @click="isShow = !isShow">click me show</button>
        <br />
        <!-- v-if ='变量/表达式'
    变量/表达式 值 为 false 的时候 隐藏dom元素
    变量/表达式 值 为 true 的时候 显示dom元素 

    变量/表达式 为 false 时 dom元素不存在的 
    变量/表达式 为 true 时 dom元素存在的 直接生成 // 节点直接删除/生成

    使用场景： 如果一个元素一进入页面 要么显示 要么不现实，后续不会进行切换
    -->
        <p v-if="isIf">我是v-if指令</p>
        <button @click="isIf = !isIf">click me if</button>
    </div>
</template>

<script>
// 思考： 如果一个元素一进入页面 要么显示 要么不现实，后续不会进行切换， 用谁？？

export default {
    data() {
        return {
            isShow: false,
            isIf: false,
            age: 18,
        };
    },

    mounted() {},

    methods: {},
};
</script>
