<template>
  <div id="app">
    <header-component/>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
export default {
  name: 'app',
  components: {
    'header-component': HeaderComponent
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
</style>
