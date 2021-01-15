<template>
  <div id="login">
    <p>登录</p>
    <table>
      <tr>
        <td>御坂</td>
        <td><input type="input" v-model="id"></td>
      </tr>
      <tr>
        <td>秘密</td>
        <td><input type="password" v-model="sec" @click="function(){msg='扫描'}"></td>
      </tr>
      <tr>
        <td colspan="2">
          <button @click="scan">{{msg}}</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { loginscan } from '../utils/loginscan'
export default {
  data () {
    return {
      id: '',
      sec: '',
      token: -1,
      msg: '扫描'
    }
  },
  methods: {
    scan () {
      axios.get('./api/userdata.json').then(res => {
        var result = loginscan(res.data.datas, this.id, this.sec)
        if (result === 0) {
          this.id = '档案未找到'
        } else if (result === 1) {
          this.sec = ''
          this.msg = '档案不匹配'
        } else {
          alert('匹配成功!')
        }
      }).catch(err => {
        console.log(err)
        this.msg = '御坂网络断开'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #login{
    width: 300px;
    height: 200px;
    border: 2px solid  rgba(255, 255, 255, .5);
    margin: 200px auto;
    background-color: rgba(255, 255, 255, .2);
    p{
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      color:whitesmoke;
      font-family: '楷体';
      border-bottom: 1px solid white;
    }
    table{
      tr{
        height: 30px;
        color:white;
        font-size: 20px;
        td{
          padding: 15px 10px 0 15px;
          input{
            color:white;
            font-size: 20px;
            text-indent: 10px;
            height: 30px;
            width: 200px;
            background-color: rgba(255, 255, 255, 0);
            border: 1px solid  rgba(255, 255, 255, .6);
            outline-color: whitesmoke;
            box-sizing: border-box;
            &:hover{
              border-width: 2px;
            }
          }
          button{
            color:white;
            font-size: 20px;
            height: 30px;
            width: 264px;
            background-color: rgba(255, 255, 255, 0);
            border: 1px solid  rgba(255, 255, 255, .6);
            outline-color: whitesmoke;
            &:hover{
              border-width: 2px;
            }
          }
        }
      }
    }
  }
</style>
