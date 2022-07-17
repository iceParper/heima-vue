<template>
  <div>
    <Son title="静夜思" :poem="poem" />
    <Son :title="title" :poem="poem2" />
  </div>
</template>

<script>
import Son from "./02-子组件.vue";
export default {
  data() {
    return {
      title: "送孟浩然之广陵",
      poem: `床前明月光，<br />
            疑是地上霜。<br />
            举头望明月，<br />
            低头思故乡。`,
      poem2: `故人西辞黄鹤楼，<br />
            烟花三月下扬州。<br />
            孤帆远影碧空尽，<br />
            唯见长江天际流。`,
    };
  },
  components: {
    Son,
  },
};
</script>

<style></style>
