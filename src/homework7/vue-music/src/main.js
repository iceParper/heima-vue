import Vue from 'vue'
import App from './App.vue'
import '@/assets/reset.css'
import '@/assets/flexible'
import { router } from './router'
Vue.config.productionTip = false
import {
    Tabbar,
    TabbarItem,
    NavBar,
    Col,
    Row,
    Image as VanImage,
    Cell,
    CellGroup,
    Icon,
    Search,
} from 'vant'
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Search)
// import { recommendSongListAPI } from '@/api'
// recommendSongListAPI({ limit: 6 }).then(res => {
//     console.log(res)
// })
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
