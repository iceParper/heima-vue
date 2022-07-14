<template>
    <div>
        <a href="http://www.baidu.com" @click="handleBaidu">百度</a>
        <hr />
        <a href="http://www.taobao.com" @click="handleTaobao(5, $event)">淘宝</a>
    </div>
</template>

<script>
export default {
    methods: {
        handleBaidu(e) {
            e.preventDefault()
        },
        handleTaobao(num, e) {
            console.log(num)
            console.log(e)
            e.preventDefault()
        },
    },
}
</script>
