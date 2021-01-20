<template>
  <div>
    <img :src="df1" @mouseenter="test" @mouseleave="test2" @click="test3">
    <audio :src="sound" ref="audio"></audio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      df1: './img/acgn/df1.png',
      sound: './sound/acgn/feed1.ogg'
    }
  },
  methods: {
    test () {
      this.df1 = './img/acgn/df1_aft.png'
    },
    test2 () {
      this.df1 = './img/acgn/df1.png'
    },
    test3 () {
      this.$refs.audio.play()
    }
  }
}
</script>

<style lang="scss">
img{
  width: 150px;
  position: absolute;
  top: 530px;
  left: 300px;
}
</style>
