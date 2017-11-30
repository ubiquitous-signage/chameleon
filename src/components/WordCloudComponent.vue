<template>
  <div class="wordCloud">
    <panel-component class="wordCloudPanel" :lang="lang" :type="'wordCloud'" :title="{ja: 'ワードクラウド（音声認識）', en: 'Word Cloud (Voice Recognition)'}" :words="words"></panel-component>
    <!-- <transition-group name="fade">
      <panel-component class="wordPanel" v-for="item in items" :lang="lang" :key="item.title['ja']" :version="item.version" :type="item.type" :title="item.title" :contents="item.contents" />
    </transition-group> -->
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
    },
    lang: {
      default: ''
    },
    words: {
      default: [{
        'text': 'ダイワ',
        'count': 8
      },
      {
        'text': 'ユビキタス',
        'count': 12
      },
      {
        'text': 'IoT',
        'count': 10
      },
      {
        'text': 'HCI',
        'count': 5
      },
      {
        'text': 'SDN',
        'count': 6
      },
      {
        'text': 'くろぎ',
        'count': 12
      },
      {
        'text': 'TRON',
        'count': 3
      },
      {
        'text': '総合分析情報学',
        'count': 3
      }
      ]
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
  // height: 600px;
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
