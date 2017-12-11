<template>
  <div class="header">
    <ul class="headerList">
      <li class="title">
        <h1>{{title[lang]}}</h1>
      </li>
      <li class="clock">
        <div class="date">
          {{date}}
        </div
        ><div class="time">
          {{time}}
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
let nowDate = moment()
let dateFormat = 'YYYY/MM/DD'
let timeFormat = 'HH:mm:ss'

export default {
  name: 'HeaderComponent',
  data () {
    return {
      title: {
        'ja': 'ダイワユビキタス学術研究館 3階',
        'en': 'Daiwa Ubiquitous Computing Research Building 3F'
      },
      date: nowDate.format(dateFormat),
      time: nowDate.format(timeFormat)
    }
  },
  props: ['contexts'],
  computed: {
    lang () {
      return this.contexts.lang ? this.contexts.lang : 'ja'
    }
  },
  methods: {
    refreshDate: function () {
      nowDate = moment()
      this.date = nowDate.format(dateFormat)
      this.time = nowDate.format(timeFormat)
    }
  },
  created: function () {
    this.refreshDate()

    setInterval(function () {
      this.refreshDate()
    }.bind(this), 1000)
  }
}
// setInterval(()=>{
//   now_date = moment()
// }, 1000)
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-size: 4.6rem;
  margin: 0;
  padding: 0;
}
.headerList {
  margin: 0;
  padding: 0;
  border: 0;
  display: table;
  width: 100%;
  // background: #FF0;
  background: #2c3e50;
  color: #FFF;
  border-spacing: 1vw 0;
  border-collapse: separate;
  table-layout: auto
}
@mixin headerItem {
  font-weight: bold;
  // background: #0CC;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  padding: 1vh 3vw;
}
.clock {
  @include headerItem;
  width: 20%;
  .date {
    font-size: 2.8rem;
  }
  .time {
    font-size: 3.6rem;
  }
}
.title {
  @include headerItem;
}
</style>
