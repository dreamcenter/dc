<template>
  <el-container>
    <el-header>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>收藏夹</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">快捷标签</span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>标签组</span>
                </template>
                <!-- <el-menu-item index="2-1">生活娱乐</el-menu-item>
                <el-menu-item index="2-2">ACGN</el-menu-item>
                <el-menu-item index="2-3">百度</el-menu-item>
                <el-menu-item index="2-4">软件资源</el-menu-item>
                <el-menu-item index="2-5">资源托管</el-menu-item>
                <el-menu-item index="2-6">! IT</el-menu-item>
                <el-menu-item index="2-7">IT</el-menu-item>
                <el-menu-item index="2-8">game</el-menu-item>
                <el-menu-item index="2-8">腾讯云</el-menu-item>
                <el-menu-item index="2-8">学校相关</el-menu-item> -->
              </el-submenu>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">单页标签</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>

      <el-main>待确定如何设计</el-main>

    </el-container>
  </el-container>
</template>

<script>
import '../imp/stars'
export default {
  mounted () {
    this.$store.commit('changebasic', false)
  },
  beforeDestroy () {
    this.$store.commit('changebasic', true)
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }

}
</script>

<style lang="scss" scoped>
  .el-container{
    background-color: white;
    height: 100%;
    .el-header{
      padding-top: 20px;
      background-color: rgba($color: #409EFF, $alpha: 0);
      border-bottom: 2px solid rgba($color: #409EFF, $alpha: .2);
    }
    .el-container{
      .el-aside{
        height: 100%;
      }
    }
  }
</style>
