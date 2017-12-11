<template>
  <div class="title">
    <img src="../assets/UTsignage.jpg"></img>
  </div>
</template>

<script>
export default {
  name: 'title'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

img {
  display: block;
  width: 100%;
  margin: 0;
}

</style>
