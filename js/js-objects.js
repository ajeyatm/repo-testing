let a = {
  x: 'hss',
  y: 'nsjsj',
}

let b = {
  x: 'wjusu',
  z: 'usmsm',
}

let c = {
  z: 888,
  name: 'aaaa',
}

let combinedObj = Object.assign({}, a, b, c)

let concatedArrcombinedObj2 = {
  ...a, //spread the obj a
  ...b,
  ...c,
}

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let concatedArr = arr1.concat(arr2)
let concatedArr2 = [...arr1, ...arr2]

console.log('concatedArr2--', concatedArr2)

// console.log(combinedObj)

arr = [1, 2, 3]
arr.find((ele) => ele === 2)
console.log(3 in arr) //index ==> false
console.log(arr.includes(3)) //value ==> true

// str = 'xyz'
// console.log(str.includes('x')) //value ==> true

console.log('===============')
console.log('name' in combinedObj)
console.log(combinedObj.hasOwnProperty('name'))

Object.freeze(combinedObj)

combinedObj.x = 'hey its w'

console.log(Object.keys(combinedObj))
console.log(Object.values(combinedObj))
console.log('=======entries========')
console.log(Object.entries(combinedObj))
