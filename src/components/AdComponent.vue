<template>
  <div class="ad">
    <h2>
      {{ title[lang] }}
    </h2>
    <div class="adPanels">
      <div class="panel" v-for="item in adItems" :key="item.title.ja">
        <panel-component :lang="lang" :version="item.version" :type="item.type" :title="item.title" :contents="item.contents"></panel-component>
      </div>

      <!-- space-betweenで最終行を左揃えするための空要素 -->
      <div class="dummyPanel"></div>
      <div class="dummyPanel"></div>
    </div>
  </div>
</template>

<script>
import PanelComponent from './PanelComponent'

export default {
  name: 'AdComponent',
  components: {
    'panel-component': PanelComponent
  },
  data () {
    return {
      title: {
        'ja': 'コミュニティ掲示板',
        'en': 'Community BBS'
      }
    }
  },
  props: {
    items: {
      default: []
    },
    contexts: {
      default: {}
    }
  },
  computed: {
    adItems: function () {
      return this.items.filter((item) => { return item.category === 'ad' })
    },
    lang: function () {
      return this.contexts['lang']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ad {
  font-size: 3.5rem;
  padding-left: 1vw;
  padding-right: 1vw;
  height: 1770px;
}
h2 {
  text-align: left;
  padding-left: 4rem;
}
.adPanels {
  height: 100%;
  overflow: hidden;
  border: 0;
  // background: #0bd;
  white-space: normal;
  text-align: center;
  vertical-align: top;

  padding: 0;
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
    padding: 10px;
  }
}
</style>
