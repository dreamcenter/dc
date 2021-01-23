<template>
  <div id="base">
    <div v-for="item in bbs" :key="item.href">{{item.content}}</div>
    <div v-for="item in core" :key="item.href">{{item.content}}</div>
    <div v-for="item in pri" :key="item.href">{{item.content}}</div>
    <div v-for="item in side" :key="item.href">{{item.content}}</div>
    <div v-for="item in sup" :key="item.href">{{item.content}}</div>
    <div v-for="item in game" :key="item.href">{{item.content}}</div>
    <div v-for="item in kno" :key="item.href">{{item.content}}</div>
  </div>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
export default {
  data () {
    return {
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
      this.bbs = datas.bbs
      this.core = datas.core
      this.pri = datas.pri
      this.side = datas.side
      this.sup = datas.sup
      this.game = datas.game
      this.kno = datas.kno
    })
  }
}
</script>

<style lang="scss" scoped>
#base{
  width: 1000px;
  height: 500px;
  margin: 100px auto;
  overflow: hidden;
  background-color: rgba(255, 255, 255, .3);
  border: 1px solid rgba(255, 255, 255, .8);
  div{
    width: 100px;
    height: 30px;
    background-color: rgba(255, 255, 255, .6);
    margin: 10px 0 0 10px;
    text-align: center;
    line-height: 30px;
    overflow: hidden;
    display: inline-block;
    &:hover{
      box-shadow: 0 0 10px rgba(255,255,255,.8);
      background-color: rgba(255, 255, 255, .8);
      cursor: pointer;
    }
  }
}
</style>
