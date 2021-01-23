<template>
    <div>
        <mainpanel>
            <p slot="title">更多</p>
            <p slot="content">
                <table>
                    <tr>
                        <td><img :src="pic.qq" alt="qq.jpg" width="140px"></td>
                        <td><ul>
                                <li><a :href="urls.github" target="_blank"><img :src="pic.github" width="20px"> github</a></li>
                                <li><a :href="urls.cnblogs" target="_blank"><img :src="pic.cnblogs" width="20px"> 博客园</a></li>
                                <li><a :href="urls.bilibili" target="_blank"><img :src="pic.bilibili" width="20px"> bilibili</a></li>
                                <li><a :href="urls.twitter" target="_blank"><img :src="pic.twitter" width="20px"> twitter</a></li>
                            </ul>
                        </td>
                        <td><a target="_blank" :href="urls.mail" style="text-decoration:none;"><img :src="pic.mail"></a></td>
                        <td><img :src="pic.wx" alt="wx.png" width="140px"></td>
                    </tr>
                    <tr>
                        <td><a href="tencent://message/?uin=1981669259&amp;Site=&amp;Menu=yes" style="text-decoration: none;">一键添加QQ好友</a></td>
                        <td></td>
                        <td></td>
                        <td>添加微信好友</td>
                    </tr>
                    <tr>
                        <td colspan="4" style="font-family: '仿宋';font-weight: bold;">友链</td>
                    </tr>
                    <tr id="friend">
                        <td><a href="https://www.cnblogs.com/miluluyo/" target="_blank">麋鹿鲁哟</a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </p>
        </mainpanel>
    </div>
</template>

<script>
import Vue from 'vue'
import mainpanel from '../components/mainpanel'
Vue.component('mainpanel', mainpanel)
export default {
  data () {
    return {
      pic: {
        qq: 'http://pic.yupoo.com/dreamcenter/0d4ec91b/74e8aa00.jpg',
        wx: 'http://pic.yupoo.com/dreamcenter/d5c10c8d/29763ecf.jpeg',
        github: '/img/github.png',
        cnblogs: '/img/blog.png',
        bilibili: 'https://space.bilibili.com/favicon.ico',
        twitter: '/img/twitter.png',
        mail: 'http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_02.png'
      },
      urls: {
        github: 'https://github.com/dreamcenter',
        cnblogs: 'https://www.cnblogs.com/dreamcenter',
        bilibili: 'https://space.bilibili.com/39403246',
        twitter: 'https://twitter.com/yuhang12581',
        mail: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=3_7m5_7p6ebt6uafrq7xvLCy'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
table{
    width: 98%;
    margin: 0 auto;
    color: black;
    text-align: center;
    position: relative;
    top: 10px;
    tr{
        td{
            width: 25%;
            ul{
                list-style: none;
                li{
                    text-align: center;
                    font-weight: bold;
                    padding: 2px;
                    a{
                        color: black;
                        text-decoration: none;
                        padding: 2px;
                    }
                }
            }
        }
    }
    #friend{
        td:nth-child(1) a{
            color: hotpink;
            font-weight: bold;
            font-size: 18px;
            text-shadow: 1px 1px 1px rgba(255, 105, 180 , .4);
        }
    }
}
</style>
