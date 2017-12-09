<template>
  <div id="app">
    <header-component/>
    <transition name="fade" mode="out-in">
      <router-view :items="items" :contexts="contexts"></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import axios from 'axios'

const API_ENDPOINT = 'http://localhost:9000/api'
export default {
  name: 'app',
  components: {
    'header-component': HeaderComponent
  },
  data () {
    return {
      items: [],
      contexts: { 'lang': 'ja' },
      autoReload: null,
      pages: ['/', '/about', '/map'],
      page_index: 0
    }
  },
  methods: {
    fetchPanels: async function () {
      try {
        let res = await axios.get(API_ENDPOINT + '/panels')
        if (JSON.stringify(this.items.sort()) !== JSON.stringify(res.data.sort())) {
          this.items = res.data
        }
      } catch (e) {
        console.log(e)
      }
    },
    fetchContexts: async function () {
      try {
        let res = await axios.get(API_ENDPOINT + '/contexts')
        this.contexts = res.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  created () {
    this.fetchPanels()
    this.fetchContexts()
    this.autoReload = setInterval(
      function () {
        this.fetchPanels()
        this.fetchContexts()
      }.bind(this),
      1000)
    setInterval(
      function () {
        this.page_index = (this.page_index + 1) % this.pages.length
        this.$router.replace(this.pages[this.page_index])
      }.bind(this),
      10000)
  },
  destroyed () {
    clearInterval(this.autoReload)
  }
}
</script>

<style>
div,ul,ol,li,body,td {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
h1,h2,h3,h4,h5,h6 {
  font-size: 100%;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6em;
}
#app {
  font-family: 'Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',YuGothic, 'Yu Gothic','メイリオ', Meiryo,'ＭＳ ゴシック',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0%;
  padding: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
