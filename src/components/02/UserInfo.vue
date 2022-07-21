<template>
  <div>
    <div>
      <span>人生格言:</span>
      <input type="text" />
    </div>
    <div>
      <span>个人简介:</span>
      <textarea></textarea>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log('UserInfo创建')
  },
  destroyed() {
    console.log('UserInfo销毁')
  },
  activated() {
    console.log('UserInfo激活')
  },
  deactivated() {
    console.log('UserInfo失活')
  },
}
</script>
