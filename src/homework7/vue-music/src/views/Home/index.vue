<template>
    <div>
        <p class="title">推荐歌单</p>
        <van-row gutter="5">
            <van-col span="8" v-for="item in recommendList" :key="item.id">
                <van-image style="margin-left: 10px" width="100" height="100" :src="item.picUrl" />
                <p class="song_name">{{ item.name }}</p>
            </van-col>
        </van-row>
        <p class="title">最新音乐</p>
        <van-cell
            :title="item.name"
            :label="`${item && item.song && item.song.artists && item.song.artists[0].name}-${
                item.name
            }`"
            v-for="item in newsSongList"
            :key="item.id"
        >
            <template #right-icon>
                <van-icon name="play-circle-o" size="0.6rem" />
            </template>
        </van-cell>
    </div>
</template>

<script>
import { recommendSongListAPI, newsSongListAPI } from '@/api'
export default {
    name: 'HomdPage',
    data() {
        return {
            recommendList: [],
            newsSongList: [],
        }
    },
    created() {
        this.getCommendList()
        this.getNewsSongsList()
    },
    mounted() {
        // console.log(this.recommendList)
    },
    methods: {
        getCommendList() {
            recommendSongListAPI({ limit: 6 }).then(res => {
                // console.log(res)
                this.recommendList = res.data.result
                console.log(this.recommendList)
            })
        },
        async getNewsSongsList() {
            try {
                let { data: res } = await newsSongListAPI()
                console.log(res)
                this.newsSongList = res.result
            } catch (err) {
                console.log(err)
            }
        },
    },
}
</script>

<style>
.title {
    padding: 0.266667rem 0.24rem;
    margin: 0 0 0.24rem 0;
    background-color: #eee;
    color: #333;
    font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
    font-size: 0.346667rem;
    padding: 0 0.08rem;
    margin-bottom: 0.266667rem;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2; /** 显示的行数 **/
    overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
