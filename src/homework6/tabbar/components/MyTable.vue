<template>
    <table class="table table-bordered table-stripped">
        <!-- 表格标题区域 -->
        <thead>
            <tr>
                <slot name="header"></slot>
            </tr>
        </thead>
        <!-- 表格主体区域 -->
        <tbody>
            <tr v-for="item in list" :key="item.id">
                <slot name="list" :row="item"></slot>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'MyTable',
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style scoped lang="less">
.my-goods-list {
    .badge {
        margin-right: 5px;
    }
}
</style>
