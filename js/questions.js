let arr = ['hdhdsh', 27272, 'hh$$@jjs', null, true, 'hello']
//res = ['hdhdsh', 'hh$$@jjs','hello']
//res1 = ['hdhdsh','hello']

let res = arr.filter((item) => typeof item === 'string')
let alphbet = 'abcdefghijklmnopqrstuvwxyz'

let finalRes = arr.filter((item) => {
  if (typeof item === 'string') {
    let count = 0
    for (let char of item) {
      if (alphbet.includes(char)) {
        count = count + 1
      }
    }
    if (item.length === count) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
})

let finalRes2 = arr.filter((item) => {
  if (typeof item === 'string' && /^[a-zA-Z]+$/.test(item)) return true
})

console.log(finalRes2)
