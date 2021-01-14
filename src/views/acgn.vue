<template>
  <div>
    次元加工站...思考布局中...
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('changebasic', false)
  },
  beforeDestroy () {
    this.$store.commit('changebasic', true)
  }
}
</script>
