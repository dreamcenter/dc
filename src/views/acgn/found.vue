<template>
  <div id="found">
    <h3>番剧搜索引擎</h3>
    <p></p>
    <div class="other">
      <input type="radio" name="other" id="all"><label for="all">all</label>
      <input type="radio" name="other" id="auto"><label for="auto">auto</label>
      <input type="radio" name="other" id="clear" checked><label for="clear">clear</label>
    </div>
    <input type="text" class="search" placeholder="请输入寻找的番剧">
    <p></p>
    <input type="checkbox" id="a"><label for="a">A</label>
    <input type="checkbox" id="b"><label for="a">B</label>
  </div>
</template>

<style lang="scss">
  #found{
    width: 1000px;
    height: 500px;
    margin: 100px auto;
    overflow-y: scroll;
    background-color: rgba(255, 255, 255, .3);
    border: 1px solid rgba(255, 255, 255, .8);
    padding-bottom: 10px;

    p{
      height: 5px;
      border-bottom: 2px solid white;
      margin: 5px;
    }

    h3{
      text-align: center;
      color: white;
      text-shadow: 0 0 10px red;
      margin-top: 5px;
    }
    .search{
      width: 300px;
      height: 40px;
      background-color: rgba(255,255,255,.5);
      margin: 10px auto;
      display: block;
      color: white;
      font-weight: bold;
      outline: none;
      font-size: 20px;
      border: rgba(255,255,255,.6) 2px solid;
      text-align: center;
    }
    .other{
      width: 200px;
      // border: 1px solid red;
      text-align: center;
      margin:0 auto;
      label{
        padding-left: 5px;
        padding-right: 10px;
      }
    }
    &::-webkit-scrollbar{width: 4px;background-color:rgba(255, 255, 255, .6);}
    &::-webkit-scrollbar-thumb{background-color: rgba(0, 0, 0, .3);}
  }
</style>
