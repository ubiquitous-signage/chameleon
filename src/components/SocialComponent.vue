<template>
  <div class="info">
    <panel-component v-bind:key="'Twitter'" v-bind:version="0.0" v-bind:type="'twitter'" v-bind:title="'Twitter'" />
  </div>
</template>

<script>
import PanelComponent from './PanelComponent'
export default {
  name: 'SocialComponent',
  data () {
    return {
    }
  },
  components: {
    'panel-component': PanelComponent
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
.info {
  max-width: 100%;
  // background-color: #F0F
}
</style>
