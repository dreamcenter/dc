<template>
    <div id="bottom">
        <div v-for="item in color" :style="{'background-color':item}" :key="item" @click="jump(item)"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      color: ['coral', 'aquamarine', 'palegreen', '#FFFF00', 'aqua']
    }
  },
  methods: {
    jump: function (which) {
      switch (which) {
        case 'coral':this.$router.push('/projects'); break
        case 'aquamarine':this.$router.push('/projects'); break
        case 'palegreen':this.$router.push('/projects'); break
        case 'FFFF00':this.$router.push('/projects'); break
        case 'aqua':this.$router.push('/more'); break
        default:;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#bottom{
    width:382px;
    height:76px;
    background-color: aliceblue;
    opacity: 0;
    border-radius: 10px;
    position: fixed;
    bottom: 20px;
    left: calc(50% - 191px);
    transition: .2s linear;
    &:hover{
        opacity: .5;
    }
    div{
        width: 60px;
        height: 60px;
        margin-left: 14px;
        margin-top: 8px;
        border-radius: 10px;
        display: inline-block;
        transition: .4s ease;
        &:hover{
            transform: translate(-2px,-2px);
            box-shadow: 5px 5px rgba(0,0,0,.8);
        }
    }
}
</style>
