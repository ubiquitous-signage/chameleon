<template>
  <div class="internal">
    <panel-component v-for="item in items" v-bind:key="item.title" v-bind:version="item.version" v-bind:type="item.type" v-bind:title="item.title" v-bind:contents="item.contents" />
  </div>
</template>

<script>
import lecturesDummy from '../../lectures_dummy.json'
import PanelComponent from './PanelComponent'
export default {
  name: 'InternalComponent',
  data () {
    return {
      items: [lecturesDummy, lecturesDummy]
    }
  },
  components: {
    'panel-component': PanelComponent
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  background-color: #F0F
}
</style>
