<template>
  <div class="table">
    {{ this.contents }}
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  data () {
  },
  props: ['contents']
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  background-color: #AF0
}
</style>
