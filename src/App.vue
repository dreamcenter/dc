<template>
  <div id="app">
    <panel>
    </panel>
  </div>
</template>

<script>
import Vue from 'vue'
import panel from './views/panel1'
Vue.component('panel', panel)
export default {

}
</script>

<style lang="scss" scoped>
#app{
  width: 100%;
  height: 100%;
  // background-color:pink;
  background-image: url(https://pic.yupoo.com/dreamcenter/1c4ce61e/25ec3be1.jpeg);
  background-size: cover;
  overflow: hidden;
}
</style>
