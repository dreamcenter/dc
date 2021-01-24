<template>
  <div id="base">
    <h3>次元导航</h3>
    <!-- <p></p><div v-for="item in nav" :key="item.href">
      <a target="_blank" :title="item.title" :style="getstyle(item)">{{item.content}}</a>
    </div> -->
    <p>bbs</p><div v-for="item in bbs" :key="item.href">
      <a :href="item.href" target="_blank" :title="item.title" :style="getstyle(item)">{{item.content}}</a>
    </div>
    <p>core</p><div v-for="item in core" :key="item.href">
      <a :href="item.href" target="_blank" :title="item.title" :style="getstyle(item)">{{item.content}}</a>
    </div>
    <p>pri</p><div v-for="item in pri" :key="item.href">
      <a :href="item.href" target="_blank" :title="item.title" :style="getstyle(item)">{{item.content}}</a>
    </div>
    <p>side</p><div v-for="item in side" :key="item.href">
      <a :href="item.href" target="_blank" :title="item.title" :style="getstyle(item)">{{item.content}}</a>
    </div>
    <p>sup</p><div v-for="item in sup" :key="item.href">
      <a :href="item.href" target="_blank" :title="item.title" :style="getstyle(item)">{{item.content}}</a>
    </div>
    <p>game</p><div v-for="item in game" :key="item.href">
      <a :href="item.href" target="_blank" :title="item.title" :style="getstyle(item)">{{item.content}}</a>
    </div>
    <p>kno</p><div v-for="item in kno" :key="item.href">
      <a :href="item.href" target="_blank" :title="item.title" :style="getstyle(item)">{{item.content}}</a>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
export default {
  data () {
    return {
      nav: [],
      bbs: [],
      core: [],
      pri: [],
      side: [],
      sup: [],
      game: [],
      kno: []
    }
  },
  mounted () {
    axios.get('/api/acgnbase.json').then(res => {
      const datas = res.data.datas
      this.nav = datas.nav
      this.bbs = datas.bbs
      this.core = datas.core
      this.pri = datas.pri
      this.side = datas.side
      this.sup = datas.sup
      this.game = datas.game
      this.kno = datas.kno
    })
  },
  methods: {
    getstyle (datapack) {
      let color = 'black'
      let textdec = ''

      if (datapack.usual) color = 'red'
      if (datapack.hso) color = 'BlueViolet'
      if (datapack.wall) textdec = 'underline'
      if (datapack.stopped) textdec = 'line-through'
      return {
        color: color,
        'text-decoration': textdec + ' blue'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#base{
  width: 1000px;
  height: 500px;
  margin: 100px auto;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, .3);
  border: 1px solid rgba(255, 255, 255, .8);
  padding-bottom: 10px;
  h3{
    text-align: center;
    color: white;
    text-shadow: 0 0 10px red;
    margin-top: 5px;
  }
  p{
    width: 980px;
    margin: 10px 0 0 10px;
    border-top: 2px solid rgba(255, 255, 255, .8);
    color: white;
    text-shadow: 0 0 10px red;
  }
  div{
    width: 100px;
    height: 30px;
    background-color: rgba(255, 255, 255, .6);
    margin: 10px 0 0 10px;
    text-align: center;
    line-height: 30px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    &:hover{
      box-shadow: 0 0 10px rgba(255,255,255,.8);
      background-color: rgba(255, 255, 255, .8);
      cursor: pointer;
    }
    a{
      text-decoration: none;
      color: black;
    }
  }
  &::-webkit-scrollbar{width: 4px;background-color:rgba(255, 255, 255, .6);}
  &::-webkit-scrollbar-thumb{background-color: rgba(0, 0, 0, .3);}
}
</style>
