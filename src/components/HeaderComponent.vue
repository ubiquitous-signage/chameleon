<template>
  <div class="header">
    <ul class="headerList">
      <li class="title"><h1>{{title}}</h1></li>
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
export default {
  name: 'HeaderComponent',
  data () {
    return {
      title: 'ダイワユビキタス学術研究館 3階',
      date: '0000/00/00',
      time: '00:00'
    }
  }
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-size: 4.8rem;
  margin: 0;
  padding: 0;
}
.headerList {
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
@mixin headerItem {
  font-weight: bold;
  background: #0CC;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  padding: 3.5vh 3vw;
}
.clock {
  @include headerItem;
  width: 20%;
  .date {
    font-size: 2.0rem;
  }
  .time {
    font-size: 4.0rem;
  }
}
.title {
  @include headerItem;
}
</style>
