<template>
  <div class="wordcloud">
    <div class="word" v-for="word in contents" :key="word.text" 
    :style="{fontSize: word.count + 'em', color: 'rgba(10, 30, 60, ' +  (word.count / maxCount) + ')', zIndex: word.count, left: (centeredRandom() * 600 + 50) + 'px', top: (centeredRandom() * 300 + 30) + 'px', transform: 'rotate(' + (Math.random() * 180 - 90) + 'deg)'}">
      {{ word.text }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'WordCloud',
  methods: {
    centeredRandom: function () {
      return (Math.random() + Math.random()) / 2
    },
    randomColor: function () {
      return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
  },
  props: {
    contents: {
      default: []
    }
  },
  computed: {
    maxCount: function () {
      return Math.max.apply(null, this.contents.map((word) => {return word.count}))
    }
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wordcloud {
  width: 100%;
  height: 360px;
  position: relative;
}
.word {
  position: absolute;
  width:auto;
  font-weight: bold;
  word-wrap: none;
}
</style>
