<template>
  <div class="table">
    <table class="content">
      <tbody>
        <tr v-for="content in formattedContents" v-bind:key="content.to_string">
          <td v-for="message in content" v-bind:key="message.to_string">
            <div v-if="message['type'] === 'String'">
              {{ message['payload'][lang] }}
            </div>
            <div v-if="message['type'] === 'Image'">
              <img v-bind:src="HAMSTER + message['payload']" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  data () {
    return {
      HAMSTER: 'http://localhost:9000'
    }
  },
  props: {
    contents: {
      default: [[]]
    },
    lang: {
      default: ''
    }
  },
  computed: {
    formattedContents: function () {
      var maxlen = Math.max.apply(null, this.contents.map(content => content.length))
      return this.contents.map(content =>
        content.concat(
          new Array(maxlen - content.length).fill({ 'type': 'Empty' })
        )
      )
    }
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
.table {
  // background-color: #FFF;
}
.content {
  text-align: left;
}
img {
  height: 1.5em;
  vertical-align: middle;
}
</style>
