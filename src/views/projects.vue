<template>
    <div>
        <mainpanel>
            <p slot="title">我的项目列表[该界面将会重新设计]</p>
            <p slot="content">
                <table>
                    <tbody><tr style="font-weight:bold">
                        <td>序号</td>
                        <td>名称</td>
                        <td>网址</td>
                        <td>描述</td>
                        <td>标星</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>主站</td>
                        <td>
                            <a href="http://www.dreamcenter.top/">/</a>
                        </td>
                        <td>个人主站</td>
                        <td>+++++</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>手动搜题</td>
                        <td>
                            <a href="http://www.dreamcenter.top/chati/" target="_blank">/chati</a>
                        </td>
                        <td>可以手动搜索多平台的题目</td>
                        <td>+</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>我的世界帮助站</td>
                        <td>
                            <a href="http://www.dreamcenter.top/mchelper/" target="_blank">/mchelper</a>
                        </td>
                        <td>提供minecraft的帮助</td>
                        <td>++++</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>个人样式库</td>
                        <td>
                            <a href="http://www.dreamcenter.top/mycss/" target="_blank">/mycss</a>
                        </td>
                        <td>测试研发css样式</td>
                        <td>++</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>二次元网站汇总</td>
                        <td>
                            <a href="http://www.dreamcenter.top/dyh/channel/erciyuan/index.html" target="_blank">/dyh/channel/erciyuan/</a>
                        </td>
                        <td>二次元网站汇总，沉浸二次元</td>
                        <td>++</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>超级搜番引擎</td>
                        <td>
                            <a href="http://www.dreamcenter.top/dyh/navitem/ssanimate.html" target="_blank">/dyh/navitem/ssanimate.html</a>
                        </td>
                        <td>结合多个二次元网站搜番</td>
                        <td>++</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>主站旧站</td>
                        <td>
                            <a href="http://www.dreamcenter.top/dyh/" target="_blank">/dyh</a>
                        </td>
                        <td>旧时的主站，已变更</td>
                        <td>+++</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>扫雷在线</td>
                        <td>
                            <a href="http://www.dreamcenter.top/saolei/" target="_blank">/saolei</a>
                        </td>
                        <td>提供在线扫雷，排行榜</td>
                        <td>+++</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>身份证号验证</td>
                        <td>
                            <a href="http://www.dreamcenter.top/id/" target="_blank">/id</a>
                        </td>
                        <td>检测身份证校验码正确性</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>本地连接信息</td>
                        <td>
                            <a href="http://www.dreamcenter.top/inf/" target="_blank">/inf</a>
                        </td>
                        <td>检测ip地区天气状况</td>
                        <td>+</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>番剧在线</td>
                        <td>
                            <a href="http://www.dreamcenter.top/fanju/" target="_blank">/fanju</a>
                        </td>
                        <td>提供免费番剧观看</td>
                        <td>++</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>番剧备忘录</td>
                        <td>
                            <a href="http://www.dreamcenter.top/target/" target="_blank">/target</a>
                        </td>
                        <td>番剧备忘录，记录想看的番剧</td>
                        <td>+++</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>教务网手机端</td>
                        <td>
                            <a href="http://www.dreamcenter.top/hyit/" target="_blank">/hyit</a>
                        </td>
                        <td>在手机上更加优雅的设计教务网</td>
                        <td>+++</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>个人人脸识别</td>
                        <td>
                            <a href="http://www.dreamcenter.top/iai/" target="_blank">/iai</a>
                        </td>
                        <td>校验图片是否为我本人</td>
                        <td>++++</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>vip视频解析</td>
                        <td>
                            <a href="http://www.dreamcenter.top/vipvideo" target="_blank">/vipvideo</a>
                        </td>
                        <td>解析各大视频平台vip</td>
                        <td>++++++++</td>
                    </tr>
                </tbody></table>
            </p>
        </mainpanel>
    </div>
</template>

<script>
import Vue from 'vue'
import mainpanel from '../components/mainpanel'
Vue.component('mainpanel', mainpanel)
export default {

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
