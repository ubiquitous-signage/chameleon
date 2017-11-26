<template>
  <div class="wordCloud">
    Word Cloud
    <ul class="wordCloudList">
      <li class="wordCloudItem">
        <info-component v-bind:items="wordCloudItems" />
      </li>
    </ul>
  </div>
</template>

<script>
// import lecturesDummy from '../../lectures_dummy.json'
import InfoComponent from './InfoComponent'
import SocialComponent from './SocialComponent'

export default {
  name: 'WordCloud',
  props: {
    items: {
      default: []
    }
  },
  components: {
    'info-component': InfoComponent,
    'social-component': SocialComponent
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
