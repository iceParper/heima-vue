<template>
  <tr>
    <th>
      <input type="checkbox" v-model="trChecked" @change="handleChange" />
    </th>
    <th>{{ obj.name }}</th>
    <th>{{ obj.price }}</th>
    <th>
      <button @click="handleSub" :disabled="flag">-</button>{{ obj.num
      }}<button @click="handleAdd">+</button>
    </th>
    <th>{{ sum }}</th>
    <th><button @click="handleDel">删除</button></th>
  </tr>
</template>

<script>
export default {
  create() {
    this.trChecked = this.allChecked;
  },
  mounted() {
    console.log(123);
  },
  updated() {
    console.log(this.allChecked);
    // this.$
  },
  data() {
    return {
      flag: false,
      trChecked: false,
    };
  },
  props: {
    obj: {
      type: Object,
      default: () => ({}),
    },
    index: {},
    btnFlag: {},
    allChecked: {},
  },
  methods: {
    handleSub() {
      this.$emit("sub", this.index);
      if (this.obj.num < 1) {
        this.flag = true;
      }
    },
    handleAdd() {
      this.flag = false;
      this.$emit("add", this.index);
    },
    handleDel() {
      this.$emit("del", this.index);
    },
    handleChange() {
      this.$emit("sendChecked", this.trChecked, this.index);
    },
    checkAll() {
      console.log(this.allChecked);
      this.trChecked = !this.allChecked;
    },
  },
  computed: {
    sum() {
      return this.obj.price * this.obj.num;
    },
  },
};
</script>

<style></style>
