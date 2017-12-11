<template>
  <div class="map">
    <h2>
      フロアマップ
    </h2>
    <div id="all">
      <template v-for="roomName in roomNames">
        <div v-if="rooms.find((room) => room.name === roomName) !== undefined" :class="'room-' + rooms.find((room) => room.name === roomName).light" :id="roomName" :key="roomName">
          <div class="roomName">
            {{ roomName }}
          </div>
          <div class="roomInfo">
            <span v-if="rooms.find((room) => room.name === roomName).temperature.toFixed(1) > -10">
              <img src="../assets/thermometer.png"></img>
              {{ rooms.find((room) => room.name === roomName).temperature.toFixed(1) }}℃
            </span>
            <span v-if="rooms.find((room) => room.name === roomName).humidity.toFixed(1) >= 0">
              <img src="../assets/drop.png"></img>
              {{ rooms.find((room) => room.name === roomName).humidity.toFixed(1) }}%
            </span>
          </div>
        </div>
        <div v-else class="room-off" :id="roomName" :key="roomName">
          <div>
            {{ roomName }}
          </div>
        </div>
      </template>
      
      <div id="toilet">
        <div class="label">WC</div>
        <div id="elevator">EV</div>
      </div>
      <div id="hall"><div>A306</div><div>{{ hallName[lang] }}</div></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'map',
  data () {
    return {
      roomNames: ['A301', 'A302', 'A303', 'A304', 'A305'],
      rooms: [],
      hallName: {
        'ja': 'ダイワハウス石橋信夫記念ホール',
        'en': 'Daiwa House Ishibashi Nobuo Memorial Hall'
      },
      autoReload: null
    }
  },
  props: ['contexts'],
  computed: {
    lang () {
      return this.contexts.lang ? this.contexts.lang : 'ja'
    }
  },
  methods: {
    fetchRooms: async function () {
      try {
        let res = await axios.get(process.env.API_ENDPOINT + '/rooms')
        if (JSON.stringify(this.rooms.sort()) !== JSON.stringify(res.data.sort())) {
          this.rooms = res.data
          console.log(this.rooms)
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  created () {
    this.fetchRooms()
    this.autoReload = setInterval(
      function () {
        this.fetchRooms()
      }.bind(this),
      10000)
  },
  destroyed () {
    clearInterval(this.autoReload)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h2 {
  text-align: left;
}
.map {
  font-size: 3.5rem;
  padding-left: 5rem;
  padding-right: 5rem;
  height: 1750px;
  text-align: center
}

#all {
  width: 350px;
  height: 1600px;
  border: solid 8px #000;
  margin: auto;
  position: relative;
}
img {
  height: 1.3em;
  vertical-align: middle;
}
@mixin flex-centering {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin room {
  @include flex-centering;
  width: 78%;
  padding: 5px;
  border-bottom: solid 5px #000;
  border-right: solid 5px #000;
  flex-wrap: wrap;
}
$light-off: rgb(210, 210, 210);
$light-on: radial-gradient(ellipse closest-side at center, white, white 40%, rgb(255, 245, 130) 80%, rgb(240, 220, 110));
.room {
  &-off {
    @include room;
    background: $light-off;
  }
  &-on {
    @include room;
    background: $light-on
  }
}
.roomInfo {
  font-size: 0.7em;
}
#A301 {  
  height: 6%;
}
#A302 {
  height: 14%;
}
#A303 {
  height: 6%;
}
#A304 {
  height: 13%;
}
#A305 {
  height: 13%;
}

#toilet {
  width: 60%;
  height: 12%;
  border-bottom: solid 5px #000;
  border-right: solid 5px #000;
  position: relative;
  .label {
    width: 3em;
    height: 1.5em;
    position: absolute;
    top: 0;
    bottom:0;
    left: 5%;
    right: 0;
    margin: auto 0;
  }
}
#elevator {
  @include flex-centering;
  width: 80px;
  height: 80px;
  border-top: solid 5px #000;
  border-left: solid 5px #000;
  position: absolute;
  right: 0%;
  bottom: 0%;
}
#hall {
  @include flex-centering;
  flex-flow: column;
  background: $light-off;
  position: absolute;
  bottom: 0%;
  border-top: solid 5px #000;
  width: 100%;
  height: 25%;
}
</style>
