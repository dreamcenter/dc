<template>
    <div id="bottom">
        <div v-for="item in color" :style="{'background-color':item}" :key="item"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      color: ['coral', 'aquamarine', 'palegreen', '#FFFF00', 'aqua']
    }
  }
}
</script>

<style lang="scss" scoped>
#bottom{
    width:76px;
    height:382px;
    background-color: aliceblue;
    opacity: 0;
    border-radius: 10px;
    position: fixed;
    top: calc(50% - 191px);
    right: 20px;
    // left: calc(50% - 191px);
    transition: .2s linear;
    &:hover{
        opacity: .5;
    }
    div{
        width: 60px;
        height: 60px;
        margin-left: 8px;
        margin-top: 10px;
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
