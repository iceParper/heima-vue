<template>
    <div>
        <van-search
            shape="round"
            placeholder="请输入搜索关键词"
            v-model="keywords"
            @input="getList(keywords)"
        />
        <!-- 搜索下容器 -->
        <div class="search_wrap" v-if="searchList.length == 0">
            <!-- 标题 -->
            <p class="hot_title">热门搜索</p>
            <!-- 热搜关键词容器 -->
            <div class="hot_name_wrap">
                <!-- 每个搜索关键词 -->
                <span
                    class="hot_item"
                    v-for="(item, index) in hotList"
                    :key="index"
                    @click="handleClick(item.first)"
                >
                    {{ item.first }}
                </span>
            </div>
        </div>
        <!-- 搜索结果 -->
        <div class="search_wrap" v-else>
            <!-- 标题 -->
            <p class="hot_title">最佳匹配</p>
            <van-cell
                center
                v-for="item in searchList"
                :key="item.id"
                :title="item.name"
                :label="item.ar[0].name + ' - ' + item.name"
            >
                <template #right-icon>
                    <van-icon name="play-circle-o" size="0.6rem" />
                </template>
            </van-cell>
        </div>
    </div>
</template>
<script>
import { searchHotListAPI, searchResultAPI } from '@/api'

export default {
    name: 'SearchPage',
    data() {
        return {
            hotList: [],
            keywords: '',
            searchList: [],
        }
    },
    created() {
        this.getHotList()
        this.getList()
    },
    methods: {
        async getHotList() {
            try {
                let { data: res } = await searchHotListAPI()
                this.hotList = res.result.hots
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        },
        async getList(val = []) {
            if (!val.length) {
                return (this.searchList = [])
            }
            try {
                let { data: res } = await searchResultAPI({
                    keywords: val,
                    limit: 20,
                })
                this.searchList = res.result.songs
                console.log(res.result.songs)
            } catch (err) {
                console.log(err)
            }
        },
        handleClick(val) {
            this.keywords = val
            this.getList(val)
        },
    },
}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
    padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
    font-size: 0.32rem;
    color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
    margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
    display: inline-block;
    height: 0.853333rem;
    margin-right: 0.213333rem;
    margin-bottom: 0.213333rem;
    padding: 0 0.373333rem;
    font-size: 0.373333rem;
    line-height: 0.853333rem;
    color: #333;
    border-color: #d3d4da;
    border-radius: 0.853333rem;
    border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
    border-bottom: 1px solid lightgray;
}
</style>
