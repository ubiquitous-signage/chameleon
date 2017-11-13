<template>
  <div class="internal">
    <template v-for="item in items">
      <div v-if="item.type=='table'" v-bind:key="item.title">
        {{ item.title }}
      </div>
      <div v-else v-bind:key="item.title">
        [ERROR] Undifined Item Type!
      </div>
    </template>
  </div>
</template>

<script>
import lecturesDummy from '../../lectures_dummy.json'
export default {
  name: 'InternalComponent',
  data () {
    return {
      items: [lecturesDummy, lecturesDummy]
    }
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  background-color: #F0F
}
</style>
