<template>
  <div class="wordcloud">
    <div class="drawField">
      <transition-group name="word"> 
        <div class="word" v-for="word in contents" :key="word.text" 
        :style="{fontSize: word.count * 3 + 'em', color: 'rgba(10, 30, 60, ' +  (word.count / maxCount) + ')', zIndex: word.count, left: (word.position.x * 100) + '%', top: (word.position.y * 100)  + '%', transform: 'translate(-50%, -50%) rotate(' + (word.position.angle * 120 - 60) + 'deg)'}">
          {{ word.text }}
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>

export default {
  name: 'WordCloud',
  data () {
    inDuration = 2000
    outDuration = 1000
  },
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
  box-sizing: border-box;
  width: 100%;
  height: 93%;
  padding: 7.5%;
}
.drawField {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: visible;
}
.word {
  position: absolute;
  width:auto;
  font-weight: bold;
  white-space: nowrap;
}

.word-enter-active {
  animation: wordIn 2s;
}
.word-leave-active {
  transition: wordOut 2s;
}
@keyframes wordIn {
  0% {
    font-size: 0em;
    opacity: 0;
  }
  25% {
    font-size: 4em;
    opacity: 1;
    color: red;
  }
  75% {
    font-size: 4em;
    opacity: 1;
    color: red;
  }
  100% {
    opacity: 1;
  }
}
@keyframes wordOut {
  100% {
    opacity: 0;
  }
}
</style>
