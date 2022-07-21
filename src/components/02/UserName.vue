<template>
  <div>
    <div>
      <span>用户名:</span>
      <input type="text" />
    </div>
    <div>
      <span>密码:</span>
      <input type="password" />
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log('UserName创建')
  },
  destroyed() {
    console.log('UserName销毁')
  },
  activated() {
    console.log('UserName激活')
  },
  deactivated() {
    console.log('UserName失活')
  },
}
</script>
