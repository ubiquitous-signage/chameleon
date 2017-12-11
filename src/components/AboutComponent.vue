<template>
  <div class="about">
    <h2>
      このシステムについて
    </h2>
    <div class="paragraphs">
      <ul>
        <li>
          <img src="../assets/about_en.png">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.about {
  text-align: left;
  font-size: 3.5rem;
  padding: 1vw
}

.about {
  padding: 2rem;
}

.about h2 {
  font-size: 3.5rem;
  margin-top: 4.0rem;
  margin-bottom: 7.0rem;
}

img {
  display: block;
  width: 100%;
  margin-top: 0rem;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
}

</style>
