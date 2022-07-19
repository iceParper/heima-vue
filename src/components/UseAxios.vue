<template>
  <div>
    <p>1. 获取所有图书信息</p>
    <button @click="getBook" :disabled="disabled">点击-查看控制台</button>
    <p>2. 查询某本书籍信息</p>
    <input type="text" placeholder="请输入要查询 的书名" v-model="bookname" />
    <button @click="serchBook">查询</button>
    <p>3. 新增图书信息</p>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.bookname" />
    </div>
    <div>
      <input type="text" placeholder="作者" v-model="bookObj.author" />
    </div>
    <div>
      <input type="text" placeholder="出版社" v-model="bookObj.publisher" />
    </div>
    <button @click="handleAdd">发布</button>
  </div>
</template>

<script>
// 目标1: 获取所有图书信息
// 1. 下载axios
// yarn add axios/ npm i axios/ cnpm i axios
// 2. 引入axios 做接口请求
import axios from 'axios'

// 3. 发起axios请求
// 4. 全局配置
export default {
  data() {
    return {
      bookObj: {
        // 参数名提前和后台的参数名对上-发送请求就不用再次对接了
        bookname: '',
        author: '',
        publisher: '',
      },
      bookname: '',
      disabled: false,
    }
  },
  methods: {
    async getBook() {
      try {
        this.disabled = true

        let res = await axios.get('/api/getbooks')
        console.log(res)
        this.disabled = false
      } catch (error) {
        this.disabled = false
        console.log(error)
      }
    },
    async serchBook() {
      let { data: res } = await axios({
        url: '/api/getbooks',
        params: {
          bookname: this.bookname,
        },
      })
      console.log(res)
    },
    async handleAdd() {
      let { data: res } = await axios({
        url: '/api/addbook',
        method: 'post',
        data: {
          ...this.bookObj,
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
        },
      })
      console.log(res)
    },
  },
}
</script>

<style></style>
