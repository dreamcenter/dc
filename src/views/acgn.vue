<template>
  <div @click="clkk" id="acgn_banner" :style="{'background-image':bk}">
    <transition name="login">
      <login v-if="show" @access="changeshow"></login>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import login from '../components/login'
import { clk } from '../utils/clickeffect'
Vue.component('login', login)
export default {
  data () {
    return {
      bk: 'url(./img/acgn/bk.jpeg)',
      cnt: 0,
      show: false
    }
  },
  mounted () {
    this.$store.commit('changebasic', false)
  },
  beforeDestroy () {
    this.$store.commit('changebasic', true)
  },
  methods: {
    clkk (ev) {
      if (ev.x >= 1080 && ev.x <= 1125 && ev.y >= 385 && ev.y <= 430) {
        this.show = true
        console.log('二次元大门已打开!')
      } else {
        this.cnt = (this.cnt + 1) % 20
        clk(this.cnt)
      }
    },
    changeshow () {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
  #acgn_banner{
    // width: 100%;
    width:1536px;
    height: 864px;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .login-enter-active, .login-leave-active{
    transition:.2s ease-in-out;
  }
  .login-enter,.login-leave-to{
    opacity: 0;
  }
</style>
