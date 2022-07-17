<template>
  <div class="my_div">
    <img :src="url" alt="" />
    <p @click="handleClick">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "url"],
  methods: {
    handleClick() {
      this.$emit("clickDogName", this.name);
    },
  },
};
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>
