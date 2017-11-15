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
  props: ['version', 'type', 'title', 'contents'],
  components: {
    'table-component': TableComponent
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
.panel {
  margin: 0;
  padding: 0;
  background-color: #FA0;
}
.panelHeader {
  font-size: 3.6rem;
  vertical-align: middle;
  margin: 0;
  padding: 0;  
}
</style>
