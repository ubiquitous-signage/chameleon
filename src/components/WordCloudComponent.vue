<template>
  <div class="info">
    <div>Word Cloud</div>
    <transition-group name="fade">
      <panel-component class="wordPanel" v-for="item in items" v-bind:key="item.title" v-bind:version="item.version" v-bind:type="item.type" v-bind:title="item.title" v-bind:contents="item.contents" />
    </transition-group>
  </div>
</template>

<script>
// import lecturesDummy from '../../lectures_dummy.json'
import PanelComponent from './PanelComponent'

export default {
  name: 'WordCloud',
  props: {
    items: {
      default: []
    }
  },
  components: {
    'panel-component': PanelComponent
  },
  computed: {
    wordCloudItems: function () {
      return this.items.filter((item) => { return item.category === 'wordcloud' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wordCloud {
  margin-top: 2vh;
}
.wordCloudList {
  margin: 0;
  padding: 0;
  border: 0;
  display: table;
  width: 100%;
  // background: #FF0;
  border-spacing: 1vw 0;
  border-collapse: separate;
  table-layout: fixed;
}
@mixin _wordCloudItem {
  font-weight: bold;
  // background: #0bd;
  display: table-cell;
  white-space: normal;
  text-align: center;
  vertical-align: top;
  padding: 0;
}
.wordCloudItem {
  @include _wordCloudItem;
}
</style>
