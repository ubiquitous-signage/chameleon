<template>
  <div class="wordcloud">
    <div class="word" v-for="word in contents" :key="word.text" 
    :style="{fontSize: word.count + 'em', color: 'rgba(10, 30, 60, ' +  (word.count / maxCount) + ')', zIndex: word.count, left: (centeredRandom() * 500 + 100) + 'px', top: (centeredRandom() * 300 + 50) + 'px', transform: 'rotate(' + (Math.random() * 120 - 60) + 'deg)'}">
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
      return Math.max.apply(null, this.contents.map((word) => { return word.count }))
    }
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wordcloud {
  width: 100%;
  height: 90%;
  position: relative;
}
.word {
  position: absolute;
  width:auto;
  font-weight: bold;
  white-space: nowrap;
}
</style>
