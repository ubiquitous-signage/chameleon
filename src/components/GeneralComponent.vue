<template>
  <div class="general">
    <div class="flexContainer">
      <info-component class="internal" :items="internalItems" :lang="contexts['lang']"></info-component>
      <info-component class="external" :items="externalItems" :lang="contexts['lang']"></info-component>
    </div>
    <div class="flexContainer">
      <wordCloud-component class="wordCloud" :items="wordCloudItems" :lang="contexts['lang']"></wordCloud-component>
      <social-component class="social" :items="socialItems" :lang="contexts['lang']"></social-component>
    </div>
    <div class="flexContainer">
        <ad-component class="ad" :items="adItems" :lang="contexts['lang']"></ad-component>
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
      return this.items.filter((item) => { return item.category === 'wordcloud' })
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
  padding: 1vw
}
.flexContainer {
  margin: 0 0 0 0;
  padding: 0;
  border: 0;
  display: flex;
  width: 100%;
  // background: #FF0;
  justify-content: space-around;
}
@mixin flexContent {
  overflow: hidden;
  border: 0;
  // background: #0bd;
  white-space: normal;
  text-align: center;
  vertical-align: top;
  padding: 10px;
}
.internal {
  @include flexContent;
  flex-basis: 50%;
}
.external {
  @include flexContent;
  flex-basis: 50%;
}
.social {
  @include flexContent;
  flex-basis: 30%;
}
.wordCloud {
  @include flexContent;
  flex-basis: 70%;
}
.ad {
  @include flexContent;
  flex-basis: 100%;
}
</style>
