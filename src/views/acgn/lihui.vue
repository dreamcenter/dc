<template>
  <div v-if="load==4">
    <p>欢迎来到二次元</p>
    <img id="df" :src="df1_now[0]" @mouseenter="test(0)" @mouseleave="test2(0)" @click="test3(0)">
    <img id="lh" :src="df1_now[1]" @mouseenter="test(1)" @mouseleave="test2(1)" @click="test3(1)">
    <audio v-for="item in sound" :key="item" :src="item" ref="audio"></audio>
  </div>
  <div v-else>
    <!-- 待更换 -->
    <div style="font-size:100px;color:white;">加载中...</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      load: 0,
      df1_now: [],
      df1: ['/img/acgn/df1', '/img/acgn/df2'],
      // 音源二纯数恶搞(滑稽)
      sound: ['/sound/acgn/feed1.ogg', '/sound/acgn/hahaha.ogg']
    }
  },
  mounted () {
    this.df1_now = this.df1.map(function (item, index, arr) { return (item + '.png') })
    this.preload()
  },
  methods: {
    preload () {
      var that = this
      for (const item of this.df1) {
        const img = new Image()
        img.src = item + '.png'
        img.onload = function () {
          console.log('preload' + item + '.png>>>>>done!')
          that.load += 1
        }
        const imgAft = new Image()
        imgAft.src = item + '_aft.png'
        imgAft.onload = function () {
          console.log('preload' + item + '_aft.png>>>>>done!')
          that.load = that.load + 1
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
p{
  width: 560px;
  font-family: '仿宋';
  font-size: 80px;
  color: white;
  border: 1px solid white;
  margin: 200px auto;
}
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
