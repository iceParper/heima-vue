<template>
  <div id="app">
    <App v-if="isShow" />
    <button @click="isShow = !isShow">销毁</button>
  </div>
</template>

<script>
import App from './components/Life.vue'
export default {
  data() {
    return {
      isShow: true,
    }
  },
  components: {
    App,
  },
}
</script>
