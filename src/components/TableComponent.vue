<template>
  <div class="table">
    <table class="content">
      <tbody>
        <tr v-for="content in formattedContents">
          <td v-for="cell in content">
            <div v-if="cell['message-type'] === 'String'">
              {{ cell['message-payload'] }}
            </div>
            <div v-if="cell['message-type'] === 'Image'">
              {{ cell['message-payload'] }} 
              <!-- スタブ -->
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
      contents: [[]]
    }
  },
  props: ['contents'],
  computed: {
    formattedContents: function () {
      var maxlen = Math.max.apply(null, this.contents.map(content => content.length))
      return this.contents.map(content =>
        content.concat(
          new Array(maxlen - content.length).fill({ 'message-type': 'Empty' })
        )
      )
    }
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  background-color: #af0;
}
</style>
