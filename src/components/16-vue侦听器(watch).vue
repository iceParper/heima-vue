<template>
    <div>
        <!-- watch侦听器: 作用可以侦听data/computed属性值改变, 当侦听的属性发生变化的时候，会触发对应的处理函数 
    语法：
    watch: {
      变量名 (newVal, oldVal){
        // 变量名对应值改变这里自动触发
      }
    }-->
        <input type="text" v-model="name" />
        <div>{{ obj.msg }}</div>
        <button @click="handleMsg">click</button>
    </div>
</template>

<script>
export default {
    name: 'VueTest',
    data() {
        return {
            name: '',
            obj: {
                msg: 'sss',
            },
        }
    },
    watch: {
        name(newVal, oldVal) {
            console.log(newVal)
            console.log(oldVal)
        },
        // cloneObj: {
        //     deep: true,
        //     handler(newVal, oldVal) {
        //         console.log(newVal)
        //         console.log(oldVal)
        //     },
        // },
        'obj.msg'(newVal, oldVal) {
            console.log(newVal)
            console.log(oldVal)
        },
    },
    methods: {
        handleMsg() {
            this.obj.msg += 1
        },
    },
    computed: {
        cloneObj() {
            return JSON.parse(JSON.stringify(this.obj))
        },
    },
}
</script>
