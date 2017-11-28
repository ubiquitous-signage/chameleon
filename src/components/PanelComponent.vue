<template>
  <div class="panel">
    <div class="panelHeader">
      {{ this.title }}
    </div>
    <table-component v-if="this.type=='table'" v-bind:contents="this.contents" />
    <twitter-component v-else-if="this.type=='twitter'" />
    <div class="plainText" v-else-if="this.type=='plain'">
      {{ this.contents }}
    </div>
    <div v-else>
      [ERROR] Undifined Panel Type!
    </div>
  </div>
</template>

<script>
import TableComponent from './TableComponent'
import TwitterComponent from './TwitterComponent'
export default {
  name: 'PanelComponent',
  props: ['version', 'type', 'title', 'contents'],
  components: {
    'table-component': TableComponent,
    'twitter-component': TwitterComponent
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
div.panel {
  text-align: left;
  max-width: 100%;
  margin: 0 0 0.5vw 0;
  padding: 0.5vw;
  border: 0;
  box-shadow: 1px 1px 5px -2px #000000;
  font-size: 2.4rem;
  .panelHeader {
    text-align: left;
    font-weight: bold;
    font-size: 3.2rem;
    height: 1.5em;
    width: 100%;
    vertical-align: middle;
    margin: 0;
    padding: 0 0 0 0.5em;
    // background-color: #FC0;
  }
}
div.wordPanel {
  $radius: 12vw;
  width: $radius * 2;
  height: $radius * 2;
  margin: 1vw;
  border: 0;
  border-radius: $radius;
  font-size: 2.0rem;
  text-align: center;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 1), rgba(180, 220, 255, 0.66) 20%,rgba(150, 180, 220, 0.33) 80%, transparent);
  float: left;
  position: relative;
  .plainText {
    position: absolute;
    top: 2.0 * 3.2rem;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: $radius * 1.5;
  }
  .panelHeader {
    line-height: normal;
    text-align: center;
    font-weight: bold;
    font-size: 3.2rem;
    height: 1.5em;
    width: 100%;
    vertical-align: middle;
    margin: 0.5em 0 0 0;
    padding: 0 0 0 0;
    border: 0;
    background: transparent;
  }
}
</style>
