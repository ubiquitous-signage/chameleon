<template>
  <div class="info">
    <panel-component v-for="item in items" :lang="lang" :key="item.title" :version="item.version" :type="item.type" :title="item.title" :contents="item.contents"></panel-component>
  </div>
</template>

<script>
import PanelComponent from './PanelComponent'
export default {
  name: 'InfoComponent',
  data () {
    return {
    }
  },
  props: ['items', 'lang'],
  components: {
    'panel-component': PanelComponent
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
.info {
  max-width: 100%;
  overflow: visible;
  // background-color: #F0F
}
</style>
