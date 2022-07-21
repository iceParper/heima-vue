<template>
    <div>
        <MyTable :list="list">
            <template #header>
                <th>#</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>标签</th>
                <th>操作</th>
            </template>
            <template #list="scoped">
                <td>{{ scoped.row.id }}</td>
                <td>{{ scoped.row.goods_name }}</td>
                <td>{{ scoped.row.goods_price }}</td>
                <td>
                    <input
                        class="tag-input form-control"
                        style="width: 100px"
                        type="text"
                        v-model="scoped.row.inputValue"
                        v-if="scoped.row.inputVisible"
                        @blur="scoped.row.inputVisible = false"
                        @keydown.enter="tagAdd(scoped.row)"
                        @keydown.esc="scoped.row.inputValue = ''"
                        v-focus
                    />
                    <button
                        v-else
                        style="display: block"
                        class="btn btn-primary btn-sm add-tag"
                        @click="scoped.row.inputVisible = true"
                    >
                        +Tag
                    </button>
                    <span
                        v-for="(item, index) in scoped.row.tags"
                        :key="index"
                        class="badge badge-warning"
                        style="margin-right: 5px"
                    >
                        {{ item }}
                    </span>
                </td>
                <td>
                    <button type="button" class="btn btn-danger" @click="handleDel(scoped.row.id)">
                        删除
                    </button>
                </td>
            </template>
        </MyTable>
    </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
export default {
    data() {
        return {
            list: [],
        }
    },
    components: {
        MyTable,
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.$axios({
                url: '/api/goods',
            }).then(res => {
                this.list = res.data.data
                console.log(this.list)
            })
        },
        handleDel(id) {
            // console.log(id)
            let index = this.list.findIndex(item => item.id == id)
            this.list.splice(index, 1)
            // this.getList()
            console.log(index)
        },
        tagAdd(obj) {
            if (obj.inputValue.trim().length == 0) {
                return alert('请输入标签')
            }
            let newTag = obj.inputValue
            obj.tags.push(newTag)
            console.log(obj)
            obj.inputValue = ''
            obj.inputVisible = false
        },
    },
}
</script>

<style></style>
