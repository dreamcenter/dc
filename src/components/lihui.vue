<template>
  <div>
    <img id="df" :src="df1_now[0]" @mouseenter="test(0)" @mouseleave="test2(0)" @click="test3">
    <img id="lh" :src="df1_now[1]" @mouseenter="test(1)" @mouseleave="test2(1)" @click="test3">
    <audio :src="sound" ref="audio"></audio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      df1_now: ['./img/acgn/df1.png', './img/acgn/df2.png'],
      df1: ['./img/acgn/df1', './img/acgn/df2'],
      sound: './sound/acgn/feed1.ogg'
    }
  },
  methods: {
    test (which) {
      this.$set(this.df1_now, which, this.df1[which] + '_aft.png')
    },
    test2 (which) {
      this.$set(this.df1_now, which, this.df1[which] + '.png')
    },
    test3 () {
      this.$refs.audio.play()
    }
  }
}
</script>

<style lang="scss">
#df{
  width: 150px;
  position: absolute;
  top: 530px;
  left: 300px;
}
#lh{
  width:250px;
  position: absolute;
  top: 300px;
  left: 1200px;
}
</style>
