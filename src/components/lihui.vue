<template>
  <div>
    <img id="df" :src="df1_now[0]" @mouseenter="test(0)" @mouseleave="test2(0)" @click="test3(0)">
    <img id="lh" :src="df1_now[1]" @mouseenter="test(1)" @mouseleave="test2(1)" @click="test3(1)">
    <audio v-for="item in sound" :key="item" :src="item" ref="audio"></audio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      df1_now: [],
      df1: ['./img/acgn/df1', './img/acgn/df2'],
      // 音源二纯数恶搞(滑稽)
      sound: ['./sound/acgn/feed1.ogg', './sound/acgn/hahaha.ogg']
    }
  },
  mounted () {
    this.df1_now = this.df1.map(function (item, index, arr) { return (item + '.png') })
    this.preload()
  },
  methods: {
    preload () {
      for (const item of this.df1) {
        const img = new Image()
        img.src = item + '.png'
        img.onload = function () {
          console.log(item + '.png>>>>>done!')
        }
        const imgAft = new Image()
        imgAft.src = item + '_aft.png'
        imgAft.onload = function () {
          console.log(item + '_aft.png>>>>>done!')
        }
      }
    },
    test (which) {
      this.$set(this.df1_now, which, this.df1[which] + '_aft.png')
    },
    test2 (which) {
      this.$set(this.df1_now, which, this.df1[which] + '.png')
    },
    test3 (which) {
      if (which === 1) {
        this.$refs.audio[which].volume = 0.5
      }
      this.$refs.audio[which].play()
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
