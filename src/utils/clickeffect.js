export function clk (clickcnt) {
  var $html = document.getElementsByTagName('html')[0]
  var $body = document.getElementsByTagName('body')[0]
  $html.onclick = function (e) {
    var $elem = document.createElement('b')

    this.r = Math.floor(Math.random() * 255)
    this.g = Math.floor(Math.random() * 255)
    this.b = Math.floor(Math.random() * 255)
    $elem.style.color = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',1)'

    $elem.style.zIndex = 9999
    $elem.style.position = 'absolute'
    $elem.style.select = 'none'
    var x = e.pageX
    var y = e.pageY - 10
    $elem.style.left = (x - 10) + 'px'
    $elem.style.top = (y - 20) + 'px'
    var anim
    clearInterval(anim)
    switch (++clickcnt) {
      case 1:
        $elem.innerText = '异世界的大门该怎样打开呢？'
        break
      case 5:
        $elem.innerText = '(๑•́ ∀ •̀๑)'
        break
      case 6:
        $elem.innerText = '(๑•́ ₃ •̀๑)'
        break
      case 7:
        $elem.innerText = '(๑•̀_•́๑)'
        break
      case 8:
        $elem.innerText = '云彩真美啊!'
        break
      case 9:
        $elem.innerText = '(╯°口°)╯(┴—┴'
        break
      case 10:
        $elem.innerText = '૮( ᵒ̌皿ᵒ̌ )ა'
        break
      case 11:
        $elem.innerText = '餐馆有着很多小情侣'
        break
      case 12:
        $elem.innerText = '( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃'
        break
      case 13:
        $elem.innerText = '（￣へ￣）'
        break
      case 14:
        $elem.innerText = '╮(｡>口<｡)╭'
        break
      case 15:
        $elem.innerText = '小汽车总是出现在次元世界'
        break
      case 16:
        $elem.innerText = '╮(｡>口<｡)╭'
        break
      case 17:
        $elem.innerText = '╮(｡>口<｡)╭'
        break
      case 18:
        $elem.innerText = '╮(｡>口<｡)╭'
        break

      default:
        $elem.innerText = '❤'
        break
    }
    $elem.style.fontSize = Math.random() * 10 + 16 + 'px'
    var increase = 0
    setTimeout(function () {
      anim = setInterval(function () {
        if (++increase === 500) {
          clearInterval(anim)
          $body.removeChild($elem)
        }
        $elem.style.top = y - 20 - increase + 'px'
        $elem.style.opacity = (500 - increase) / 120
      }, 8)
    }, 70)
    $body.appendChild($elem)
  }
};
