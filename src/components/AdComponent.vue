<template>
  <div class="ad">
    <panel-component v-for="item in items" :lang="lang" :key="item.title" :version="item.version" :type="item.type" :title="item.title" :contents="item.contents"></panel-component>
  </div>
</template>

<script>
import PanelComponent from './PanelComponent'
export default {
  name: 'AdComponent',
  props: ['items', 'lang'],
  components: {
    'panel-component': PanelComponent
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ad {
  width: 100%;
  overflow: visible;
  display: flex;
  // justify-content: space-between;
  panel-component {
    flex-basis: 100%
  }
}
</style>
