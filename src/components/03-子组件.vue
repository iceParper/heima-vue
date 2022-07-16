<!--product的静态页面，可直接复制-->
<template>
  <div class="my-product">
    <h3>标题: {{ title || "暂无" }}</h3>
    <p>价格: {{ price || "0" }}元</p>
    <p>{{ msg || "暂无活动" }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
  props: ["title", "price", "msg", "index"],
  methods: {
    handleClick() {
      this.$emit("del", this.index);
    },
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
