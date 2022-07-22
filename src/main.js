import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import Home from './homework6/views/Home.vue'
// import Catelog from './homework6/views/Catelog.vue'
// import My from './homework6/views/My.vue'
// import Oder from './homework6/views/Oder.vue'
// import Home from './homework6/view1/Home.vue'
// import News from './homework6/view1/News.vue'
// import Sports from './homework6/view1/Sports.vue'
// import GuoNei from './homework6/view1/GuoNei.vue'
// import GuoWai from './homework6/view1/GuoWai.vue'
// import HuaBian from './homework6/view1/HuaBian.vue'
// import MyGoodList from './homework6/tabbar/views/MyGoodList.vue'
// import MySearch from './homework6/tabbar/views/MySearch.vue'
// import MyUserInfo from './homework6/tabbar/views/MyUserInfo.vue'
import UI from './homework6/views2/Home.vue'
import Contacts from './homework6/views2/Contacts.vue'
import About from './homework6/views2/Aboot.vue'
import All from './homework6/views2/All.vue'
import Alice from './homework6/views2/Alice.vue'
import Bob from './homework6/views2/Bob.vue'
import One from './homework6/views2/One.vue'
import Two from './homework6/views2/Two.vue'
import Three from './homework6/views2/Three.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.directive('focus', {
    inserted(el) {
        el.focus()
    },
})
Vue.config.productionTip = false
Vue.use(VueRouter)
// const routes = [
//     {
//         path: '/home',
//         component: Home,
//     },
//     {
//         path: '/catelog',
//         component: Catelog,
//     },
//     {
//         path: '/oder',
//         component: Oder,
//     },
//     {
//         path: '/my',
//         component: My,
//     },
// ]

// const routes = [
//     {
//         path: '/home',
//         component: Home,
//     },
//     {
//         path: '/news',
//         component: News,
//     },
//     {
//         path: '/sports',
//         component: Sports,
//         children: [
//             {
//                 path: 'guonei',
//                 component: GuoNei,
//             },
//             {
//                 path: 'guowai',
//                 component: GuoWai,
//             },
//             {
//                 path: 'huabian',
//                 component: HuaBian,
//             },
//         ],
//     },
// ]
// const routes = [
//     {
//         path: '/',
//         redirect: '/goodlist',
//     },
//     {
//         path: '/goodlist',
//         component: MyGoodList,
//     },
//     {
//         path: '/search',
//         component: MySearch,
//     },
//     {
//         path: '/my',
//         component: MyUserInfo,
//     },
// ]
const routes = [
    {
        path: '/',
        redirect: '/ui',
    },
    {
        path: '/ui',
        component: UI,
    },
    {
        path: '/contacts',
        component: Contacts,
        children: [
            {
                path: '/all',
                component: All,
                name: 1,
            },
            {
                path: '/alice',
                component: Alice,
                name: 2,
            },
            {
                path: '/bob',
                component: Bob,
                name: 3,
                children: [
                    {
                        path: '/one',
                        component: One,
                    },
                    {
                        path: '/two',
                        component: Two,
                    },
                    {
                        path: '/three',
                        component: Three,
                    },
                ],
            },
        ],
    },
    {
        path: '/about',
        component: About,
    },
]
const router = new VueRouter({ routes })
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
