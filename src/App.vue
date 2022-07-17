<template>
  <div id="app">
    <App />
    <Button type="primary" style="margin-top: 20px">按钮</Button>
    <Button type="success" size="mini" style="margin-top: 20px">按钮</Button>
    <Button type="danger" style="margin-top: 20px">按钮</Button>
    <Button type="warning" style="margin-top: 20px">按钮</Button>
  </div>
</template>

<script>
import App from "./homework3/购物车-作业.vue";
import Button from "./homework3/ButtonG.vue";
export default {
  components: {
    App,
    Button,
  },
};
</script>
