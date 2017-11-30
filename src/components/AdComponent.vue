<template>
  <div class="ad">
    <div class="panel" v-for="item in items" :key="item.title.ja">
      <panel-component :lang="lang" :version="item.version" :type="item.type" :title="item.title" :contents="item.contents"></panel-component>
    </div>
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
  align-content: flex-start;
  flex-wrap: wrap;
  .panel {
    flex-basis: 31.4%;
    padding: 10px;
  }
}
</style>
