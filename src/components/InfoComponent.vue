<template>
  <div class="info">
    <panel-component v-for="item in items" v-bind:key="item.title" v-bind:version="item.version" v-bind:type="item.type" v-bind:title="item.title" v-bind:contents="item.contents" />
  </div>
</template>

<script>
import PanelComponent from './PanelComponent'
export default {
  name: 'InfoComponent',
  data () {
    return {
    }
  },
  props: ['items'],
  components: {
    'panel-component': PanelComponent
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
.info {
  max-width: 100%;
  overflow: visible;
  // background-color: #F0F
}
</style>
