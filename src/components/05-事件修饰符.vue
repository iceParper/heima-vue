<template>
    <div @click="fatherFn">
        <button @click.stop="stopProP">.stop阻止事件冒泡</button>
        <a href="http://www.baidu.com" @click.stop.prevent>.prevent阻止默认行为</a>
        <button @click.once="once">.once程序运行期间, 只触发一次事件处理函数</button>
    </div>
</template>

<script>
export default {
    methods: {
        fatherFn() {
            console.log('fatherFn')
        },
        stopProP() {
            console.log('stopProP')
        },
        stopPrevent() {
            console.log('stopPrevent')
        },
        once() {
            console.log('cliclOnce')
        },
    },
}
</script>
