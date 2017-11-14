<template>
  <div class="panel">
    <div class="panelHeader">
      {{ this.title }}
    </div>
    <table-component v-if="this.type=='table'" v-bind:contents="this.contents" />
    <template v-else>
      [ERROR] Undifined Panel Type!
    </template>
  </div>
</template>

<script>
import TableComponent from './TableComponent'
export default {
  name: 'PanelComponent',
  data () {
  },
  props: ['version', 'type', 'title', 'contents'],
  components: {
    'table-component': TableComponent
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  background-color: #FA0
}
</style>
