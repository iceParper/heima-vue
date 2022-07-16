<!--product的静态页面，可直接复制-->
<template>
  <div class="my-product">
    <h3>标题: {{ obj.proname || "暂无" }}</h3>
    <p>价格: {{ obj.proprice || "0" }}元</p>
    <p>{{ obj.info || "暂无活动" }}</p>
  </div>
</template>

<script>
export default {
  // props: ["title", "price", "msg"],
  props: {
    obj: {
      type: Object,
      required: true,
      default: () => ({}),
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
