<template>
  <div class="table" :id="id">
    <table>
      <tbody>
        <tr v-for="content in formattedContents" v-bind:key="content.to_string">
          <td v-for="message in content" v-bind:key="message.to_string">
            <div v-if="message['type'] === 'String'" :class="message['scrollable'] ? 'scrollable' : 'nowrap'">
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
      HAMSTER: process.env.HAMSTER
    }
  },
  props: {
    contents: {
      default: [[]]
    },
    lang: {
      default: ''
    },
    id: {
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
  text-align: left;
  width: 100%;
  td {
    vertical-align: top;
  }
}
#東京の天気 {
  text-align: center;
  font-size: 0.75em;
  table {
    text-align: center;
    table-layout: fixed;
    width: 100%;
    tbody {
      tr {
        td {
          overflow: visible;
          vertical-align: middle;
          div {
            overflow: visible;
            img {
              width: 42px;
              height: auto;
            }
          }
        }
      }
    }
  }
}
img {
  height: 1.5em;
  padding-top: -0.25em;
}
.nowrap {
  white-space: nowrap;
}
.scrollable {

}
</style>
