<template>
  <div class="about">
    <h2>
      {{ this.title[lang] }}
    </h2>
    <div class="figure">
      <img v-if="lang==='ja'" src="../assets/about_ja.png">
      <img v-if="lang==='en'" src="../assets/about_en.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      title: {
        'ja': 'UTsignageのアーキテクチャ',
        'en': 'UTsignage architecture'
      }
    }
  },
  props: ['contexts'],
  computed: {
    lang: function () {
      return this.contexts['lang']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.about {
  background: white;
  text-align: left;
  box-sizing: border-box;
  padding: 10%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.about h2 {
  font-size: 5rem;
  text-align: center;
}

.figure {
  display: table-cell;
  vertical-align: middle;
  height: 1500px;
}

img {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 5vh;
}

</style>
