<template>
  <div>
    <!-- autoplay -->
    <div id="music_pri" :style="{'opacity':opc}">
      <aplayer id="player" autoplay :music="list[0]" :mini="mini" :key="0" :shuffle="true" listFolded :list="list" v-if="list.length!='0'"/>
    </div>
    <div id="mus_chg" :style="{'margin-left':toleft}" @click="changeall">{{chara}}</div>
  </div>
</template>

<script>
/*
  原组件apayer地址：https://github.com/SevenOutman/vue-aplayer
  安装  组件模块npm i vue-aplayer
  songs.json文件数据格式 => src/api/songs.json
  显示列表歌曲数见下方%change%标记处修改
  其它修改自行尝试
*/
import Vue from 'vue'
import axios from 'axios'
import aplayer from 'vue-aplayer'
Vue.component('aplayer', aplayer)
export default {
  data () {
    return {
      list: [],
      mini: true,
      chara: '>',
      toleft: '66px',
      opc: null
    }
  },
  mounted () {
    axios.get('https://s-bj-2133-dreamcenter.oss.dogecdn.com/music/songs.json').then(res => {
      console.log(res.data)
      this.list = res.data.datas
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    changeall: function () {
      if (this.mini) {
        this.chara = '<'
        this.toleft = '400px'
        this.opc = '1'
      } else {
        this.chara = '>'
        this.toleft = '66px'
        this.opc = null
      }
      this.mini = !this.mini
    }
  }
}
</script>

<style lang="scss">
    //插件
    #mus_chg{
      position: absolute;
      background-color: rgba(255, 255, 255, .5);
      width: 16px;
      height: 66px;
      line-height: 60px;
      box-sizing: border-box;
      bottom: 0px;
      // top: 10px;
      padding: 2px;
      font-weight: bold;
      color: rgba(0, 0, 0, .3);
      &:hover{
        cursor: pointer;
      }
    }

  // 整体组件
  #music_pri{
    position: absolute;
    bottom: 0px;
    // top: 10px;
    height: 66px;
    opacity: .5;
    transition:.8s ease;
    &:hover{
      opacity: 1;
    }
    // 播放器整体组件样式
    #player{
      height: 100%;
      overflow: hidden;
      background-color: rgba(255,255,255,.9);
      margin: 0;
      // 播放器样式
      .aplayer-body{
          width: 400px;
          .aplayer-loaded{
            display: inline;
            max-width: 100%;
          }
      }
      // 歌曲列表样式
      .aplayer-list{
          margin-top: -66px;
          margin-left: 416px;
          overflow: hidden;
          ol{
            height:400px;
            width: 100%;
            overflow: hidden;
            li{
                // %change% 展出数量 = 1/width
                width: 25%;
                height: 66px;
                display: inline-block;
                border: 1px solid rgba(0,0,0,.1);
                box-sizing: border-box;
                position: relative;
                &:hover{
                  background-color: rgba(165, 243, 243, 0.3);
                }
                .aplayer-list-author{
                  opacity: 0;
                }
            }
            .aplayer-list-light{
              background-color: rgba(165, 243, 243, 0.6);
            }
            transition-duration: 0ms;
            transform: none;
            animation:ani .5s ease-out;
          }
      }
      // 列表展出样式
      @keyframes ani
      {
          0% {width: 0;}
          100% {width: 100%;}
      }
    }
  }

</style>
