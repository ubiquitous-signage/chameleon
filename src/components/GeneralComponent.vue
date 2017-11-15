<template>
  <div class="general">
    <ul class="generalList">
      <li class="internal">
        <info-component v-bind:items="internalItems" />
      </li>
      <li class="external">
        <!-- <external-component/> -->
        <info-component v-bind:items="externalItems" />
      </li>
      <li class="social">
        <!-- <social-component/> -->
        <social-component v-bind:items="socialItems" />
      </li>
    </ul>
  </div>
</template>

<script>
// import lecturesDummy from '../../lectures_dummy.json'
import InfoComponent from './InfoComponent'
import axios from 'axios'

const API_ENDPOINT = 'http://localhost:9000/api'
export default {
  name: 'General',
  data () {
    return {
      items: []
    }
  },
  methods: {
    fetchApi: async function (uri) {
      try {
        let res = await axios.get(uri)
        this.items.push(res.data)
        console.log('response data')
        console.log(res.data)
        console.log('items data')
        console.log(this.items)
      } catch (e) {
        console.log(e)
      }
    }
  },
  created () {
    let resources = ['/lectures', '/newsletters', '/portal', '/schedules', '/trains', '/weather']
    resources.forEach((resource) => {
      this.fetchApi(API_ENDPOINT + resource)
    })
  },
  components: {
    'info-component': InfoComponent
  },
  computed: {
    internalItems: function () {
      return this.items.filter((item) => { return item.category === 'internal' })
    },
    externalItems: function () {
      return this.items.filter((item) => { return item.category === 'external' })
    },
    socialItems: function () {
      return this.items.filter((item) => { return item.category === 'social' })
    }
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
  vertical-align: top;
  padding: 0;
}
.internal {
  @include generalItem;
  width: 40vw
}
.external {
  @include generalItem;
  width: 40vw
}
.social {
  @include generalItem;
}
</style>
