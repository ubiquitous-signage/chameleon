<template>
  <div id="app" @click.left="onClicked" @contextmenu.prevent="onRightClicked">
    <header-component :contexts="contexts"></header-component>
    <transition name="fade" mode="out-in"> 
      <router-view :items="items" :contexts="contexts" id="main"></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import axios from 'axios'

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
      autoNavigation: null,
      pages: ['/', '/ad', '/map', '/about', 'title'],
      // pages: ['/'],
      // pages: ['/map'],
      page_index: 0
    }
  },
  methods: {
    fetchPanels: async function () {
      try {
        let res = await axios.get(process.env.API_ENDPOINT + '/panels')
        if (JSON.stringify(this.items.sort()) !== JSON.stringify(res.data.sort())) {
          this.items = res.data
        }
      } catch (e) {
        console.log(e)
      }
    },
    fetchContexts: async function () {
      try {
        let res = await axios.get(process.env.API_ENDPOINT + '/contexts')
        this.contexts = res.data
      } catch (e) {
        console.log(e)
      }
    },
    nextPage: function () {
      this.page_index = (this.page_index + 1) % this.pages.length
      this.$router.replace(this.pages[this.page_index])
    },
    onClicked: function () {
      clearInterval(this.autoNavigation)
      this.nextPage()
      this.autoNavigation = setInterval(
      function () {
        console.log('navigation')
        this.nextPage()
      }.bind(this),
      20000)
      console.log('left clicked')
    },
    onRightClicked: function () {
      clearInterval(this.autoNavigation)
      this.autoNavigation = setInterval(
      function () {
        console.log('navigation')
        this.nextPage()
      }.bind(this),
      20000)
      console.log('right clicked')
      return false
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
    this.autoNavigation = setInterval(
      function () {
        this.nextPage()
      }.bind(this),
      20000)
  },
  destroyed () {
    clearInterval(this.autoReload)
    clearInterval(this.autoNavigation)
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
  height: 100vh;
}
#main {
  cursor: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
