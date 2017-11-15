<template>
  <div class="table">
    <table class="content">
      <tbody>
        <tr v-for="content in formattedContents" v-bind:key="content.to_string">
          <td v-for="message in content" v-bind:key="message.to_string">
            <div v-if="message['type'] === 'String'">
              {{ message['payload'] }}
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
  background-color: #FFF;
  font-size: 3rem;
  vertical-align: middle
}
img {
  height: 1.0em;
}
</style>
