<template>
  <div class="panel">
    <div class="panelHeader">
      {{ this.title[this.lang] }}
    </div>
    <table-component v-if="this.type=='table'" :id="this.title.ja" :lang="lang" :contents="contents" />
    <twitter-component v-else-if="this.type=='twitter'" />
    <word-cloud v-else-if="this.type=='wordCloud'" :contents="contents"></word-cloud>
    <!-- <wordcloud v-else-if="this.type=='wordCloud'" :data="contents" nameKey="text" valueKey="count" color="Category10"></wordcloud> -->
    <div class="plainText" v-else-if="this.type=='plain'">
      {{ this.contents[this.lang] }}
    </div>
    <div v-else>
      [ERROR] Undifined Panel Type!
    </div>
  </div>
</template>

<script>
import TableComponent from './TableComponent'
import TwitterComponent from './TwitterComponent'
// import wordcloud from 'vue-wordcloud'
import WordCloud from './WordCloud'

export default {
  name: 'PanelComponent',
  props: ['version', 'type', 'title', 'contents', 'lang'],
  components: {
    'table-component': TableComponent,
    'twitter-component': TwitterComponent,
    // wordcloud
    'word-cloud': WordCloud
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
div.panel {
  box-sizing: border-box;
  text-align: left;
  margin: 0;
  padding: 1vw;
  box-shadow: 1px 1px 5px -2px #000;
  font-size: 2.2rem;
  .panelHeader {
    text-align: left;
    font-weight: bold;
    font-size: 3.2rem;
    // height: 1.5em;
    line-height: 1.2em;
    max-width: 100%;
    vertical-align: middle;
    margin: 0;
    padding: 0 0 0 0.5em;
    // background-color: #FC0;
  }
}
// div.wordPanel {
//   $radius: 12vw;
//   width: $radius * 2;
//   height: $radius * 2;
//   margin: 1vw;
//   border: 0;
//   border-radius: $radius;
//   // box-shadow: none;
//   box-shadow: -30px -30px 100px 0px rgba(0, 0, 0, 0.05) inset;
//   text-align: center;
//   background: radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 1), rgba(180, 220, 255, 0.66) 30%,rgba(150, 180, 220, 0.33) 80%, transparent);
//   float: left;
//   position: relative;
//   .plainText {
//     font-size: 2.0rem;
//     position: absolute;
//     top: 2.5 * 3.2rem;
//     right: 0;
//     left: 0;
//     margin: auto;
//     width: $radius * 1.6;
//     display: -webkit-box;
//     -webkit-box-orient: vertical;
//     -webkit-line-clamp: 5;
//     overflow: hidden;
//     opacity: 0.8;
//   }
//   .panelHeader {
//     line-height: normal;
//     text-align: center;
//     font-weight: bold;
//     font-size: 3.2rem;
//     height: 1.5em;
//     width: 100%;
//     vertical-align: middle;
//     margin: 0.8em 0 0 0;
//     padding: 0 0 0 0;
//     border: 0;
//     background: transparent;
//     opacity: 0.8;
//   }
// }
</style>
