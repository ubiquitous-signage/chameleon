<template>
  <div class="twitter">
    <a class="twitter-timeline"  href="https://twitter.com/search?q=%E3%83%80%E3%82%A4%E3%83%AF%E3%83%A6%E3%83%93%E3%82%AD%E3%82%BF%E3%82%B9%E5%AD%A6%E8%A1%93%E7%A0%94%E7%A9%B6%E9%A4%A8" data-widget-id="930820136956715008">ダイワユビキタス学術研究館に関するツイート</a>
  </div>
</template>

<script>
!(function (d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  var p = /^http:/.test(d.location) ? 'http' : 'https'
  if (!d.getElementById(id)) {
    js = d.createElement(s)
    js.id = id
    js.src = p + '://platform.twitter.com/widgets.js'
    fjs.parentNode.insertBefore(js, fjs)
  }
})(document, 'script', 'twitter-wjs')

export default {
  name: 'TwitterComponent',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
