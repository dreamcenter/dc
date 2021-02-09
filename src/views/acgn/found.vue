<template>
  <div id="found">
    <h3>番剧搜索引擎</h3>
    <p></p>
    <div class="other">
      <input type="radio" name="other" id="all" v-model="mode" value="all" @click="modeAll"><label for="all">all</label>
      <input type="radio" name="other" id="auto" v-model="mode" value="auto" @click="modeAuto"><label for="auto">auto</label>
      <input type="radio" name="other" id="clear" v-model="mode" value="clear" @click="modeClear"><label for="clear">clear</label>
      <input type="radio" name="other" id="default" v-model="mode" value="default"><label for="default">default</label>
    </div>
    <input type="text" class="search" placeholder="请输入寻找的番剧" v-model="content" @keyup.enter="submit()">
    <p></p>
    <span v-for="(item,index) in datas" :key="item.href" v-show="!item.hand">
      <input type="checkbox" :id="item.label" :value="item.href" v-model="checked" @click="changeMode(index)"><label :for="item.label">{{item.label}}</label>
    </span>
    <!-- {{checked}} -->
    <p></p>
    <b>本页面需要您允许弹窗，在地址栏可能会显示弹窗被拦截的消息，清自愿修改</b>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datas: [],
      mode: 'clear',
      checked: [],
      visiblelen: 0,
      content: ''
    }
  },
  mounted () {
    axios.get('/api/acgnfound.json').then(res => {
      this.datas = res.data
      for (let i = 0; i < this.datas.length; i++) {
        if (!this.datas[i].hand) {
          this.visiblelen++
        }
      }
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    modeAll: function () {
      this.checked = []
      for (let i = 0; i < this.datas.length; i++) {
        if (!this.datas[i].hand) {
          this.checked.push(this.datas[i].href)
        }
      }
    },
    modeAuto: function () {
      this.checked = []
      for (let i = 0; i < this.datas.length; i++) {
        if (this.datas[i].auto) {
          this.checked.push(this.datas[i].href)
        }
      }
    },
    modeClear: function () {
      this.checked = []
    },
    changeMode: function (index) {
      var tohas = this.checked.indexOf(this.datas[index].label) < 0
      // console.log(tohas)
      if ((this.checked.length + 1 === this.visiblelen) && tohas) {
        this.mode = 'all'
      } else if ((this.checked.length === 1) && (!tohas)) {
        this.mode = 'clear'
      } else {
        this.mode = 'default'
      }
    },
    submit: function () {
      for (let i = 0; i < this.checked.length; i++) {
        window.open(this.checked[i] + this.content)
      }
    }
  }
}
</script>

<style lang="scss">
  #found{
    width: 1000px;
    height: 500px;
    margin: 100px auto;
    overflow-y: scroll;
    background-color: rgba(255, 255, 255, .3);
    border: 1px solid rgba(255, 255, 255, .8);
    padding-bottom: 10px;

    p{
      height: 5px;
      border-bottom: 2px solid white;
      margin: 5px;
    }

    h3{
      text-align: center;
      color: white;
      text-shadow: 0 0 10px red;
      margin-top: 5px;
    }
    .search{
      width: 300px;
      height: 40px;
      background-color: rgba(255,255,255,.5);
      margin: 10px auto;
      display: block;
      color: white;
      font-weight: bold;
      outline: none;
      font-size: 20px;
      border: rgba(255,255,255,.6) 2px solid;
      text-align: center;
      &:hover{
        background-color: rgba(0,0,0,.5);
      }
    }
    .other{
      width: 255px;
      // border: 1px solid red;
      text-align: center;
      margin:0 auto;
      label{
        padding-left: 5px;
        padding-right: 10px;
      }
    }
    span{
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
      label{
        font-size: 18px;
      }
    }

    &::-webkit-scrollbar{width: 4px;background-color:rgba(255, 255, 255, .6);}
    &::-webkit-scrollbar-thumb{background-color: rgba(0, 0, 0, .3);}
  }
</style>
