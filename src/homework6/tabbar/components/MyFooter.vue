<template>
    <div class="my-tab-bar">
        <div
            class="tab-item"
            :class="{ current: current == index }"
            v-for="(item, index) in list"
            :key="item.componentName"
            @click="handleClick(index)"
        >
            <!-- 图标 -->
            <span class="iconfont" :class="item.iconText"></span>
            <!-- 文字 -->
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: 0,
            pathArr: ['/goodlist', '/search', '/my'],
        }
    },
    props: {
        list: {
            type: Array,
            default: () => [],
            validator(val) {
                if (val.length >= 2 && val.length <= 5) {
                    return true
                }
                return false
            },
        },
    },
    methods: {
        handleClick(index) {
            this.$router.push({
                path: this.pathArr[index],
            })
            this.current = index
            console.log(index)
        },
    },
}
</script>

<style lang="less" scoped>
.my-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }
}

.current {
    color: #1d7bff;
}
</style>
