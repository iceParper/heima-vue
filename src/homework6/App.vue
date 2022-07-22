<template>
    <div id="app">
        <MyHeader></MyHeader>
        <div style="padding-top: 45px">
            <router-view></router-view>
        </div>
        <MyFooter :list="tabList"></MyFooter>
    </div>
</template>

<script>
import MyHeader from './tabbar/components/MyHeader.vue'
import MyFooter from './tabbar/components/MyFooter.vue'
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
    },
}
</script>

<style></style>
