import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Find from './views/Find.vue'
import My from './views/My.vue'
import Part from './views/Part.vue'
import NotFound from './views/NotFound.vue'
import Ranking from './views/Second/Ranking.vue'
import Recommend from './views/Second/Recommend.vue'
import SongList from './views/Second/SongList.vue'
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/my',
    },
    {
        path: '/find',
        component: Find,
        name: 'find',
        redirect: '/find/recommend',
        children: [
            {
                path: 'ranking',
                component: Ranking,
            },
            {
                path: 'recommend',
                component: Recommend,
            },
            {
                path: 'songList',
                component: SongList,
            },
        ],
    },
    {
        path: '/my',
        component: My,
        name: 'my',
    },
    {
        path: '/part/:age',
        component: Part,
        name: 'part',
    },
    {
        path: '*',
        component: NotFound,
    },
]
const router = new VueRouter({
    routes,
    mode: 'history',
})
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
