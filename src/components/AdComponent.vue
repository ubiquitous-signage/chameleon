<template>
  <div class="ad">
    <div class="panel" v-for="item in items" :key="item.title.ja">
      <panel-component :lang="lang" :version="item.version" :type="item.type" :title="item.title" :contents="item.contents"></panel-component>
    </div>

    <!-- space-betweenで最終行を左揃えするための空要素 -->
    <div class="dummyPanel"></div>
    <div class="dummyPanel"></div>
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
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  .panel {
    flex-basis: 31.4%;
    padding: 10px;
  }
  .dummyPanel {
    flex-basis: 31.4%;
    margin: 0;
    padding: 0;
  }
}
</style>
