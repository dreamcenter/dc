<template>
    <div>
        <mainpanel>
            <p slot="title">我的项目列表</p>
            <p slot="content">
                <table v-if="datas.length!=0">
                    <tbody><tr style="font-weight:bold">
                        <td>序号</td>
                        <td>名称</td>
                        <td>网址</td>
                        <td>描述</td>
                        <td>标星</td>
                    </tr>
                    <tr v-for="(item,index) in datas" :key="index">
                        <td>{{index}}</td>
                        <td>{{item.name}}</td>
                        <td><a :href="item.url" target="_blank">{{item.url|subweburl}}</a></td>
                        <td>{{item.describe}}</td>
                        <td>{{item.grade}}</td>
                    </tr>
                </tbody></table>
            </p>
        </mainpanel>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { subweburl } from '../filters/index'
import mainpanel from '../components/mainpanel'
Vue.component('mainpanel', mainpanel)
Vue.filter('subweburl', subweburl)
export default {
  data () {
    return {
      datas: []
    }
  },
  mounted () {
    axios.get('./api/subwebs.json').then(res => {
      console.log(res.data.data)
      this.datas = res.data.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>
table{
    width: 100%;

    tr{
        text-align: center;
        td:nth-child(1){width: 4%;}
        td:nth-child(2){width: 20%;}
        td:nth-child(3){width: 30%;}
        td:nth-child(4){width: 30%;}
    }
}
</style>
