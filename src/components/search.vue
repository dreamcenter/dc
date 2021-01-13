<template>
    <div id="search">
        <form @submit.prevent="search">
            <select v-model="choice">
                <option>baidu</option>
                <option>bing</option>
                <option>google</option>
            </select>
            <input type="text" autofocus v-model="content">
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      choice: 'baidu',
      content: ''
    }
  },
  methods: {
    search: function () {
      switch (this.choice) {
        case 'baidu':window.open('https://www.baidu.com/s?wd=' + this.content)
          break
        case 'bing':window.open('https://cn.bing.com/search?q=' + this.content)
          break
        case 'google':window.open('https://www.google.com/search?q=' + this.content)
          break
        default:break
      }
      this.content = ''
    }
  }
}
</script>

<style lang="scss" scoped>
    #search{
        width: 400px;
        height: 50px;
        box-sizing: content-box;
        margin: 0 auto;
        background-color: rgba(255,255,255,.4);
        select{
            height: 50px;
            width: 100px;
            outline: none;
            box-sizing: border-box;
            background-color: rgba(255,255,255,.2);
            color: white;
            font-size: 20px;
            font-weight: bold;
            text-align-last: center;
            border: 0;
            option{
                height: 30px;
                background-color: rgba(0,0,0,.5);
                text-align-last: center;
            }
        }
        input{
            height: 50px;
            width: 300px;
            outline: none;
            box-sizing: border-box;
            background-color: rgba(255,255,255,0);
            border-width: 0;
            color: white;
            font-size: 20px;
        }
    }
</style>
