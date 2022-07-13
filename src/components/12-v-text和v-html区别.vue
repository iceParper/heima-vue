<template>
    <div>
        <p v-text="str"></p>
        <p v-html="str"></p>
    </div>
</template>

<script>
// 需求：str 变量渲染到页面上
export default {
    data() {
        return {
            str: '<h1>我是一个h1</h1>',
        };
    },
};
</script>
