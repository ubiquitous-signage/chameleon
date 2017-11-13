<template>
  <div class="general">
    <ul class="generalList">
      <li class="internal">
        <internal-component/>
      </li>
      <li class="external">
        <external-component/>
      </li>
      <li class="social">
        <social-component/>
      </li>
    </ul>
  </div>
</template>

<script>
import InternalComponent from './InternalComponent'
export default {
  name: 'General',
  components: {
    'internal-component': InternalComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.general {
  margin-top: 2vh;
}
.generalList {
  margin: 0;
  padding: 0;
  border: 0;
  display: table;
  width: 100%;
  background: #FF0;
  border-spacing: 1vw 0;
  border-collapse: separate;
  table-layout: auto
}
@mixin generalItem {
  font-weight: bold;
  background: #0bd;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  padding: 0;
}
.internal {
  @include generalItem;
}
.external {
  @include generalItem;
}
.social {
  @include generalItem;
}
</style>
