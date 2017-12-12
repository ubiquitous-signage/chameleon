<template>
  <div class="general">
    <div class="information">
      <info-component class="internal" :items="internalItems" :lang="contexts['lang']"></info-component>
      <info-component class="external" :items="externalItems" :lang="contexts['lang']"></info-component>
    </div>
    <div class="wordSocial">
      <wordCloud-component class="wordCloud" :items="wordCloudItems" :lang="contexts['lang']"></wordCloud-component>
      <social-component class="social" :items="socialItems" :lang="contexts['lang']"></social-component>
    </div>
  </div>
</template>

<script>
// import lecturesDummy from '../../lectures_dummy.json'
import InfoComponent from './InfoComponent'
import SocialComponent from './SocialComponent'
import WordCloudComponent from './WordCloudComponent'
import AdComponent from './AdComponent'

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
    'wordCloud-component': WordCloudComponent,
    'ad-component': AdComponent
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
      let items = this.items.filter((item) => { return item.category === 'wordCloud' })
      return items.length === 0 ? [{contents: [{'text': '', 'count': 0}]}] : items
    },
    adItems: function () {
      return this.items.filter((item) => { return item.category === 'ad' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.general {
  padding: 1vw;
  box-sizing: border-box;
  height: 1770px;
  display: flex;
  flex-flow: column;
  align-items: stretch;
}
@mixin flexContainer {
  margin: 0 0 0 0;
  padding: 0;
  border: 0;
  display: flex;
  flex-flow: row;
  width: 100%;
  // background: #FF0;
  justify-content: space-around;
}
.information {
  @include flexContainer;
  flex-grow: 0;
  flex-shrink: 0;
}
.wordSocial {
  @include flexContainer;
  flex-grow: 1;
  flex-shrink: 1;
}

@mixin horizontalFlexContent {
  height: 100%;
  overflow: hidden;
  border: 0;
  // background: #0bd;
  white-space: normal;
  text-align: center;
  vertical-align: top;
  padding: 10px;
}
.internal {
  @include horizontalFlexContent;
  flex-basis: 50%;
}
.external {
  @include horizontalFlexContent;
  flex-basis: 50%;
}
.social {
  @include horizontalFlexContent;
  flex-basis: 30%;
  height: auto;
}
.wordCloud {
  @include horizontalFlexContent;
  flex-basis: 70%;
  height: auto;
}
</style>
