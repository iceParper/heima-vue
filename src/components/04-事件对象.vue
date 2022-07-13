<template>
    <div>
        <!-- 1. 事件触发, 无传值, 可以直接获取事件对象是 -->
        <a href="http://www.baidu.com" @click="handleBaidu">百度</a>
        <hr />
        <!-- 2. 事件触发, 传值, 需要手动传入$event -->
        <a href="http://www.taobao.com" @click="handleTaobao(5, $event)">淘宝</a>
    </div>
</template>

<script>
export default {
    methods: {
        handleBaidu(e) {
            e.preventDefault();
        },
        handleTaobao(num, e) {
            console.log(num);
            console.log(e);
            e.preventDefault();
        },
    },
};
</script>
