<template>
  <div class="wordCloud">
    <panel-component class="wordCloudPanel" :lang="lang" :type="'wordCloud'" :title="{ja: 'ワードクラウド（音声認識）', en: 'Word Cloud (Voice Recognition)'}" :contents="items[0].contents"></panel-component>
  </div>
</template>

<script>
// import lecturesDummy from '../../lectures_dummy.json'
import PanelComponent from './PanelComponent'

export default {
  name: 'WordCloud',
  props: {
    items: {
      default: [{contents: [{'text': '', 'count': 0}]}]
    },
    lang: {
      default: ''
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
.wordCloudPanel {
  height: 600px;
}
// .wordCloudList {
//   margin: 0;
//   padding: 0;
//   border: 0;
//   display: table;
//   width: 100%;
//   // background: #FF0;
//   border-spacing: 1vw 0;
//   border-collapse: separate;
//   table-layout: fixed;
// }
// @mixin _wordCloudItem {
//   font-weight: bold;
//   // background: #0bd;
//   display: table-cell;
//   white-space: normal;
//   text-align: center;
//   vertical-align: top;
//   padding: 0;
// }
// .wordCloudItem {
//   @include _wordCloudItem;
// }
</style>
