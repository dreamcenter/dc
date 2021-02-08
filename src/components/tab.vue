<template>
  <ul>
    <router-link to="/acgn/lihui" tag="li">1</router-link>
    <router-link to="/acgn/base" tag="li">2</router-link>
    <router-link to="/acgn/found" tag="li">3</router-link>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="//music.163.com/outchain/player?type=0&id=3104835131&auto=1&height=32"></iframe>
  </ul>
</template>

<style lang="scss" scoped>
ul{
  position: absolute;
  top: 100px;
  // border: 1px solid white;
  li{
    border: 1px solid white;
    width: 10px;
    height: 40px;
    margin: 10px auto 0 0;
    transition: .2s ease-in;
    border-left: 0;
    color: rgb(206, 188, 188);
    text-align: right;
    &:hover{
      width: 200px;
    }

  }
  iframe{
    position: relative;
    width: 200px;
    margin-left: -180px;
    opacity: .5;
    transition: .2s ease-in;
    &:hover{
      opacity: 1;
      margin-left: -15px;
    }
  }
}
</style>
