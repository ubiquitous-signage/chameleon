<template>
  <div class="about">
    <h2>
      {{ this.title[lang] }}
    </h2>
    <div class="paragraphs">
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
  text-align: left;
  font-size: 3.5rem;
  padding-left: 5rem;
  padding-right: 5rem;
}

.about h2 {
  font-size: 3.5rem;
}

img {
  display: block;
  width: 100%;
  margin: 0;
}

</style>
