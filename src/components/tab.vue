<template>
  <ul>
    <router-link to="/acgn/lihui" tag="li">1</router-link>
    <router-link to="/acgn/base" tag="li">2</router-link>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
  </ul>
</template>

<style lang="scss">
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
}
</style>
