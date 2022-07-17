<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              v-model="isAllChecked"
              @change="toggleStatus"
            />
            <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
        <TrCpn
          v-for="(item, index) in goodList"
          :key="index"
          :obj="item"
          :index="index"
          @sub="numSub"
          @add="numAdd"
          @del="itemDel"
          :allChecked="isAllChecked"
          @sendChecked="getTrChecked"
          @sendPrice="getPrice"
          ref="sonRef"
        />
      </thead>
      <tbody></tbody>
      <tfoot>
        <tr>
          <td>合计:{{ getSum }}</td>
          <td colspan="5"></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import TrCpn from "./TrCpn.vue";
export default {
  updated() {
    console.log(111);
  },
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
      sum: 0,
    };
  },
  components: {
    TrCpn,
  },
  methods: {
    numSub(index) {
      if (this.goodList[index].num <= 0) return;
      this.goodList[index].num--;
    },
    numAdd(index) {
      this.goodList[index].num++;
    },
    itemDel(index) {
      this.goodList.splice(index, 1);
    },
    toggleStatus() {
      console.log(this.isAllChecked);
      this.$refs.sonRef.forEach((item) => {
        item.checkAll();
      });
    },
    getTrChecked(val, index) {
      this.goodList[index].checked = val;
    },
    getPrice(val) {
      this.sum += val;
      console.log(this.sum);
    },
  },
  computed: {
    isAllChecked: {
      set(val) {
        this.goodList.forEach((item) => {
          item.checked = val;
        });
      },
      get() {
        return this.goodList.every((item) => item.checked);
      },
    },
    getSum() {
      return this.goodList.reduce((sum, next) => {
        if (next.checked) {
          sum += next.num * next.price;
        }
        return sum;
      }, 0);
    },
  },
};
</script>

<style></style>
