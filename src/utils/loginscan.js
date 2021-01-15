// 模拟后端的登录校验
export function loginscan (datas, id, sec) {
  for (let i = 0; i < datas.length; i++) {
    if (datas[i].id === id) {
      if (datas[i].sec === sec) {
        return 2
      }
      return 1
    }
  }
  return 0
}
