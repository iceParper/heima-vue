<template>
    <div>
        <!-- <div class="footer_wrap">
            <router-link to="/find">发现音乐</router-link>
            <router-link to="/my">我的音乐</router-link>
            <router-link to="/part/123">朋友</router-link>
        </div>
        <div class="top"></div>
        <router-view></router-view> -->
        <MyInpt></MyInpt>
        <a href="#/home">首页</a>
        <a href="#/movie">电影</a>
        <a href="#/about">关于</a>
        <component :is="comName"></component>
    </div>
</template>

<script>
import Movie from './views/Find.vue'
import Home from './views/My.vue'
import About from './views/Part'
import MyInpt from './extends/02.v-model在自定义组件的使用.vue'
export default {
    data() {
        return {
            comName: 'Home',
        }
    },
    mounted() {
        window.onhashchange = () => {
            console.log(location.hash)
            switch (location.hash) {
                case '#/movie':
                    this.comName = 'Movie'
                    break
                case '#/home':
                    this.comName = 'Home'
                    break
                case '#/about':
                    this.comName = 'About'
                    break
            }
        }
    },
    components: {
        Movie,
        Home,
        About,
        MyInpt,
    },
    // created() {
    //     console.log(this.$route)
    // },
    // methods: {
    //     btn(path, pathName) {
    //         this.$router.push({
    //             name: pathName,
    //             query: {
    //                 id: 123,
    //             },
    //             params: {
    //                 age: 1899,
    //             },
    //         })
    //     },
    // },
}
</script>

<style scoped>
.footer_wrap {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    text-align: center;
    background-color: #333;
    color: #ccc;
}
.footer_wrap a {
    flex: 1;
    text-decoration: none;
    padding: 20px 0;
    line-height: 20px;
    background-color: #333;
    color: #ccc;
    border: 1px solid black;
}
.footer_wrap a:hover {
    background-color: #555;
}
.router-link-active {
    background-color: skyblue !important;
    color: pink !important;
}
.top {
    padding-top: 62px;
}
</style>
