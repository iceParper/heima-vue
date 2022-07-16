<template>
  <div>
    <div class="title">
      <h4>{{ title || "芙蓉楼送辛渐" }}</h4>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? "收起" : "展开" }}
      </span>
    </div>
    <div class="container" v-show="isShow" v-html="poem"></div>
  </div>
</template>

<script>
export default {
  props: ["title", "poem"],
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 1em;
}
.title h4 {
  line-height: 2;
  margin: 0;
}
.container {
  border: 1px solid #ccc;
  padding: 0 1em;
}
.btn {
  /* 鼠标改成手的形状 */
  cursor: pointer;
}
</style>
