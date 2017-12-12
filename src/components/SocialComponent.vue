<template>
  <div class="social">
    <panel-component class="twitter" :key="'Twitter'" :lang="lang" :version="0.0" :type="'twitter'" :title="{'ja': 'Twitter', 'en': 'Twitter'}" />
  </div>
</template>

<script>
import PanelComponent from './PanelComponent'
export default {
  name: 'SocialComponent',
  props: ['lang'],
  components: {
    'panel-component': PanelComponent
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
.social {
  max-width: 100%;
  // background-color: #F0F
}
.twitter {
  // height: 480px;
  height: 100%;
}
</style>
