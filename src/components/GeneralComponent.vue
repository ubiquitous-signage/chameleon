<template>
  <div class="general">
    <ul class="generalList">
      <li class="internal">
        <info-component :items="internalItems" :lang="contexts['lang']"></info-component>
      </li>
      <li class="external">
        <info-component :items="externalItems" :lang="contexts['lang']"></info-component>
      </li>
    </ul>
    <ul class="generalList">
      <li class="wordCloud">
        <wordCloud-component :items="wordCloudItems" :lang="contexts['lang']"></wordCloud-component>
      <li class="social">
        <social-component :items="socialItems" :lang="contexts['lang']"></social-component>
      </li>
    </ul>
  </div>
</template>

<script>
// import lecturesDummy from '../../lectures_dummy.json'
import InfoComponent from './InfoComponent'
import SocialComponent from './SocialComponent'
import WordCloudComponent from './WordCloudComponent'

export default {
  name: 'General',
  props: {
    items: {
      default: []
    },
    contexts: {
      default: {}
    }
  },
  components: {
    'info-component': InfoComponent,
    'social-component': SocialComponent,
    'wordCloud-component': WordCloudComponent
  },
  computed: {
    internalItems: function () {
      return this.items.filter((item) => { return item.category === 'internal' })
    },
    externalItems: function () {
      return this.items.filter((item) => { return item.category === 'external' })
    },
    socialItems: function () {
      return this.items.filter((item) => { return item.category === 'social' })
    },
    wordCloudItems: function () {
      return this.items.filter((item) => { return item.category === 'wordcloud' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.generalList {
  margin: 1vh 0 0 0;
  padding: 0;
  border: 0;
  display: table;
  width: 100%;
  // background: #FF0;
  border-spacing: 1vw 0;
  border-collapse: separate;
  table-layout: fixed;
}
@mixin generalItem {
  overflow: visible;
  border: 0;
  // background: #0bd;
  display: table-cell;
  white-space: normal;
  text-align: center;
  vertical-align: top;
  padding: 0;
}
.internal {
  @include generalItem;
  width: 40vw;
}
.external {
  @include generalItem;
  width: 40vw;
}
.social {
  @include generalItem;
}
.wordCloud {
  @include generalItem;
  width: 70vw;
}
</style>
