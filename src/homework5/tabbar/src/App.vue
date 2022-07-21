<template>
    <div id="app">
        <MyHeader></MyHeader>
        <div style="padding-top: 45px">
            <component :is="comName"></component>
        </div>
        <MyFooter :list="tabList"></MyFooter>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyTable from './components/MyTable.vue'
import MyGoodsList from './views/MyGoodList.vue'
import MyGoodsSearch from './views/MySearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'
export default {
    data() {
        return {
            comName: 'MyGoodsList',
            tabList: [
                {
                    iconText: 'icon-shangpinliebiao',
                    text: '商品列表',
                    componentName: 'MyGoodsList',
                },
                {
                    iconText: 'icon-sousuo',
                    text: '商品搜索',
                    componentName: 'MyGoodsSearch',
                },
                {
                    iconText: 'icon-user',
                    text: '我的信息',
                    componentName: 'MyUserInfo',
                },
            ],
            list: [],
        }
    },

    components: {
        MyHeader,
        MyFooter,
        MyTable,
        MyGoodsList,
        MyGoodsSearch,
        MyUserInfo,
    },
}
</script>

<style></style>
