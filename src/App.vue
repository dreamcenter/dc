<template>
  <div id="app" @contextmenu.prevent="jumptohome">
    <transition name="paneltrans" mode="out-in">
      <router-view></router-view>
    </transition>
    <music></music>
    <bottom></bottom>
  </div>
</template>

<script>
import Vue from 'vue'
import music from './components/music'
import bottom from './components/bottom'
Vue.component('bottom', bottom)
Vue.component('music', music)
export default {
  methods: {
    jumptohome: function () {
      this.$router.push('/home').catch(err => err)
    }
  }
}
</script>

<style lang="scss" scoped>
#app{
  width: 100%;
  height: 100%;
  background-image: url(https://pic.yupoo.com/dreamcenter/1c4ce61e/25ec3be1.jpeg);
  background-size: cover;
  overflow: hidden;
}
.paneltrans-enter-active, .paneltrans-leave-active{
  transition:.2s ease-out;
}
.paneltrans-enter, .paneltrans-leave-to{
  margin-left: 100px;
  opacity: 0;
}
</style>
