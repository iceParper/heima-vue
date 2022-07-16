<template>
    <div id="app">
        <div class="container">
            <!-- 顶部框模块 -->
            <div class="form-group">
                <div class="input-group">
                    <h4>品牌管理</h4>
                </div>
            </div>

            <!-- 数据表格 -->
            <table class="table table-bordered table-hover mt-2">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>资产名称</th>
                        <th>价格</th>
                        <th>创建时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>

                        <!-- 如果价格超过100，就有red这个类 -->
                        <td :class="{ red: item.price >= 100 }">{{ item.price }}</td>
                        <td>{{ item.time | dateFormat('YYYY-MM-DD hh-mm-ss') }}</td>
                        <!-- <td>{{ format(item.time) }}</td> -->
                        <td><a href="#" @click="handleDel(item.id)">删除</a></td>
                    </tr>
                    <tr style="background-color: #eee">
                        <td>统计:</td>
                        <td colspan="2">总价钱为:{{ getSum }}</td>
                        <td colspan="2">平均价: {{ getAvg }}</td>
                    </tr>
                </tbody>
                <tfoot v-if="list.length == 0">
                    <tr>
                        <td colspan="5" style="text-align: center">暂无数据</td>
                    </tr>
                </tfoot>
            </table>

            <!-- 添加资产 -->
            <form class="form-inline" style="display: flex" ref="formRef">
                <div class="form-group">
                    <div class="input-group">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="资产名称"
                            v-model="name"
                        />
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div class="form-group">
                    <div class="input-group">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="价格"
                            v-model="price"
                        />
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <!-- 阻止表单提交 -->
                <button class="btn btn-primary" @click="handleAdd">添加资产</button>
            </form>
        </div>
    </div>
</template>

<script>
// 铺设页面 1. 表格样式正确展示 2.数据渲染到页面
// 1. 下载bootstrap, main.js引入bootstrap.css
//    yarn add bootstrap
// 2. 把list数组 - 铺设表格
// 3. 修改价格颜色 大于100 颜色为红
import moment from 'moment'

export default {
    name: 'VueDemo',
    data() {
        return {
            list: JSON.parse(localStorage.getItem('list')),
            name: '',
            price: '',
        }
    },
    methods: {
        format(date) {
            return moment(date).format('YYYY-MM-DD hh-mm-ss')
        },
        // 删除按钮
        handleDel(id) {
            const index = this.list.findIndex(item => item.id == id)
            this.list.splice(index, 1)
        },
        handleAdd(e) {
            e.preventDefault()
            let id = this.list.length ? this.list[this.list.length - 1].id + 1 : 100
            console.log(id)
            // console.log(this.name, this.price)
            if (this.name.trim() && this.price.trim()) {
                this.list.push({
                    id,
                    name: this.name,
                    price: this.price,
                    time: new Date(),
                })
                this.name = ''
                this.price = ''
                console.log(this.list)
            } else {
                alert('请输入完整信息~')
            }
        },
    },
    filters: {
        dateFormat(date, gs) {
            return moment(date).format(gs)
        },
    },
    computed: {
        getSum() {
            return this.list.reduce((sum, next) => {
                sum += +next.price
                return sum
            }, 0)
        },
        getAvg() {
            return (this.getSum / (this.list.length || 1)).toFixed(1)
        },
    },
    watch: {
        list: {
            deep: true,
            handler(val) {
                localStorage.setItem('list', JSON.stringify(val || []))
            },
        },
        'list.length'() {
            console.log('长度发生了变化')
        },
    },
}
</script>

<style>
.red {
    color: red;
}
</style>
