<template>
  <div class="twitter">
    <a class="twitter-timeline" data-widget-id="930820136956715008" data-chrome="noheader nofooter transparent noborders noscrollbar"></a>
  </div>
</template>

<script>
let addScriptPromise = null
function addScript (src) {
  if (!addScriptPromise) {
    const s = document.createElement('script')
    s.setAttribute('src', src)
    document.body.appendChild(s)
    addScriptPromise = new Promise((resolve, reject) => {
      s.onload = resolve
    })
  }
  return addScriptPromise
}

export default {
  name: 'TwitterComponent',
  data () {
    return {
      isTweetLoaded: false,
      isTweetAvailable: true
    }
  },
  props: {
    id: {
      type: String,
      default: '930820136956715008'
    },
    options: {
      type: Object,
      default () {
        return {chrome: 'noheader nofooter noscrollbar noborder'}
      }
    }
  },
  mounted () {
    if (!window.twttr) {
      addScript('//platform.twitter.com/widgets.js').then(() => window.twttr.widgets.createTimeline(this.id, this.$el, this.options))
    } else {
      window.twttr.widgets.createTimeline(this.id, this.$el, this.options)
    }
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
.twitter {
  margin: 0;
  padding: 0;
  pointer-events: none;
}
</style>
