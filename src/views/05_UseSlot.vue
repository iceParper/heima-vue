<template>
  <div>
    <panel>
      <template #content="scoped">
        <div>{{scoped}}</div>
        <div>{{scoped.row}}</div>
        <div>{{scoped.row1}}</div>
        <div>{{scoped.row1.defaultOne}}{{scoped.row1.defaultTwo}}</div>
      </template>
    </panel>
  </div>
</template>

<script>
import Panel from '../components/05/Panel.vue'

export default {
  name: 'Demo05UseSlot',

  data() {
    return {}
  },
  components: {
    Panel,
  },
}
</script>

<style scoped></style>
