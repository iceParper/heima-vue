<template>
  <div>
    <p>1. 获取原生DOM元素</p>
    <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>
    <Demo ref="myDemo" />
    <p>3. vue更新DOM是异步的</p>
    <p ref="myP">{{ count }}</p>
    <button @click="btn">点击count+1, 马上提取p标签内容</button>
  </div>
</template>

<script>
// ref $refs ==> 获取dom元素/组件

// 1. 创建组件/引入组件/注册组件/使用组件
// 2. 给组件/dom 起别名ref 起一个标记的作用
// 3. 获取组件对象/dom元素
import Demo from './Child/Demo-1.vue'
export default {
  name: 'MoreTest',
  data() {
    return {
      count: 0,
    }
  },
  beforeCreate() {
    this.$nextTick(() => {
      console.log(this.$refs.myP)
    })
  },
  mounted() {
    console.log(this.$refs.myH)
    console.log(this.$refs.myDemo)
    console.log(this.$refs.myDemo.msg)
    console.log(this.$refs.myP)
  },
  methods: {
    btn() {
      this.count++
      this.$nextTick(() => {
        console.log(this.$refs.myP.innerHTML)
      })
    },
  },
  components: {
    Demo,
  },
}
</script>
