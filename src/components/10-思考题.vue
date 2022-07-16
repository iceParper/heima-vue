<template>
    <!-- 需求： 计算商品总价，商品是否大于500 符合条件可使用400的优惠券 否则不可使用 -->
    <div>
        购物车商品总价：
        <!-- 商品是否大于500 符合条件可使用400的优惠券 否则不可使用 -->
        {{ getSum }}
        <!-- 在模板中放入太多的逻辑，这样会导致 会让模板过重， 并且代码 很难以维护 -->
    </div>
</template>

<script>
// 计算属性:
// 场景: 一个变量的值, 需要用另外变量计算而得来
/*
    语法:
    computed: {
      计算属性名 () {
        return 值
      }
    }
  */
// 注意: 计算属性和data属性都是变量-不能重名
// 注意2: 函数内变量变化, 会自动重新计算结果返回
export default {
    data() {
        return {
            total: 5, // 商品数量
            price: 98, // 单价
            coupon: 400, // 优惠券
        }
    },
    computed: {
        getSum() {
            return this.total * this.price >= 500
                ? this.total * this.price - this.coupon
                : this.total * this.price
        },
    },
}
</script>
